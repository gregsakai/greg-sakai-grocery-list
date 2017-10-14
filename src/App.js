import React, { Component } from "react";
import "./App.css";
import GControl from "./comp/GControl";
import GLists from "./comp/GLists";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      glists:[],
      display:true
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
    arr.slice(index);
    this.setState({
      glists:arr
    });
    console.log(arr);
  }


  render() {

    var mycomp = null;
    if (this.state.display == true){
      mycomp = <GControl pushGItem={this.pushGItem} />;
    }

    return (
      <div className="App">
        <GControl />
        <GLists />
      </div>
    );
  }
}

export default App;
