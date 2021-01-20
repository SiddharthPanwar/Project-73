import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDXVajhDozdSDKy9YPbXBcXXVOo01Iw1Hs",
    authDomain: "story-hub-e70a7.firebaseapp.com",
    projectId: "story-hub-e70a7",
    storageBucket: "story-hub-e70a7.appspot.com",
    messagingSenderId: "726961093191",
    appId: "1:726961093191:web:1ba321a6d2330880610f62"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()