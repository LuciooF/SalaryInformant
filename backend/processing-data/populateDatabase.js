const fs = require('fs');
const csv = require('csv-parser');
const { executeQuery } = require('../databaseHelper');

async function populateDataByRegion() {
    fs.createReadStream('data/byRegion2023.csv')
        .pipe(csv())
        .on('data', async (row) => {
            const formattedData = {
                region: row.Region,
                weeklyAverage: row.WeeklyAverage,
                year: row.Year,
            };

            try {
                const insertQuery = `
                    INSERT INTO BYREGION (region, weeklyAverage, year)
                    VALUES ($1, $2, $3)
                `;

                // Use executeQuery to execute the insert query
                await executeQuery(insertQuery, [
                    formattedData.region,
                    formattedData.weeklyAverage,
                    formattedData.year,
                ]);
            } catch (insertError) {
                if (insertError.code === '23505') {
                    console.log('Data already in table, ignoring: ', formattedData);
                } else {
                    console.error('Error inserting data:', insertError);
                }
            }
        })
        .on('end', () => {
            console.log('Data insertion complete.');
        });
}

async function createDatabase() {
    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS BYREGION (
      region VARCHAR(255),
      weeklyAverage NUMERIC,
      year INT
    );
    ALTER TABLE BYREGION
    ADD CONSTRAINT unique_region_year UNIQUE (region, year);
  `;

    // Use executeQuery to execute the create table query
    await executeQuery(createTableQuery);

    console.log('Table BYREGION created (if it did not exist).');
}

async function dropDatabase() {
    try {
        const queryTables = `
            SELECT table_name
            FROM information_schema.tables
            WHERE table_schema = 'public' AND table_type = 'BASE TABLE';
        `;

        const result = await executeQuery(queryTables);
        const rows = result || []; // Ensure rows is an array or an empty array if it's falsy

        // Drop each table
        for (const row of rows) {
            const tableName = row.table_name;
            const dropTableQuery = `DROP TABLE IF EXISTS "${tableName}" CASCADE;`;

            // Use executeQuery to execute the drop table query
            await executeQuery(dropTableQuery);

            console.log(`Table ${tableName} dropped.`);
        }

        console.log('Database cleared.');
    } catch (error) {
        console.error('Error clearing DB', error);
    }
}




async function main() {
    await dropDatabase();
    await createDatabase();
    await populateDataByRegion();
}

main();