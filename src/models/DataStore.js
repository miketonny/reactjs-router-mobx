
import { observable, computed, action } from "mobx"; 
import {fetchCategories, fetchCategoryVideoList, getVideoByID} from './Transport';

export default class DataStore {
    @observable categories = [];
    @observable categoryVideos = [];
    @observable currentVideo = {} ;

    constructor(rootStore){
        this.root = rootStore;
    }

    @action
    async initData(){
        const cats = await fetchCategories();  
        this.categories.replace(cats);
    }

    @action
    async fetchCategoryVids(catID){
       const vids = await fetchCategoryVideoList(catID); 
        this.categoryVideos.replace(vids);
    }

    @action
    async fetchVideo(vid){
        const video = await getVideoByID(vid);  
        this.currentVideo = video;
    }

 
}