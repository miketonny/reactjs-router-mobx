import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Navbar from './Menu';
import Chart from './Chart';
import SummaryTable from './SummaryTable';


@inject('rootStore')
@observer
class Summary extends Component {
    render() {
        const { rootStore } = this.props;
        if (!rootStore.ui.loginStatus()) return <Redirect to="/" />;
        return (
          <Grid container spacing={16}>
            <Navbar />
            <h2> Summary </h2>
            <Grid container justify="center">
              <Chart />
            </Grid>
            <Grid container justify="center">
              <SummaryTable />
            </Grid>
          </Grid>
        );
    }
}

export default Summary;
