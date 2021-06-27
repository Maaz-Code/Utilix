const auth = firebase.auth();

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');

const signInbtn = document.getElementById('signInbtn');
const signOutbtn = document.getElementById('signOutbtn');


const provider = new firebase.auth.GoogleAuthProvider();
signInbtn.onclick = () => auth.signInWithPopup(provider);
signOutbtn.onclick = () => auth.signOut();

auth.onAuthStateChanged (user => {
    if (user) {
        whenSignedIn.hidden = false;
        whenSignedOut.hidden = true;
        alert('Signed in!');
    } 
    else {
        whenSignedIn.hidden = true;
        whenSignedOut.hidden = false;
    }
});