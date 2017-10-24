import React, { Component } from "react";
import App from "../App";

class GLists extends Component {

  constructor(props){
    super(props);

    this.removeItem = this.removeItem.bind(this);
  }

  removeItem(index){
    this.props.sliceGItem(index);
  }

  render() {

    var allItems = this.props.glists.map((obj, index)=>{
      return (
        <div key={index}>
          <span className="GroceryItem">{obj}</span>
          <button onClick={this.removeItem.bind(this, index)} className="RemoveButtons">Remove</button>
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
