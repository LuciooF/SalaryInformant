const { executeQuery } = require('./databaseHelper');


async function getRegions() {
    const query = 'SELECT DISTINCT region FROM BYREGION;';
    try {
        const result = await executeQuery(query);

        const regions = result.map(row => row.region);
        return regions;
    } catch (error) {
        console.error('Error fetching regions:', error);
    }
}

module.exports = {
    getRegions
};