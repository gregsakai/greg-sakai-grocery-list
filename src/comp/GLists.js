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
    this.sliceGItem = this.sliceGItem.bind(this);
  }


  removeItem(){
    <App ref="sliceGItem" />
    //sliceGItem();
  }

  // create loop for glists indices, wrap values with div and button tags

  render() {





    return (
      <div className="Lists">

        <div>

          <button onClick={this.removeItem} >Remove Item</button>
        </div>

      </div>
    );
  }


}

export default GLists;
