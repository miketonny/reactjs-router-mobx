import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            counter: 0,
            error: false
        };
    }
    handleIncrement(){
        let newCount = this.state.counter + 1;
        if(newCount > 0){
            this.setState({
                counter: newCount,
                error: false
            });
        }
    }
    handleDecrement(){
        let newCount = this.state.counter - 1;
        if(newCount < 0){
            this.setState({error:true});
        }else{
            this.setState({counter: newCount});
        }       
    }
  render(){
    // determine whether error is hidden based on state
    const errorClass = this.state.error ? '' : 'hidden';
    return(
      <div className="App" data-test='component-app'>
        <h1 data-test="counter-display"> The counter is currently {this.state.counter}</h1>
        <h2 data-test="counter-warning" className={`${errorClass}`} > counter cannot be less than 0!</h2>
        <button data-test="increment-button" onClick={this.handleIncrement.bind(this)}>Increment</button>
        <button data-test="decrement-button" onClick={this.handleDecrement.bind(this)}>Decrement</button>

      </div>
    );
  }
}

export default hot(module)(App);