import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Login/Firebase/firebase.init";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, location, history) => {
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
                
            });
            localStorage.setItem("userName", name);
            localStorage.setItem("userEmail", email);
            const destination = location?.state?.from || '/';
            history.replace(destination);
        })
        .catch((error) => {
            setAuthError(error.message);
            // ..
        })
        .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCreddential) => {
            const user = userCreddential.user;
            localStorage.setItem("userName", user.displayName);
            localStorage.setItem("userEmail", user.email);
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
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
            saveGoogleUser(user.email, user.displayName);
            localStorage.setItem("userName", user.displayName);
            localStorage.setItem("userEmail", user.email);
            const destination = location?.state?.from || '/';
            history.replace(destination);
        }).catch((error) => {
            setAuthError(error.message);
            // ...
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
            localStorage.removeItem("userEmail");
            localStorage.removeItem("userAdmin");
        })
        .catch((error) => {

        })
        .finally(() => {
            setIsLoading(false);
            history.replace('/');
        });
    }

    // check if current user is an admin or normal user
    useEffect(() => {
        fetch(`https://powerful-dawn-56436.herokuapp.com/checkAdmin/${user.email}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data.admin);
            if (data.admin) {
                localStorage.setItem("userAdmin", true);
            }
        })
    }, [user.email]);

    const saveUser = (email, displayName) => {
        const user = {email: email, displayName: displayName, role: 'normal'};
        fetch('https://powerful-dawn-56436.herokuapp.com/postusers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }

    const saveGoogleUser = (email, displayName) => {
        const user = {email: email, displayName: displayName};
        fetch('https://powerful-dawn-56436.herokuapp.com/putGoogleUser', {
            method: 'PUT',
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
        signInWithGoogle,
        logout
    }
}

export default useFirebase;