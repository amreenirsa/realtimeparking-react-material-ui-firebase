import React, { Component } from 'react';
import * as firebase from 'firebase';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ViewLocation extends Component {
    constructor() {
        super();
        this.state = {
            areaObj: [],
            areaName: []
        }
    }
    componentDidMount() {
        firebase.database().ref("Areas").on("value", snap => {
            var areaObj = snap.val();
            
            var obj = [];
            var areaName = [];
            for (let key in areaObj) {
                obj.push(areaObj[key])
                areaName.push(key)
                
            }
           
            this.setState({
                areaObj: obj,
                areaName: areaName
            })

           
        })
    }
    slot(name, index) {
        console.log(name, index + 1);
    }
    render() {
       
        return (
           
            <div>
               
                    <div className="areas">
                        {this.state.areaObj.map((data, index) => (
                            <table key={index}>
                                <tr ><span><h1>{this.state.areaName[index]}</h1></span>
                                    <br />
                                    {data.map((d, i) => (
                                        <td key={i}>
                                              <button>{d.label}</button>
                                        </td>
                                    ))}
                                </tr><br />
                            </table>
                        ))}
                    </div>
                    :
                   
            </div>
        )
    }
}
export default ViewLocation;
