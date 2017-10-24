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
    var newNum = this.state.num.toString();
    this.props.pushGItem(newNum + " - " + this.state.itemName);
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
        <input type="text" className="Inputs" placeholder="QTY" onChange={this.changeNum} />
        <input type="text" className="Inputs" placeholder="Enter Item" onChange={this.changeItemName} />
        <button onClick={this.addItem} className="AddButton">Add Item</button>
      </div>
    );
  }
}

export default GControl;
