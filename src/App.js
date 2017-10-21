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

  pushGItem(data){
    var arr = this.state.glists;
    arr.push(data);
    this.setState({
      glists:arr
    });
    console.log(arr);
  }

  sliceGItem(index){
    var arr = this.state.glists;
    arr.splice(index, 1);
    this.setState({
      glists:arr
    });
  }

  render() {

    return (
      <div className="App">
        <GControl
          pushGItem={this.pushGItem}
        />
        <GLists
          glists={this.state.glists}
          sliceGItem={this.sliceGItem}
        />
      </div>
    );
  }
}

export default App;
