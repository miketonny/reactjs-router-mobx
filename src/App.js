import React, { Component} from "react";
import {hot} from "react-hot-loader";
import {inject, observer} from 'mobx-react';
import "./App.css";


@inject('rootStore')
@observer
class App extends Component{

    componentDidMount(){
      this.props.rootStore.data.initData(); //load data on start up
    }

    render(){ 
      const categories = this.props.rootStore.data.categories; 
      return(
        <div className="App" data-test='component-app'>
            <ul>
                {categories.map((c, i) => {
                  return <li key={i}><span>{c.shortname}</span> Video Counts: {c.total_videos}</li>
                })}
            </ul>
        </div>
      );
  }
}

export default hot(module)(App);