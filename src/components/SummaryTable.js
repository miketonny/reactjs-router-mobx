import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';


@inject('rootStore')
@observer
class SummaryTable extends Component {
    render() {
        return (
            <table className="table">
                <tbody>
                    <tr><td>Table</td></tr>
                </tbody>
            </table>
        );
    }
}

export default SummaryTable;
