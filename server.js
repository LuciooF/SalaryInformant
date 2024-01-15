require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const { getRegions } = require('./backend/populateFrontend');

app.use(express.static(path.join(__dirname, 'frontend')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend','index.html'));
});
app.get('/api/getRegions', async (req, res) => {
    try {
        const regions = await getRegions();
        res.json(regions);
    } catch (error) {
        console.error('Error fetching regions:', error);
        res.status(500).send('Error loading regions');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
