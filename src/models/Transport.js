import axios from 'axios';
const _apiBaseUrl = 'https://api.avgle.com/v1/';

/**
 * handles data transport layer functions ==============================================
 */

export async function fetchCategories() {
    try {
        return await axios('/api/categories');
    } catch (err) {
        return [];
    }
}

export async function fetchCategoryVideoList(id){
    try { 
        const res = await axios(`${_apiBaseUrl}videos/${id}?o=tr&t=m&c=1&type=public&limit=10`);   
        return res.data.response.videos; //returns the data from api..
    } catch (err) {
        console.log(err); 
    }
}

export async function getVideoByID(id){
    try { 
        const res = await axios(`${_apiBaseUrl}video/${id}`); 
        console.log(res.data.response.video);
        return res.data.response.video; //returns the data from api..
    } catch (err) {
        console.log(err); 
    }
}