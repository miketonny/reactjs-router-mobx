import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';


@inject('rootStore')
@observer
class Wellness extends Component {
    render() {
        return (
            <div>Wellness Page</div>
        );
    }
}

export default Wellness;
