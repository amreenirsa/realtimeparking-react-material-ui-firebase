import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link ,NavLink} from "react-router-dom";
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import {purple500,purple600, purple700 } from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';





import AddAreaAndSlot from './addAreaAndSlot.js';
import ViewLocation from './viewLocation.js';
import ViewBooking from './viewBooking.js';
import ViewUsers from './viewUsers.js';
import ViewFeedBack from './viewFeedBack.js'







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
}



class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            drawerOpen: false,
         };
    }
// drawer
    handleToggle = () => this.setState({open: !this.state.open});


    
    
    render() {
        //2nd Drawer style
        const contentStyle = {  
            transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)',
            height:'580px',
            
            
            
        };
        
            if (this.state.drawerOpen) {
              contentStyle.marginLeft = 256;
            }
    
        return (

            <Router>
            
                    <div>
                        <Drawer open={this.state.drawerOpen} containerStyle={{height: 'calc(100% - 65px)', top: 85}} >
                            <div className = "drawerbg" >
                                <div className="img"></div>
                                <div className="userInfo">
                                          <h1>Admin Pannel</h1>
                                          <h3>Name :  Admin  </h3>
                                          <h3> Email : admin@gmail.com </h3>
                                    </div>
                               
                                <button type="button" className="btn btn-success btn-sm">
                                    <NavLink to="/addAreaAndSlot" >add area</NavLink>
                                </button>

                                <button type="button" className="btn btn-success btn-sm">
                                    <NavLink to="/viewLocation" >View Location</NavLink>
                                </button>

                                <button type="button" className="btn btn-success btn-sm">
                                    <NavLink to="/viewBooking" >all booking</NavLink>
                                </button>

                                 <button type="button" className="btn btn-success btn-sm">
                                 <NavLink to="/viewUsers" className="link">View Users</NavLink>
                                </button>

                                <button type="button" className="btn btn-success btn-sm">
                                    <NavLink to="/viewFeedBack" >View Feedback</NavLink>
                                </button>

                      
                            </div>

                        </Drawer>
                        
                        <div style={contentStyle}>
                            <div style={styles.div}>
                                    <Paper  style={styles.paper2} zDepth={4}>
                                        <div className = "rightpannelbg" >
                                            {!this.state.drawerOpen ? 
                                            <button type="button" onClick={() => this.setState({ drawerOpen: true })  }>Open</button>
                                            : 
                                            <button type="button" style={{marginRight: 12}} onClick={() => this.setState({ drawerOpen: false }) }>close</button>
                                            }
                                            
                
                                                <Route exact path="/"  />
                                                <Route path="/addAreaAndSlot" component={AddAreaAndSlot} />
                                                <Route path="/viewLocation" component={ViewLocation} />
                                                <Route path="/viewBooking" component={ViewBooking} />
                                                <Route path="/viewUsers" component={ViewUsers} />
                                            
                                                <Route exact path="/viewFeedBack" component={ViewFeedBack} />
                                        </div>
                                    </Paper>
                                
                            </div>   
                        </div>
                    </div>  
                </Router>   
        )
    }
  }
  
  
  export default Admin ;  