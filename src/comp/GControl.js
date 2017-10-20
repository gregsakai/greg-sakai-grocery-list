import React, { Component } from "react";
import App from "../App";

class GControl extends Component {

  constructor(props){
    super(props);
    this.state = {
      num:0,
      itemName:""
    }

    this.addItem = this.addItem.bind(this);
    this.changeNum = this.changeNum.bind(this);
    this.changeItemName = this.changeItemName.bind(this);
  }

  addItem(){
    <App ref={App.pushGItem} />
    console.log("Added item");
    console.log(this.state.glists);
  }

  changeNum(evt){
    this.setState({
      num:evt.target.value
    });
    console.log("Changed quantity");
    console.log(evt.target.value);
  }

  changeItemName(evt){
    this.setState({
      itemName:evt.target.value
    });
    console.log("Changed item name");
    console.log(evt.target.value);
  }


  render() {

    return (
      <div className="Control">
        <input type="text" placeholder="QTY" onChange={this.changeNum} />
        <input type="text" placeholder="Enter Item" onChange={this.changeItemName} />
        <button onClick={this.addItem} >+</button>
      </div>
    );
  }
}

export default GControl;
