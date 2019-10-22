import React, { Component } from 'react';
import * as firebase from 'firebase';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";







class AddAreaAndSlot extends Component {
        constructor() {
        super();
        this.state = {
            areas: [],
            applier: [],
            keys: []
        }
    }
    addArea(ev) {
        ev.preventDefault();
        const name = this.refs.name.value;
        const slots = this.refs.slots.value;
        
        
        if (!name ||  !slots  ) {
          alert("all fields are required");
        } 
        else {
        var arr=[];
                for(let i=1;i<=this.refs.slots.value;i++){
                    arr.push({
                        label: 'Slot No : ' + i
                    })
                    // arr.push(i)
                }
        // }
        var areas = firebase.database().ref("Areas/"+this.refs.name.value).set(arr);
       
        this.refs.name.value="";
        this.refs.slots.value="";
        alert("Add Area");

    }
}

render(){
    return(
        // <h1>Add Area And Slot</h1>
        <div>
        
            <div className="registeredslotwraper">
            <p> <span><strong>  Area Name:</strong><input type="text" placeholder='Area Name' ref="name"/></span></p>
            <p> <span><strong>   Enter Slots:</strong><input type="number" placeholder=' Enter Slots' ref="slots"/>  </span></p>
               <button type='button' onClick={this.addArea.bind(this)}>Add</button>
                </div>
           
          
                </div>
    )
}
}
export default AddAreaAndSlot;