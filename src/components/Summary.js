import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Menu from './Menu';


@inject('rootStore')
@observer
class Summary extends Component {
    render() {
        return (
            <div>
                <Menu />
                <h2> Summary </h2>
            </div>
        );
    }
}

export default Summary;
