import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import Navbar from './Menu';

@inject('rootStore')
@observer
class TrainingLoad extends Component {
    render() {
        const { rootStore } = this.props;
        if (!rootStore.ui.loginStatus()) return <Redirect to="/" />;
        return (
            <div>
                <Navbar />
                <h2> Training Load </h2>
            </div>
        );
    }
}

export default TrainingLoad;
