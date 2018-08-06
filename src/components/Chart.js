import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import AmCharts from '@amcharts/amcharts3-react';

@inject('rootStore')
@observer
class Chart extends Component {
    render() {
        return (
            <AmCharts.React
              className="summary-chart"
              style={{
    width: '50%',
    height: '500px'
  }}
              options={{
    type: 'serial',
    theme: 'light',
    categoryField: 'year',
    graphs: [
        {
balloonText: 'Income:[[value]]',
fillAlphas: 0.8,
id: 'AmGraph-1',
lineAlpha: 0.2,
title: 'Income',
type: 'column',
valueField: 'income'
},
{
balloonText: 'Expenses:[[value]]',
fillAlphas: 0.8,
id: 'AmGraph-2',
lineAlpha: 0.2,
            title: 'Expenses',
            type: 'column',
            valueField: 'expenses'
        }],
    dataProvider: [
{
year: 2005,
income: 23.5,
expenses: 18.1
},
{
year: 2006,
income: 26.2,
expenses: 22.8
},
{
year: 2007,
income: 30.1,
expenses: 23.9
},
{
year: 2008,
income: 29.5,
expenses: 25.1
},
{
year: 2009,
income: 24.6,
expenses: 25
}
]
  }}
            />
        );
    }
}

export default Chart;
