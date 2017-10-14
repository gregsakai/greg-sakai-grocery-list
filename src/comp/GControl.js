import React, { Component } from "react";

class GControl extends Component {



  constructor(props){
    super(props);
    this.state = {
      glists:[],
      num:0,
      itemName:""
    }

    this.pushGItem = this.pushGItem.bind(this);
  }



  addItem(){

  }

  changeNum(evt){
    
  }

  changeItemName(evt){

  }


  render() {





    return (
      <div className="Control">
        <input type="text" placeholder="QTY" onChange={this.changeNum} />
        <input type="text" placeholder="Enter Item" onChange={this.pushGItem} />
        <button onClick={this.pushGItem} >+</button>
      </div>
    );
  }


}

export default GControl;
