
import { observable, action } from 'mobx';


export default class UIStore {
    @observable user;

    @observable menuAnchorEl;

    @observable rememberMe;

    @observable failedLogin;

    constructor(rootStore) {
        this.root = rootStore;
        this.user = {
            email: '',
            password: '',
            token: ''
        };
    }

    @action
    loginStatus() {
        // mock login============================
        // fetch login status from localstorage
        const usr = this.getUser();
        if (!usr) return false;
        return true;
    }

    @action
    login() {
        // validate login info and log user into system
        if (this.user.email && this.user.password) {
            this.user.token = '12345';
            this.saveUser();
            return true;
        }
        this.failedLogin = true;
        return false;
    }

    @action
    openMenu(target) {
        this.menuAnchorEl = target;
    }

    @action
    closeMenu() {
        this.menuAnchorEl = null;
    }

    @action
    rememberMeToggle() {
        this.rememberMe = !this.rememberMe;
    }

    @action
    clearUser() {
        this.user = {
            email: '',
            password: '',
            token: ''
        };
        localStorage.removeItem('user');
    }

    saveUser() {
        localStorage.setItem('user', JSON.stringify(this.user));
    }

    getUser() {
        return localStorage.getItem('user');
    }


}
