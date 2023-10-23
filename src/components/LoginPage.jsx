import React from "react";
import { useEffect } from 'react';
import firebase from 'firebase/compat/app';
import { auth } from '../firebase.js'
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'


export default function LoginPage(props) {

    // FirebaseUI config.
    var uiConfig = {
        signInSuccessUrl: '/upload',
        signInOptions: [
            // Leave the lines as is for the providers you want to offer your users.
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        ],
    };

    // Initialize the FirebaseUI Widget using Firebase.
    var ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);

    useEffect(() => {
        ui.start("#firebaseui-auth-container", uiConfig);
    }, []);

    return (
        <div id="firebaseui-auth-container"></div>
    );
}