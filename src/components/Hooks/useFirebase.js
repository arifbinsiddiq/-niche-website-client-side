import { useEffect, useState } from 'react';
import firebaseAuthentication from '../Firebase/Firebase.init';
import { getAuth, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";



// firebase call
firebaseAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);



    const auth = getAuth();
    


    const registerUser = (name, email, password, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = {email, displayName: name};
                setUser(newUser);

                // save user to database
                saveUser(email, name);

                updateProfile(auth.currentUser, {
                    displayName: name
                  }).then(() => {
                    
                  }).catch((error) => {
                    
                  });


                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(()=>setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // const loginUser = (email, password, location, history) => {
    //     setIsLoading(true);
    //     signInWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             const destination = location?.state?.from || '/';
    //             history.replace(destination);
    //             setAuthError('');
    //         })
    //         .catch((error) => {
    //             setAuthError(error.message);
    //         })
    //         .finally(()=>setIsLoading(false));
    // }

    useEffect(()=>{
        fetch(`https://thawing-atoll-32330.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    },[user.email])

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName) =>{
        const user = {email, displayName};
        fetch('https://thawing-atoll-32330.herokuapp.com/users',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }
    
    // const logOut = () => {
    //     setIsLoading(true);
    //     signOut(auth)
    //         .then(() => {
    //             setUser({})
    //         })
    //         .finally(() => {
    //             setIsLoading(false);
    //         })
    // }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    // useEffect(() => {
    //     const unsubscribed = onAuthStateChanged(auth, user => {
    //         if (user) {
    //             setUser(user)
    //         }
    //         else {
    //             setUser({});
    //         }
    //         setIsLoading(false)
    //     });
    //     return() => unsubscribed;
    // }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return {
        user,
        admin,
        isLoading,
        authError,
        loginUser,
        registerUser,
        logout
    }
};

export default useFirebase;