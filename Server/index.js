const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();




try {
    app.get('/', (req, res) => {
        res.send('Welcome to my server!');
    });
} catch (error) {
    console.error('Error on GET / route:', error);
}


const port = 4050;

try {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
} catch (error) {
    console.error(`Error starting server on port ${port}:`, error);
}
