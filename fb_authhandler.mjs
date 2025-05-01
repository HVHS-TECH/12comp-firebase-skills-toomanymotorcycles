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
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
/**************************************************************/
// Import all the methods you want to call from the firebase modules


/**************************************************************/
// EXPORT FUNCTIONS
// List all the functions called by code or html outside of this module
/**************************************************************/
export {fb_login};

function fb_login() {
  const AUTH = getAuth();
  const PROVIDER = new GoogleAuthProvider();
  // The following makes Google ask the user to select the account
PROVIDER.setCustomParameters({
      prompt: 'select_account'
  });

  signInWithPopup(AUTH, PROVIDER).then((result) => {
      return result.user;
  })
  .catch((error) => {
      console.warn("AUTHENTICATION ERROR " + error.code + " - " + error.message)
  });
};

/**************************************************************/
// END OF CODE
/**************************************************************/