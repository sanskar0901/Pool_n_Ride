const email = document.getElementById('s-email');
const namee = document.getElementById('s-username');
const pasword = document.getElementById('s-password');
const mobile = document.getElementById('s-mobile');


const database = firebase.database();
console.log('working?')
firebase.auth().onAuthStateChanged(function (user) {
  console.log(user.uid)
  if (user.uid) {
    document.getElementById("login-a").style.display = "none";
    document.getElementById("signup-a").style.display = "none";
  } else {
    document.getElementById("login-a").style.display = "block";
    document.getElementById("signup-a").style.display = "block";
    console.log('hi')
  }
  
});
signup.addEventListener('click', (e) => {
  e.preventDefault();
  database.ref('/user/' + namee.value).set({
    user_email: email.value,
    user_pass: pasword.value,
    user_mob: mobile.value,
    user_name: namee.value

  });

  firebase.auth().createUserWithEmailAndPassword(email.value, pasword.value)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
  alert('signed up')
});

login.addEventListener('click', (e) => {
  const email = document.getElementById('l-email');
  const pasword = document.getElementById('l-password');
  e.preventDefault();
  console.log("hi")
  firebase.auth().signInWithEmailAndPassword(email.value, pasword.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;;
      // ...

      document.getElementById("login-a").style.display() = "none";
      document.getElementById("loginModal").setAttribute("aria-hidden", "false")
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(email.value)
      console.log(errorCode);
      console.log(errorMessage);
    });


});