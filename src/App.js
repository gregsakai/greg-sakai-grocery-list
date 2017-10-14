import React, { Component } from "react";
import "./App.css";
import GControl from "./comp/GControl";
import GLists from "./comp/GLists";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      glists:[]
    }

    this.pushGItem = this.pushGItem.bind(this);
    this.sliceGItem = this.sliceGItem.bind(this);
  }

  var arr = this.state.glists;

  pushGItem(data){
    arr.push(data);
    this.setState({
      glists:arr
    });
    console.log(arr);
  }

  sliceGItem(index){
    arr.slice(index);
    this.setState({
      glists:arr
    });
    console.log(arr);
  }









  render() {





    return (
      <div className="App">
        <GControl />
        <GLists />
      </div>
    );
  }
}

export default App;
