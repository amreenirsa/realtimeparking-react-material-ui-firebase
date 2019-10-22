import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { 
  BrowserRouter as Router,
  Route,
  Link ,
  NavLink
} from 'react-router-dom';

import {purple50,purple500, purple600, purple700 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Button from './components/button.js';
import SignUp from './components/signUp.js';
import SignIn from './components/signIn.js';
import  Admin from './components/admin/admin.js';
import  User from './components/user/user.js';






const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    textColor: purple500,
    canvasColor: purple50    ,
    primary1Color: purple600,
    primary2Color: purple700,
    
    accent1Color: '#7b539d',
    
  },
  
});

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                <div className="navbar-header">
                  <Link to="/" > Real Time Parking System</Link>
                </div>
                <Route  path="/" component={Button}/>
              
              </div>
            </nav>
            
            <Route exact path="/"/>
            <Route path="/signUp" component={SignUp} />
            <Route path="/signIn" component={SignIn} />
            <Route path="/admin" component={Admin}/>
            <Route path="/user" component={User}/>
            
          </div>

        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
