import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Login/Firebase/firebase.init";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const auth = getAuth();

    const registerUser = (email, password, name) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            // console.log(name);
            saveUser(email, name);
            updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: ""
            })
            .then(() => {

            })
            .catch((error) => {

            })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        })
        .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCreddential) => {
            const user = userCreddential.user;
            localStorage.setItem("userName", user.displayName);
        })
        .catch((error) => {
            const errorMessage = errorMessage;
        })
        .finally(() => setIsLoading(false));
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

    const logout = (history) => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser({});
            localStorage.removeItem("userName");
        })
        .catch((error) => {

        })
        .finally(() => {
            setIsLoading(false);
            history.replace('/');
        });
    }

    const saveUser = (email, displayName) => {
        const user = {email: email, displayName: displayName, role: 'normal'};
        fetch('http://localhost:5000/postusers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
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