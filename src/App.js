import React, { Component} from "react";
import {hot} from "react-hot-loader";
import {inject, observer} from 'mobx-react';
import "./App.css";


@inject('rootStore')
@observer
class App extends Component{


    render(){ 
    return(
      <div className="App" data-test='component-app'>

      </div>
    );
  }
}

export default hot(module)(App);