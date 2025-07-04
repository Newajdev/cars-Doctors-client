import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setuser] = useState(null);
    const [loadign, setloadign] = useState(true);
    
    const registerUser = (email, password) =>{
        setloadign(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) =>{
        setloadign(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setuser(currentUser)
            setloadign(false)
        });
        return ()=>{
            return unsubscribe()
        }

    },[])
    
    

    

    const UserInfo = {
        user,
        registerUser,
        loginUser
    }
    return (
        <AuthContext.Provider value={UserInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;