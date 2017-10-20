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


  removeItem(){
    <App ref={App.sliceGItem} />
    console.log("Removed item");
  }

  // create loop for glists indices, wrap values with div and button tags
  // render: function() {
  //   	var names = ['Jake', 'Jon', 'Thruster'];
  //       var namesList = names.map(function(name, index){
  //           			return <li key={ index }>{name}</li>;
  //         			})
  //
  //       return  <ul>{ namesList }</ul>
  //   }


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
