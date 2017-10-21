import React, { Component } from "react";
import App from "../App";

class GLists extends Component {

  constructor(props){
    super(props);
    this.state = {
      num:0,
      itemName:""
    }

    this.removeItem = this.removeItem.bind(this);
  }


  removeItem(index){
    this.props.sliceGItem(index);
  }

  render() {

    var allItems = this.props.glists.map((obj, index)=>{

      return (
        <div key={index}>
          <span>{obj}</span>
          <button onClick={this.removeItem.bind(this, index)}>Remove</button>
        </div>
      )
    });

    return (
      <div className="Lists">
        {allItems}
      </div>
    );
  }


}

export default GLists;
