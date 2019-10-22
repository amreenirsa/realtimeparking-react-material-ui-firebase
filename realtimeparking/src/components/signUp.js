import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import * as firebase from 'firebase';
import { Link } from 'react-router-dom';



const styles = {
    div:{
      display: 'flex',
      flexDirection: 'row wrap',
      marginTop: 20,
      width: '95%',
    },
    paper1:{
      flex: 1,
      height: '500px',
      width: '100%',
      borderWidth:'1px',
      borderColor: '#66418c',
      borderStyle:'solid',
      margin: 0,
      textAlign: 'center',

    },
    
    textField:{
        width: '80%',
        fontSize: '1em',

    },

    button:{
        width: '80%',
        fontSize: '1em',
        marginTop: '10%',
        backgroundColor: '#00bcd4',

    }

    
  };


class SignUp extends Component {
    constructor(){
        super();
        this.state = {
        dataSource: [],
//firebase
        name:'',
        email:'',
        password:'',
        error :{
            message : ''
           }
    }
      };
    
      handleUpdateInput = (value) => {
        this.setState({
          dataSource: [
            value,
            value + value,
            value + value + value,
          ],
        });
      };

// firebase signup

handleClick(event){
    

        const auth=firebase.auth();
        auth.createUserWithEmailAndPassword(this.state.email,this.state.password).catch(error => {
            this.setState({error})
        })
        .then(()=>{
            var uid = firebase.auth().currentUser.uid;
            firebase.database().ref('USER'+'/'+uid).set({
                name:this.state.name,
                Email:this.state.email,
                Pass:this.state.password,
            });
           this.props.history.push('/user')
        })
            
            .catch(error => {
                this.setState({error})
            })
        
           
    
}
    
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7"></div>
                        <div className="col-md-5">
                            <div style={styles.div}>
                                <Paper  style={styles.paper1} zDepth={3}>
                                    <h2 > SignUp </h2>

                                    
                                        <TextField style={styles.textField}
                                            hintText="User Name"
                                            floatingLabelText="Enter User Name"
                                            onChange = {(event,newValue) => this.setState({name:newValue})}
                                        /><br />

                                        <TextField style={styles.textField}
                                            hintText="E-Mail"
                                            floatingLabelText="Enter E-Mail"
                                            onChange = {(event,newValue) => this.setState({email:newValue})}
                                            
                                            
                                        /><br />
            
                                        <TextField style={styles.textField}
                                            hintText="Password Field"
                                            floatingLabelText="Password"
                                            type="password"
                                            onChange = {(event,newValue) => this.setState({password:newValue})}
                                        /><br />

                                        <RaisedButton style={styles.button} 
                                        label="SignUp" secondary={true} 
                                        onClick={(event) => this.handleClick(event)}/>

                                            
                                  
                                    <p className="error">
                                        {this.state.error.message} 
                                    </p>
                                                    
                                    <div>
                                        <Link to ={'/signIn'}>
                                            <p className="error">Already a user ? Sign in instead</p> 
                                        </Link>
                                    </div>
                                </Paper>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
           
        )
        
        
        
    }
    
    
    
}
    
    
export default SignUp;