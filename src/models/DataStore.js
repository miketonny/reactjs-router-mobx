
import { observable, computed, action } from "mobx"; 

export default class DataStore {
    constructor(rootStore){
        this.root = rootStore;
    }
 
}