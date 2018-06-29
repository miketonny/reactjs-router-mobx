import { computed, action } from "mobx"; 
import dataStore from './DataStore';
import uiStore from './UIStore';
import { fetchCategories } from "./Transport";

export default class RootStore { 
    constructor() {
        this.data = new dataStore(this);
        this.ui = new uiStore(this); 
    }
}