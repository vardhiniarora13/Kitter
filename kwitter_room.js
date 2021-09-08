
var firebaseConfig = {
      apiKey: "AIzaSyCW3Y7uk1KfmLD6aWCIdUFQ0LI9OEHwDlY",
      authDomain: "kwitter-1327d.firebaseapp.com",
      databaseURL: "https://kwitter-1327d-default-rtdb.firebaseio.com",
      projectId: "kwitter-1327d",
      storageBucket: "kwitter-1327d.appspot.com",
      messagingSenderId: "618476129049",
      appId: "1:618476129049:web:ad36633d11b21ad1761388",
      measurementId: "G-KP43J1DFE2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!"; 

    function addRoom(){
          room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
            purpose : "adding room"
          }
                
          ); 

          localStorage.setItem("room_name", room_name);
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       row = "<div class ='room_name' id ="+Room_names+" onclick ='redirect(this.id)'> #"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+= row;
      });});}
getData();
function redirect(name){
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
