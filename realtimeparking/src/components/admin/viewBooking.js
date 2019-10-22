import React, { Component } from 'react';
import * as firebase from 'firebase';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ViewBooking extends Component {
    constructor() {
        super();
        this.state = {
            booking: [],
            Keys: [],
            checkAdmin: false
        }
    }
    componentDidMount() {
        
       
        firebase.auth().onAuthStateChanged(() => {
           
                    var typeCheck;
                    var userId = firebase.auth().currentUser.uid;
                    this.setState({userId:userId})
                    const rootRef= firebase.database().ref();
                    const speedRef = rootRef.child('USER/'+userId);
                    speedRef.on('value',snap => {
                        typeCheck=snap.val().Email;
                            if(typeCheck==='admin@gmail.com' ){
                                this.setState({
                                    checkAdmin: true
                                })
                            }
                    })

                firebase.database().ref("booking").on("value", snap => {
                    let obj = snap.val();
                    // console.log(obj);
                    let booking = [];
                    let Keys = [];
                    for (let key in obj) {
                        Keys.push(key)
                        booking.push(
                            obj[key]
                        )
                    }
                    // console.log(jobKeys);
                    this.setState({
                        booking: booking,
                        Keys: Keys
                    })
                    // console.log(this.state);
                })
            
        })
    }

    deleteBooking(index) {
        var key = this.state.Keys[index];
        firebase.database().ref('booking/' + key).remove();

    }
    render() {
        return (
            <div className="registeredslot">
              
                    <div>
                        
                            <h1>All Bookings</h1>
                            {this.state.booking.map((data, index) => (

                                <div className="registeredslotbox" key={index}>
                                   <h2><strong> Area Name: </strong>{data.areaName} </h2>
                                   <p> <span><strong>  Slot No:</strong> {data.slot}</span></p>
                                   <p> <span><strong>  Date:</strong> {data.date} </span></p>
                                   <p> <span><strong>  Start Time: </strong> {data.startTime} </span></p>
                                   <p> <span><strong>  End Time: {data.endTime} </strong></span></p>
                                    {this.state.checkAdmin ?
                                        <button onClick={this.deleteBooking.bind(this, index)}>Cancel</button>
                                        : <span></span>
                                    }
                                </div>
                            ))}
                       
                    </div>
                    </div>
        );
    }
}
export default ViewBooking;