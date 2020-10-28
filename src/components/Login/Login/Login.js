import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.Config';
import { UserContext } from '../../../App';
import GroupPeople from './../../../images/Group 140.png'
import { useHistory, useLocation } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
firebase.initializeApp(firebaseConfig);

const Login = () => {
    let history = useHistory();
    let location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)




    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = ()=>{
        firebase.auth().signInWithPopup(googleProvider).then(function(result) {

            const {displayName, email} = result.user;
            const info ={
                name: displayName,
                email: email
            }
            setLoggedInUser(info)
            history.replace(from);
            // ...
          }).catch(function(error) {

          });
    }


//new code
const [newUser, setNewUser] = useState(false);
    
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success:false
    });
   





    // console.log(newUser)
    const handleBlur = (e) => {
        let fieldValid = true;

        if (e.target.name === 'email') {
            // const passLength = e.target.value.length > 6;
            const fieldValid = /\S+@\S+\.\S+/.test(e.target.value)

        }
        if (e.target.name === 'password') {

            fieldValid = /\d/.test(e.target.value) && e.target.value.length > 6;
        }
        if (fieldValid) {
            const userInfo = { ...user };
            userInfo[e.target.name] = e.target.value;
            setUser(userInfo)
        }
    }

    const handleSubmit = (e) => {


        // this code is for crating new user 
        if ( newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(res =>{
                const newUserInfo = {...user};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo)
                updateUserName(user.name, user.email)
                console.log(res.user)
            })
            .catch(function(error) {
                var errorMessage = error.message;
                console.log(errorMessage)
                const newUserInfo = {...user};
                newUserInfo.error = errorMessage;
                newUserInfo.success = false;
                setUser(newUserInfo)

                // ...
              });
        }

        //this code is for login who has an account
        if(!newUser && user.password && user.email){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res =>{
                const newUserInfo = {...user};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo)
            })
            .catch(function(error) {
                // Handle Errors here.
               var errorMessage = error.message;
                const newUserInfo = {...user};
                newUserInfo.error = errorMessage;
                newUserInfo.success = false;
                setUser(newUserInfo)
              });
        }

        e.preventDefault();
    }


    const updateUserName = (name, email) =>{
        var user = firebase.auth().currentUser;

user.updateProfile({
  displayName: name,
  email: email
}).then(res=> {
  console.log(res.displayName)
}).catch(function(error) {
  // An error happened.
});
    }



    return (
        <div className="container " >
            <div className="row justify-content-center">
                <div className="col-md-5 align-self-center">
                <h1 className="my-4 text-center">{newUser ? "Sign up form" : "Login"}</h1>
            <Form onSubmit={handleSubmit} className="border p-4">
                {newUser && <Form.Group controlId="formBasicEmail">
                    <Form.Control name="name" type="text" placeholder="Enter Name" onBlur={handleBlur} required />
                </Form.Group>}

                <Form.Group controlId="formBasicEmail">
                    <Form.Control name="email" type="email" placeholder="Enter email" onBlur={handleBlur} required />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">

                    <Form.Control name="password" type="password" placeholder="Password" onBlur={handleBlur} required />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="New user" onChange={() => setNewUser(!newUser)} />
                </Form.Group>

                {newUser ? <Button variant="primary py-2" type="submit">
                    Create New Account
  </Button> : <Button variant="primary py-2" type="submit">Login</Button>}
   {user.error && <p style={{color:"red"}}> {user.error}</p>}
   {user.success && <p style={{color:"green"}}>Account {newUser ?"Created": "Login"} Successfully</p>}
            </Form>



            <button className="btn btn-info my-4" onClick={handleGoogleSignIn}>Sign In With Google</button>
                </div>






                
                <div className="col-md-7">
                    <img src={GroupPeople} className=" w-75 img-fluid " alt=""/>
                </div>
            </div>

        </div>
    );
};

export default Login;