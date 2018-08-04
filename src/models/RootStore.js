import DataStore from './DataStore';
import UiStore from './UIStore';

export default class RootStore {
    constructor() {
        this.data = new DataStore(this);
        this.ui = new UiStore(this);
    }
}
