import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [looding, setLooding] = useState(true)

    const createUser = (email, password) => {
        setLooding(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }




    const userLogin = (email, password) => {
        setLooding(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const logOut = () => {
        setLooding(true)
        return signOut(auth)
    }

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

    //         const userEmail = currentUser?.email || user?.email;
    //         const logedUser = { email: userEmail }
    //         setUser(currentUser)
    //         console.log(currentUser.email);
    //         setLooding(false)
    //         if (currentUser) {

    //             axios.post("https://cars-doctor-server-2nd.vercel.app/jwt", logedUser, { withCredentials: true })
    //                 .then(res => {
    //                     console.log(res.data);
    //                 })
    //         }
    //         else {
    //             axios.post("https://cars-doctor-server-2nd.vercel.app/logout", logedUser, { withCredentials: true })
    //                 .then(res => {
    //                     console.log(res.data);
    //                 })
    //         }

    //     })
    //     return unsubscribe;
    // }, [])

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };
            setUser(currentUser);
            console.log('current user', currentUser);
            setLooding(false);
            if (currentUser) {
                axios.post('https://cars-doctor-server-2nd.vercel.app/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log('token response', res.data);
                    })
            }
            else {
                axios.post('https://cars-doctor-server-2nd.vercel.app/logout', loggedUser, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log(res.data);
                    })
            }
        });
        return () => {
            return unsubscribe();
        }
    }, [])

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