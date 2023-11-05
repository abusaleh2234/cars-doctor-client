import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [looding, setLooding] = useState(true)

    const createUser = (email, password) => {
        setLooding(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth ,(currentUser) => {
            setUser(currentUser)
            setLooding(false)
        })
        return unsubscribe;
    },[])

    const userLogin = (email, password) => {
        setLooding(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const logOut = () => {
        setLooding(true)
        return signOut(auth)
    }

    const authInfo = {
        createUser,
        userLogin,
        logOut,
        user,
        looding,
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;