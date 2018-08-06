import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import Menu from './Menu';


@inject('rootStore')
@observer
class NoMatch extends Component {
    render() {
        const { rootStore } = this.props;
        if (!rootStore.ui.loginStatus()) return <Redirect to="/" />;
        return (
            <div>
                <Menu />
                <h2> 404 Page Not Found </h2>
            </div>
        );
    }
}

export default NoMatch;
