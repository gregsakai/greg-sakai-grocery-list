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
    <App ref="pushGItem" />
    //pushGItem();
  }

  changeNum(evt){
    var newNum = evt.target.value;

    this.setState({
      num:newNum
    });
  }

  changeItemName(evt){
    var newItemName = evt.target.value;

    this.setState({
      itemName:newItemName
    });
  }


  render() {



    return (
      <div className="Control">
        <input type="text" placeholder="QTY" onChange={this.changeNum} />
        <input type="text" placeholder="Enter Item" onChange={this.changeItemName} />
        <button onClick={this.pushGItem} >+</button>
      </div>
    );
  }


}

export default GControl;
