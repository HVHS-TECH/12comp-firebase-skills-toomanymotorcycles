//**************************************************************/
// fb_io.mjs
// Generalised firebase routines
// Written by <Your Name Here>, Term 2 202?
//
// All variables & function begin with fb_  all const with FB_
// Diagnostic code lines have a comment appended to them //DIAG
/**************************************************************/
const COL_C = 'white';	    // These two const are part of the coloured 	
const COL_B = '#CD7F32';	//  console.log for functions scheme
console.log('%c fb_authhandler.mjs',
            'color: blue; background-color: white;');

/**************************************************************/
// Import all external constants & functions required
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { fb_getadmin } from "./fb_readwrite.mjs";
/**************************************************************/
// Import all the methods you want to call from the firebase modules


/**************************************************************/
// EXPORT FUNCTIONS
// List all the functions called by code or html outside of this module
/**************************************************************/
export {fb_login,fb_logout,fb_authCheck};

function fb_authCheck(manualCall) {
  const AUTH = getAuth();
    onAuthStateChanged(AUTH, (user) => {
        if (user) {
          if (manualCall) {
            console.log ("Current logged-in user: " + user.displayName)
          }
          window.user = user
          document.getElementById("p_fbLogin").innerHTML= user.displayName;
          console.log(toString(fb_getadmin()))
          fb_getadmin()
        } else {
          if (manualCall) {
            console.log ("No current logged-in user.")
          }
          window.user = undefined
          document.getElementById("p_fbLogin").innerHTML = "None";
        }
    }, (error) => {
      console.warn("AUTHENTICATION CHECK ERROR: " + error.code + " - " + error.message)
    });
}

function fb_login() {
  const AUTH = getAuth();
  const PROVIDER = new GoogleAuthProvider();
  // The following makes Google ask the user to select the account
PROVIDER.setCustomParameters({
      prompt: 'select_account'
  });

  signInWithPopup(AUTH, PROVIDER).then((result) => {
    console.log("AUTHENTICATION SUCCESS - Logged in as user \"" + result.user.displayName + "\"")
    window.user = result.user;
    fb_authCheck(false);
  })
  .catch((error) => {
      console.warn("AUTHENTICATION ERROR: " + error.code + " - " + error.message)
      fb_authCheck(true);
  });
};

function fb_logout() {
  const AUTH = getAuth();
    signOut(AUTH).then(() => {
      window.user = undefined;
      console.log("Logout successful.");
      fb_authCheck(false);
    })
    .catch((error) => {
      console.warn("LOGOUT ERROR: " + error.message);
      fb_authCheck(true);
    });
}

/**************************************************************/
// END OF CODE
/**************************************************************/