import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
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
            <h2>Summary</h2>
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


// with mobx inject, base component is wrapped with store injected, use wrappedcomp
Summary.wrappedComponent.propTypes = {
  rootStore: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Summary;
