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


class SignIn extends Component {
    constructor(props){
        super(props);
        this.state={
        dataSource: [],
    //firebase
    username:'',
    password:'',
    userId:null,
    }
        error :{
            message : ''
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

      handleClick(event){
        
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(this.state.username,this.state.password)
        .then((data)=>{
            var typeCheck;
            var userId = firebase.auth().currentUser.uid;
            this.setState({userId:userId})
            const rootRef= firebase.database().ref();
            const speedRef = rootRef.child('USER/'+userId);
                speedRef.on('value',snap => {
                typeCheck=snap.val().Email;
                    if(typeCheck==='admin@gmail.com' ){
                        this.props.history.push('/admin');
                    }
                    else{
                        this.props.history.push('/user');
                    }
                
                })
        })
        .catch(error => {
            var errorCode = error.code;
            var errorMessage = error.message;
                //console.log("err",errorCode);
   
            this.setState({errorCode})
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
                                    <h2 > SignIn </h2>

                                    

                                        <TextField style={styles.textField}
                                            hintText="E-Mail"
                                            floatingLabelText="Enter E-Mail"
                                            onChange = {(event,newValue) => this.setState({username:newValue})}
                                        /><br />
            
                                        <TextField style={styles.textField}
                                            hintText="Password Field"
                                            floatingLabelText="Password"
                                            type="password"
                                            onChange = {(event,newValue) => this.setState({password:newValue})}
                                        /><br />

                                        <RaisedButton style={styles.button} label="SignUp" secondary={true}
                                        onClick={(event) => this.handleClick(event)} />

                                            
                                    <p className="error">
                                        {this.state.errorCode} 
                                    </p>
                                    

                                <div>
                                    <Link to ={'./signUp'}>
                                    <p className="error">Sign up </p>
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
    
    
export default SignIn;