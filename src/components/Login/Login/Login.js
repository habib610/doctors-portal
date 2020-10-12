import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.Config';
import { UserContext } from '../../../App';
import GroupPeople from './../../../images/Group 140.png'
firebase.initializeApp(firebaseConfig);
const Login = () => {

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const handleGoogleSignIn = ()=>{
        firebase.auth().signInWithPopup(googleProvider).then(function(result) {

            const {displayName, email} = result.user;
            const info ={
                name: displayName,
                email: email
            }
            setLoggedInUser(info)
            // ...
          }).catch(function(error) {

          });
    }
    return (
        <div className="container " >
                <h1>Name: {loggedInUser.email}</h1>
            <div className="row justify-content-center">
                <div className="col-md-5 align-self-center">
                <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>

  <button type="submit" class="btn common-btn">Submit</button>
</form>
            
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