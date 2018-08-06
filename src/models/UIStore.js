
import { observable, action } from 'mobx';


export default class UIStore {
    @observable user;

    @observable menuAnchorEl;

    constructor(rootStore) {
        this.root = rootStore;
        this.user = {
            email: '123@abc.com',
            token: 'geawgw'
        };
    }

    @action
    loginStatus() {
        // mock login============================
        if (this.user.token === '') return false;
        return true;
    }

    @action
    openMenu(target) {
        this.menuAnchorEl = target;
    }

    @action
    closeMenu() {
        this.menuAnchorEl = null;
    }
}
