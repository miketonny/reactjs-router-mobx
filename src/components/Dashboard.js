import React, { Component} from "react"; 
import {inject, observer} from 'mobx-react';  
import { Grid } from "semantic-ui-react";


@inject('rootStore')
@observer
class Dashboard extends Component{
    render(){  
        return <Grid className="dashboard" verticalAlign='middle' centered>
            <h1>Welcome</h1> 
        </Grid>
    }
}

export default Dashboard;