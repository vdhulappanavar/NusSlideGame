// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANiX6iuDAwFqs1MIrHVYYkdNEnLGvnGKc",
  authDomain: "nusgame-962ce.firebaseapp.com",
  projectId: "nusgame-962ce",
  storageBucket: "nusgame-962ce.appspot.com",
  messagingSenderId: "358713763144",
  appId: "1:358713763144:web:fa40e5d941f5ae5381bf7d",
  measurementId: "G-Q5V45X9SP5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Create a Firestore reference
const db = getFirestore(app);

// function startGame() {
//     console.log('in start Game')
//   const playerName = document.getElementById('nameInput').value;
//   if (playerName.trim() !== '') {
//     // Store the name and start time in Firebase
//     const startTime = new Date().toISOString();
//     db.collection('gameSessions').add({
//       playerName: playerName,
//       startTime: startTime
//     })
//     .then((docRef) => {
//       console.log('Document written with ID: ', docRef.id);
//       // Redirect to the game page with the player name as a query parameter
//       window.location.href = 'game.html?name=' + encodeURIComponent(playerName);
//     })
//     .catch((error) => {
//       console.error('Error adding document: ', error);
//     });
//   } else {
//     alert('Please enter your name.');
//   }
// }
// startGame()