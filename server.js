const express = require('express')
const app = express()
const path = require('path')

app.use('/bundle.js', express.static(path.resolve('bundle.js')));

app.get('/*', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).sendFile(path.resolve('index.html'));
});

app.listen(8080, () => console.log('Example app listening on port 8080!'))