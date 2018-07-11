const axios = require('axios');

const apiBaseUrl = 'https://api.avgle.com/v1/';

/**
 * handles data transport layer functions ==============================================
 */
const fetchCategories = async () => {
    try {
        const res = await axios(`${apiBaseUrl}categories`);
        const cats = res.data.response.categories;
        return cats; // returns the data from api..
    } catch (err) {
        console.log(err);
        return null;
    }
};

const fetchCategoryVideoList = async (id) => {
    try {
        const res = await axios(`${apiBaseUrl}videos/0?c=${id}&o=tr&t=m&c=1&type=public&limit=10`);
        return res.data.response.videos; // returns the data from api..
    } catch (err) {
        console.log(err);
        return null;
    }
};

const getVideoByID = async (id) => {
    try {
        const res = await axios(`${apiBaseUrl}video/${id}`);
        console.log(res.data.response.video);
        return res.data.response.video; // returns the data from api..
    } catch (err) {
        console.log(err);
        return null;
    }
};

module.exports = { fetchCategories, fetchCategoryVideoList, getVideoByID };
