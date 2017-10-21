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
    var title = this.state.itemName;
    this.props.pushGItem(title);
  }

  changeNum(evt){
    var newNum = evt.target.value;
    this.setState({
      num:newNum
    });
    console.log(newNum);
  }

  changeItemName(evt){
    var title = evt.target.value;
    this.setState({
      itemName:title
    });
    console.log(title);
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
