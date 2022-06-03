import axios from "axios";
import {useState,useEffect} from 'react'
import {
  createUserWithEmailAndPassword,
  getAuth,
  getIdToken,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from "firebase/auth";


import initializeAuthenticaiton from "../Firebase/firebase.init";

// initialize firebase
initializeAuthenticaiton();


const useFirebase = () => {
  const adminEmail= "admin@gmail.com";
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // for checking if the user is admin or not
  const [admin, setAdmin] = useState(false);

  //   register user
  const registerUser = (email, password) => {
    setIsLoading(true);
    // i am just returning the promise here to do some extrea things on sign up page
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //  login with email and password
  const loginWithEmail = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   logout user
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
       alert("Logout successfull")
      })
      .finally(() => setIsLoading(false));
  };

  // update user name while user sign up
  const updateName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    }).then(() => {});
  };


  // setting an observer to hanlde user state
  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
       
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    // this clean up function is for better performance a little bit
    return () => unsubscribe;
  }, []);

  // cheking if the user is admin or not
  useEffect(() => {
    
  if(user?.email==="admin@gmail.com"){
    setAdmin(true)
  }else{
    setAdmin(false)
  }
  }, [user.email]);

//  adding user to database after login..should call this after succesfull sign up

const saveUser =(email,name,mobile,nidNo)=>{
const user = {name:name,email:email,mobile:mobile,nidNo:nidNo}
console.log(user)
// sending req top add user
fetch("http://127.0.0.1:8000/SaveUser", {
     mode:"no-cors",
    // Adding method type
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify(user),
     
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
 
// Converting to JSON
.then(response => response.json())
 
// Displaying results to console
.then(json => console.log(json))
.catch(err=>{
  console.log(err.response)
})
;
}
  return {
    user,
    setUser,
    registerUser,
    updateName,
    admin,
    isLoading,
    setIsLoading,
    loginWithEmail,
    logOut,
    saveUser

  
  
  };
};
export default useFirebase;

