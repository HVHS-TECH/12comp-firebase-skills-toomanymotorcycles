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
    const reference = ref(FB_DATABASE, pOoae48Ua6M9TFOybmZAHx4Zydl1.displayName);
    get(reference).then((snapshot) => {
        var fb_data = snapshot.val();
        if (fb_data != null) {
            console.log(fb_data);
        } else {
            console.warn("The data at \'" + ref + "\' was not found.");
        }

    }).catch((error) => {
        console.warn(error.code + " - " + error.message);
    });
};

function fb_write() {
    console.log('%c fb_write(): ',
        'color: ' + COL_C + '; background-color: ' + COL_B + ';');

};

/**************************************************************/
// END OF CODE
/**************************************************************/