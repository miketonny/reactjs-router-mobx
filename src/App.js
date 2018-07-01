import React, { Component} from "react";
import {hot} from "react-hot-loader";
import {inject, observer} from 'mobx-react';
import { Menu } from 'semantic-ui-react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Category from './components/Category';
import Video from './components/Video';
import "./App.scss";


@inject('rootStore')
@observer
class App extends Component{

    componentDidMount(){
      this.props.rootStore.data.initData(); //load data on start up
    }

    selectCategory(catID){
      this.props.rootStore.data.fetchCategoryVids(catID); //load data on start up
    }

    render(){ 
      const categories = this.props.rootStore.data.categories; 
      return(
        <Router basename='/'>
          <div className="App" data-test='component-app'>
              <Menu>
                {categories.map((c, i) => {
                      return <Menu.Item key={i} ><Link to={`/${c.slug}-${c.CHID}`} onClick={()=> this.selectCategory(c.CHID)} ><span>{c.shortname}</span></Link></Menu.Item>
                    })}
              </Menu> 
              
              <Route exact path={`/:category`} component={Category} />          
              <Route exact path={`/:category/:vid`} component={Video}/>
          </div>
        </Router>
      );
  }
}

export default hot(module)(App);