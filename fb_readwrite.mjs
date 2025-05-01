//**************************************************************/
// fb_readwrite.mjs
// Read/Write firebase routines
// Written by <Your Name Here>, Term 2 202?
//
// All variables & function begin with fb_  all const with FB_
// Diagnostic code lines have a comment appended to them //DIAG
/**************************************************************/
const COL_C = 'white';	    // These two const are part of the coloured 	
const COL_B = '#CD7F32';	//  console.log for functions scheme

console.log('%c fb_readwrite.mjs',
    'color: blue; background-color: white;');

/**************************************************************/
// Import all external constants & functions required
import { ref, get, set } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-database.js";
/**************************************************************/
// Import all the methods you want to call from the firebase modules


/**************************************************************/
// EXPORT FUNCTIONS
// List all the functions called by code or html outside of this module
/**************************************************************/
export { fb_read, fb_write };

function fb_read() {
    console.log('%c fb_read(): ',
        'color: ' + COL_C + '; background-color: ' + COL_B + ';'
    );
    if (window.user != null) {
        console.log("Attempting to write value as user \"" + user.displayName +"\"") ;   
    } else {
        console.log("Attempting to write value as anonymous user");
    }
    const reference = ref(FB_DATABASE, "/xP8RZ3QKIxamS5hIiVJ2WEdUovb2/thing");
    get(reference).then((snapshot) => {
        var fb_data = snapshot.val();
        if (fb_data != null) {
            console.log(fb_data);
        } else {
            console.warn("The data at \'" + ref + "\' was not found.");
        }

    }).catch((error) => {
        if (error.message = "Permission denied.") {
            console.warn("PERMISSION DENIED - you do not have permission to read from the database here.")
        } else {
            console.warn(error.code + " - " + error.message);
        }
    });
};

function fb_write() {
    console.log('%c fb_write(): ',
        'color: ' + COL_C + '; background-color: ' + COL_B + ';'
    );
    if (window.user != null) {
        console.log("Attempting to write value as user \"" + user.displayName +"\"")  ;
    } else {
        console.log("Attempting to write value as anonymous user");
    }
    const reference = ref(FB_DATABASE, "/xP8RZ3QKIxamS5hIiVJ2WEdUovb2/thing2");
    set(reference, "stuff").then(() => {
        console.log("Write successful.")
    }).catch((error) => {
        if (error.message = "Permission denied.") {
            console.warn("PERMISSION DENIED - you do not have permission to write to the database here.")
        } else {
            console.warn(error.code + " - " + error.message);
        }
    });
};

/**************************************************************/
// END OF CODE
/**************************************************************/