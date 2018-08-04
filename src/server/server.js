const express = require('express');
const path = require('path');
const { fetchCategories, fetchCategoryVideoList, getVideoByID } = require('../models/Service');

const app = express();
const port = 8080;

app.use(express.static('dist'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'), (err) => {
      if (err) {
        res.status(500).send(err);
      }
    });
});

app.get('/api/categories', async (req, res) => {
    try {
        const categories = await fetchCategories();
        res.status(200).send(categories);
    } catch (e) {
        res.status(400).send();
        console.log(e);
    }
});

app.get('/api/videos', async (req, res) => {
    const result = await fetchCategoryVideoList(req.id);
    result.then((videos) => {
        res.status(200).send(videos);
    }).catch((e) => {
        res.status(400).send();
        console.log(e);
    });
});

app.get('/api/video/:id', async (req, res) => {
    const result = await getVideoByID(req.id);
    result.then((video) => {
        res.status(200).send(video);
    }).catch((e) => {
        res.status(400).send();
        console.log(e);
    });
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
