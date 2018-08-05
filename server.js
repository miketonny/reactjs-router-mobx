const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'), (err) => {
      if (err) {
        res.status(500).send(err);
      }
    });
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});

module.exports = { app };
