import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
//import { saveUser } from '../api/AuthApi';



const auth = getAuth(app);
//const googleProvider=new GoogleAuthProvider();
export const AuthContext=createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    };
    // const googleSignIn=()=>{
    //     setLoading(true);
    //     return signInWithPopup(auth,googleProvider)
    // }
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,loggedUser=>{
            console.log("Logged in user inside auth state observer",loggedUser);
            setUser(loggedUser)
            //saveUser(loggedUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    const authInfo={
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile
        //googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;