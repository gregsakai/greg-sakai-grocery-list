import React, { Component } from "react";

class GLists extends Component {

  constructor(props){
    super(props);
    this.state = {
      num:0,
      itemName:""
    }

    this.removeItem = this.removeItem.bind(this);
    this.sliceGItem = this.sliceGItem.bind(this);
  }


  removeItem(){
    sliceGItem(index);
  }

  // create loop for glists indices, wrap values with div and button tags

  render() {





    return (
      <div className="Lists">
        <button onClick={this.sliceGItem} >Remove Item</button>
      </div>
    );
  }


}

export default GLists;
