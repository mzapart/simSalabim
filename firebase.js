import * as firebase from "firebase";

let config = {
  apiKey: "AIzaSyCwg8TalbXQU9EX5aQNBcjrt4g8GXcjJ_U",
  authDomain: "halflajf-9d586.firebaseapp.com",
  databaseURL: "https://halflajf-9d586.firebaseio.com",
  projectId: "halflajf-9d586",
  storageBucket: "halflajf-9d586.appspot.com",
  messagingSenderId: "623585970782",
  appId: "1:623585970782:web:d508ecab53c829d8"
};

export default (!firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app());
