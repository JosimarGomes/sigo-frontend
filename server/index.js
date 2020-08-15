const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000

const app = express();
app.use(express.static(path.join(__dirname,'../build/')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'../build/index.html'));
});

app.listen(port, function () {
    console.log(`New app listening on port ${port}!`);
});