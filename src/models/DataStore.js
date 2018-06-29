
import { observable, computed, action } from "mobx"; 
import {fetchCategories} from './Transport';

export default class DataStore {
    @observable categories = [];

    constructor(rootStore){
        this.root = rootStore;
    }

    @action
    async initData(){
       const cats = await fetchCategories();
       console.log(cats);
        this.categories.replace(cats);
    }
}