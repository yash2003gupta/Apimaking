const express = require('express');
const bodyParser = require('body-parser');
const route = require('./route');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(route);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});