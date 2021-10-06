const firebaseConfig = {
    apiKey: "AIzaSyBQoY-moAl3mgUNGo7Hazmb-mULSUgbOs8",
    authDomain: "kwitter-fb2e8.firebaseapp.com",
    databaseURL: "https://kwitter-fb2e8-default-rtdb.firebaseio.com",
    projectId: "kwitter-fb2e8",
    storageBucket: "kwitter-fb2e8.appspot.com",
    messagingSenderId: "574946721262",
    appId: "1:574946721262:web:b7aecc8598e446616fa2ff"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();