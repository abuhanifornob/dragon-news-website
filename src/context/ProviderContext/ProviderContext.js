import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)


const ProviderContext = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const logInWithGoogle = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    const createUseEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUserEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const userProfileUpdate = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile)
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, []);


    const authInfo = {
        user,
        loading,
        logInWithGoogle,
        logOut,
        createUseEmail,
        signInUserEmail,
        userProfileUpdate
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ProviderContext;