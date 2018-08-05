
import { observable, computed, action } from "mobx"; 


export default class UIStore {
    @observable user;

    constructor(rootStore){
        this.root = rootStore;
        this.user = {
            email: '123@abc.com',
            token: 'geatew'
        };
    }
}
