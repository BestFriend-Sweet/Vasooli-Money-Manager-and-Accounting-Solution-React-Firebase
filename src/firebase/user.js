import fire as firebase from "./fire";

export const FBlogin = (email,password) => {
    firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
        console.log("User Logged In")
    }).catch(function(error) {
        console.log(error)
    });
}

export const FBlogout = () => {
    firebase.auth().signOut().then(function() {
        console.log("User Logged Out")
    }).catch(function(error) {
        console.log(error)
    });
}

export const FBsignup = (email,password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(()=>{
        console.log("user created")
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(error)
    });
}