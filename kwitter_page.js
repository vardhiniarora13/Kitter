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
    room_name = localStorage.getItem("room_name");

    function send(){
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                like:0,
                name: user_name,
                message: msg
          });
          document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name = message_data['name'];
message = message_data ['message'];
like = message_data['like'];

nt = "<h4>"+name+"<img class ='user_tick' src='tick.png'></h4>";
mt = "<h4 class ='message_h4'>"+message+"</h4>";
lb= "<button class = 'btn btn-warning' id="+firebase_message_id+"value="+like+"onclick ='updateLike(this.id)'>";
st = "<span class ='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";

row = nt + mt + lb + st;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id){
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      update_like = Number(likes) + 1;

      firebase.database().ref(room_name).child(message_id).update({
            like: update_like
      });
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}