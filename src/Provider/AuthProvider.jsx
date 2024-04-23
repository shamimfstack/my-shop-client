import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase/firebase.config"
import { GoogleAuthProvider } from "firebase/auth/cordova";


export const AuthContext = createContext();

const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // update user info
    const updateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    // user sign in
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // sign in with google
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    // logout user
    const logoutUser = () => {
        setLoading(true);
        return signOut(auth);
    }


    const authInfo = {
        user,
        loading,
        createUser,
        updateProfile,
        signInUser,
        signInWithGoogle,
        logoutUser

    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
}

export default AuthProvider;


