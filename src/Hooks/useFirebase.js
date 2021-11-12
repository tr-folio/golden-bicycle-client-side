import initializeFirebase from "../Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, updateProfile, getIdToken, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // const newUser = userCredential.user;
            // setUser(newUser);
            setAuthError('');
            const newUser = {email, displayName: name};
            setUser(newUser);
            // save user to database
            // saveUser(email, name);
            // send name to firebase
            updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: ""
            })
            .then(() => {

            })
            .catch((error) => {

            })
            history.replace('/');
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // const user = userCredential.user;
            // setUser(newUser);
            setAuthError('');
            const destination = location?.state?.from || '/';
            history.replace(destination);
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
    }

    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            setAuthError('');
            // save google user to database
            // saveGoogleUser(user.email, user.displayName);
            const destination = location?.state?.from || '/';
            history.replace(destination);
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
    }

    // set observer to allow allow login/logout from all tabs at a time
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                // getIdToken(user)
                // .then(idToken => {
                //     setToken(idToken);
                // })
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        })
        return () => unsubscribed;
    }, [auth]);

    // check if current user admin or not
    // useEffect(() => {
    //     fetch(`http://localhost:5000/adminusers/${user.email}`)
    //     .then(res => res.json())
    //     .then(data => setAdmin(data.admin))
    // },[user.email]);

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {

        })
        .catch((error) => {

        })
        .finally(() => setIsLoading(false));
    }

    // const saveUser = (email, displayName) => {
    //     const user = {email: email, displayName: displayName};
    //     fetch('http://localhost:5000/postusers', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    // }

    // const saveGoogleUser = (email, displayName) => {
    //     const user = {email: email, displayName: displayName};
    //     fetch('http://localhost:5000/putusers', {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    // }

    return {
        user,
        admin,
        token,
        isLoading,
        authError,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout
    }
}

export default useFirebase;
