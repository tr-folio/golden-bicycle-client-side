import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Login/Firebase/firebase.init";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const auth = getAuth();

    const registerUser = (email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        })
        .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCreddential) => {
            const user = userCreddential.user;
        })
        .catch((error) => {
            const errorMessage = errorMessage;
        })
    }

    // observe user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, []);

    const logout = () => {
        signOut(auth).then(() => {
            setUser({});
        })
        .catch((error) => {

        });
    }

    return {
        user,
        isLoading, 
        registerUser,
        loginUser,
        logout
    }
}

export default useFirebase;