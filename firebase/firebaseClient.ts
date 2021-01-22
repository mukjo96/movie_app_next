import firebaseClient from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAndXl2AYEut9Po5TheZmzR8tpONwXUw7k",
    authDomain: "movieapp-737a9.firebaseapp.com",
    databaseURL: "https://movieapp-737a9.firebaseio.com",
    projectId: "movieapp-737a9",
    storageBucket: "movieapp-737a9.appspot.com",
    messagingSenderId: "111505252310",
    appId: "1:111505252310:web:6075437c445be5f88c4e77",
};

if (typeof window !== "undefined" && !firebaseClient.apps.length) {
    firebaseClient.initializeApp(firebaseConfig);
    firebaseClient
        .auth()
        .setPersistence(firebaseClient.auth.Auth.Persistence.SESSION);
    (window as any).firebase = firebaseClient;
}

export { firebaseClient };
