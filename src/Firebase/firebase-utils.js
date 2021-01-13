import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
 

const config = 
{
    apiKey: "AIzaSyAAChx4h6GylBhoTRiu4b8mwc_6CjJl0D0",
    authDomain: "crown-db-a8727.firebaseapp.com",
    projectId: "crown-db-a8727",
    storageBucket: "crown-db-a8727.appspot.com",
    messagingSenderId: "960465538295",
    appId: "1:960465538295:web:f3f28c10de9105ae74d7f2",
    measurementId: "G-R1HMPV18PV"
};

export const createUserProfileDocument = async ( userAuth, additionalData ) =>
{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`); //userAuth.uid gives access to unique id firebase authenticates a certain sign-in account with.
    const snapShot = await userRef.get();
    
    if(!snapShot.exists)
    {
        const { displayName, email } = userAuth; //from userAuth we are destructuring name and email , userAuth is authstate object from componentDidMount().
        const createdAt = new Date();


        try
        {
            await userRef.set({
                displayName,email,createdAt,...additionalData        // .set() method creates data using the document reference
            })
        }
        
        catch(err)
        
        {
            console.log('Error creating user', err.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth(); //we got access to .auth() method from 3rd import 
export const firestore = firebase.firestore(); // 2nd import 

// we need to export these to use them anywhere outisde.

const provider = new firebase.auth.GoogleAuthProvider();

// the above method is what we use .auth() method for, using auth we can have any type of authentication eg: google, github, apple etc.
// we then pass this provider variable to another method 'pop' which then functions according to the provider passed.

provider.setCustomParameters({ prompt: 'select_account' });
// above method makes sure that google pop is only accessed whenever GoogleAuthProvider() is triggered.

export const LoginWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
