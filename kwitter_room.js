
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyCN-A8rrNafDtbybmvZ46f-SrFlagHCg6s",
      authDomain: "emeralds-and-rubies-9dac6.firebaseapp.com",
      databaseURL: "https://emeralds-and-rubies-9dac6.firebaseio.com",
      projectId: "emeralds-and-rubies-9dac6",
      storageBucket: "emeralds-and-rubies-9dac6.appspot.com",
      messagingSenderId: "271675446754",
      appId: "1:271675446754:web:1e6951d9a55bde9014d5bb",
      measurementId: "G-901B2PW9MW"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("Username")
document.getElementById("user_name").innerHTML="welcome " + user_name

function addRoom(){
      room_name = document.getElementById("room_name").value

      firebase.database().ref("/").child("room_name").update({
            purpose : "adding room name"
      })

      localStorage.setItem("room_name",room_name)

      window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room name - " + Room_names  )
row = "<div class = 'room_name' id="+Room_names+"onclick=redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row; 
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name)
      localStorage.setItem("room_name",name)
      window.location = "kwitter_page.html";
}

function logout()
{
    localStorage.removeItem("Username")
    localStorage.removeItem("room_name")
    window.location = "index.html"
}