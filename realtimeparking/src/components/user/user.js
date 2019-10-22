import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link ,NavLink} from "react-router-dom";
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import {purple500,purple600, purple700 } from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import * as firebase from 'firebase';


import ViewLocation from './viewLocation.js';
import BookingParking from './bookingParking.js';
import Receipt from './receipt.js';
import ViewBooking from './viewBooking.js';
import Feedback from './feedback.js';



const styles = {
    div:{
      display: 'flex',
      flexDirection: 'row wrap',
      marginTop: 8,
      marginLeft:'auto',
      marginRight:'auto',
      
      
    },
    paper2:{
      flex: 1,
      height: '580px',
      width: '80%',
      margin: 5,
      

    },

    dialouge2:{

        height: '580px',
        width: '100%',
        marginLeft:'auto',
        marginRight:'auto',
        
        
  
      },
}



class User extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           
            drawerOpen: false,
//diaouge
            open: false,
            user: {
                name: null,
                email: null,
                type:null,
                uid: null
            
            }
            
           
         };
    }
   
    
      handleOpen = () => {
        this.setState({open: true});
      };
    
      handleClose = () => {
        this.setState({open: false});
      };
// drawer
    handleToggle = () => this.setState({open: !this.state.open});


    componentDidMount() {
        firebase.auth().onAuthStateChanged(()=>{
            if(firebase.auth().currentUser){
                var Rootref=firebase.database().ref().child("USER/"+firebase.auth().currentUser.uid);
                Rootref.on("value",snap=>{
                    let currentUserObj = snap.val()
                    this.setState({
                        user: currentUserObj
                    })
                })
            }
        })
              
    }
    
    render() {
        //2nd Drawer style
        const contentStyle = {  
            transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)',
            height:'580px',
            
            
            
        };
        
            if (this.state.drawerOpen) {
              contentStyle.marginLeft = 256;
            }

//dialouge
        const actions = [
            <FlatButton
            label="Cancel"
            primary={true}
            onClick={this.handleClose}
            />,
            
        ];
    
        return (

            <Router>
          
                    <div> 
                        <Drawer open={this.state.drawerOpen} containerStyle={{height: 'calc(100% - 85px)', top: 85,}} >
                        <div className = "drawerbg" >
                                <div className="img"></div>
                                <div className="userInfo">
                                          <h1>User info</h1>
                                          <h3><b>  Name  : </b> {this.state.user.name} </h3>
                                            <h3><b>  Email : </b> {this.state.user.email} </h3>
                                        <h3><b>  Type  :  </b>{this.state.user.type}</h3>
                                    </div>

                                <button type="button" className="btn btn-success btn-sm">
                                    <NavLink to="/viewLocation" >View Location </NavLink>
                                </button>

                                <button type="button" className="btn btn-success btn-sm">
                                    <NavLink to="/receipt" >My booking</NavLink>
                                </button>

                                 <button type="button" className="btn btn-success btn-sm">
                                    <NavLink to="/viewBooking" >View Booking</NavLink>
                                </button>

                                <button type="button" className="btn btn-success btn-sm"
                                onClick={this.handleOpen}>
                                    give feedback
                                </button>

                                <Dialog
                                    title="Feedback"
                                    actions={actions}
                                    modal={false}
                                    open={this.state.open}
                                    onRequestClose={this.handleClose}
                                    style={styles.dialouge2}
                                    

                                    >
                                   
                                      <Feedback/>
                                    
                                </Dialog>
                               
                      
                            </div>

                        </Drawer>
                        
                        <div style={contentStyle}>
                            <div style={styles.div}>
                                    <Paper  style={styles.paper2} zDepth={4}>
                                        <div className = "rightpannelbg" >
                                            {!this.state.drawerOpen ? 
                                            <button type="button" primary={true} onClick={() => this.setState({ drawerOpen: true })  }>Open</button>
                                            : 
                                            <button type="button" primary={true}  style={{marginRight: 12}} onClick={() => this.setState({ drawerOpen: false }) }>close</button>
                                            }
                                            
                
                                                <Route exact path="/viewLocation" component={ViewLocation} />
                                                <Route path="/bookingParking/:name/:index" component={BookingParking} />
                                                <Route path="/receipt" component={Receipt} />
             
                                                <Route path="/viewBooking" component={ViewBooking} />
                                                
                                                
                                        </div>
                                    </Paper>
                                
                            </div>   
                        </div>
                    </div>   
                  
                </Router>   
        )
    }
  }
  
  
  export default User ; 