import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from './App';
import RootStore from './models/rootStore';

const store = new RootStore();

ReactDOM.render(
    <Provider rootStore={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
