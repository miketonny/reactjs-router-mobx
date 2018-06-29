import axios from 'axios';
const _apiBaseUrl = 'https://api.avgle.com/v1/';

/**
 * handles data transport layer functions ==============================================
 */

export async function fetchCategories(){
    try { 
        const res = await axios(`${_apiBaseUrl}categories`);  
        const cats = res.data.response.categories; 
        return cats; //returns the data from api..
    } catch (err) {
        console.log(err); 
    }
}