import React, { Component } from 'react';
import * as firebase from 'firebase';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../App.css';
class ViewFeedBack extends Component {
    className="registeredslotbox"
    render() {
        return (
            <div>
               
                    <div>
                        {this.state.check ?
                            <ul className="allList">
                                <h1>All Feedback</h1>
                                {this.state.allFeedback.map((data, index) => (
                                    <div>
                                        <li className="eachList" key={index}>
                                            <span>Feedback: </span>{data.feedback.email}<br />
                                            {data.feedback.feedback}<br />
                                            <textarea ref="reply"></textarea><br />
                                            <button onClick={this.reply.bind(this, index)} >Reply</button>
                                        </li>

                                    </div>
                                ))}
                            </ul>
                            :
                            <div className="allList">No Feedback</div>
                        }
                    </div>
                    
            </div>
        )
    }
}
export default ViewFeedBack;

