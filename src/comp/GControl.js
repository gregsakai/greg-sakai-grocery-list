import React, { Component } from "react";

class GControl extends Component {



  constructor(props){
    super(props);
    this.state = {
      num:0,
      itemName:""
    }

  }



  addItem(){
    pushGItem(data);
  }

  changeNum(evt){

  }

  changeItemName(evt){

  }


  render() {





    return (
      <div className="Control">
        <input type="text" placeholder="QTY" />
        <input type="text" placeholder="Enter Item" />
        <button onClick={this.addItem} >+</button>
      </div>
    );
  }


}

export default GControl;
