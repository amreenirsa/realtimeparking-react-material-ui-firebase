import React, { Component } from 'react';
import * as firebase from 'firebase';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ViewFeedBack extends Component {
    constructor() {
        super();
        this.state = {
            allFeedback: [],
            allkeys: [],
            check: false
        }
    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged(() => {
            if (firebase.auth().currentUser) {
                if (firebase.database().ref("feedback")) {
                    firebase.database().ref("feedback").on("value", snap => {
                        let obj = snap.val();
                        let feedback = [];
                        let allKeys = [];
                        for (let key in obj) {
                            allKeys.push(key);
                            feedback.push(obj[key])
                        }
                        // console.log(feedback);
                        this.setState({
                            allFeedback: feedback,
                            allkeys: allKeys,
                            check: true
                        })
                        // console.log(this.state);
                    })
                }
            }
        })
    }
    reply(index) {
        firebase.database().ref('feedback/' + this.state.allkeys[index] + '/reply/').set({ reply: this.refs.reply.value });
        this.refs.reply.value = "";
        //   console.log(this.refs.feedback.value);
    }
    render() {
        return (
            <div className="registeredslot">
                
                    
                        {this.state.check ?
                            <div>
                                <h1>All Feedback</h1>
                                {this.state.allFeedback.map((data, index) => (
                                    
                                        <div className="registeredslotbox" key={index}>
                                            <span>Feedback: </span>{data.feedback.email}<br />
                                            {data.feedback.feedback}<br />
                                            <textarea ref="reply"></textarea><br />
                                            <button onClick={this.reply.bind(this, index)} >Reply</button>
                                        </div>

                                    
                                ))}
                            </div>
                            :
                            <div className="registeredslotbox">No Feedback</div>
                        }
                  
                    
            </div>
        )
    }
}
export default ViewFeedBack;

