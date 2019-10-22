import React from 'react';
import Paper from 'material-ui/Paper';
import { BrowserRouter as Router, Route, Link ,NavLink} from "react-router-dom";


import Tariqroad from './tariqroad.js';
import Sader from './sader.js';
import Yourfeedback from './yourfeedback.js';


const styles = {
  div:{
    display: 'flex',
    flexDirection: 'row wrap',
    marginTop: 20,
    marginLeft:'8%',
    marginRight:'3%',
    width: '20%',
    float:'left',
    
  },
  paper3:{
    flex: 1,
    height: '150px',
    width: '20%',
    margin: 0,
    backgroundColor:'transparent',
    textAlign:'center',
    paddingTop:55,
    fontSize:'1.6em',
    
    

  },
}


class Booking extends React.Component {
    render() {
      return (
      <Router>
        <div className="rightwrapper">
            <h1>All Areas</h1>
            <hr/>
            <div style={styles.div}>
              <Paper  style={styles.paper3} zDepth={4} circle={true}>
                <NavLink to="/user/tariqroad" >Tariq road</NavLink>
              </Paper>
            </div>

            <div style={styles.div}>
              <Paper  style={styles.paper3} zDepth={4} circle={true}>
                <NavLink to="/sader" >sader</NavLink>
              </Paper>
            </div>

            <div style={styles.div}>
              <Paper  style={styles.paper3} zDepth={4} circle={true}>
                <NavLink to="/tariqroad" >hydri</NavLink>
              </Paper>
            </div>

            <div style={styles.div}>
              <Paper  style={styles.paper3} zDepth={4} circle={true}>
                <NavLink to="/yourfeedback" >airport</NavLink>
              </Paper>
            </div>

            <div style={styles.div}>
              <Paper  style={styles.paper3} zDepth={4} circle={true}>
                <NavLink to="/tariqroad" >cant station</NavLink>
              </Paper>
            </div>

            <div style={styles.div}>
              <Paper  style={styles.paper3} zDepth={4} circle={true}>
                <NavLink to="/tariqroad" >civic center</NavLink>
              </Paper>
            </div>
            <Route exact path="/booking"  />
            <Route path="/tariqroad" component={Tariqroad} />
            <Route path="/sader" component={Sader} />
            <Route path="/yourfeedback" component={Yourfeedback} />




        </div>
        
      </Router>
    );
}
}

export default Booking;