import firebase from 'firebase'

export const appName = ''
export const firebaseConfig = {
    apiKey: "",
    authDomain: `${appName}.firebaseapp.com`,
    databaseURL: `https://${appName}.firebaseio.com`,
    projectId: appName,
    storageBucket: `${appName}.appspot.com`,
    messagingSenderId: ""
}
firebase.initializeApp(firebaseConfig)
