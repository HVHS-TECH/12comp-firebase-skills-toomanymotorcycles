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
import { ref, query, orderByChild, limitToFirst, get, set, update, onValue } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-database.js";
/**************************************************************/
// Import all the methods you want to call from the firebase modules


/**************************************************************/
// EXPORT FUNCTIONS
// List all the functions called by code or html outside of this module
/**************************************************************/
export { fb_read, fb_readpath, fb_write, fb_update, fb_sortedread, fb_getadmin, fb_listen};

function fb_read(path) {
    console.log('%c fb_read(): ',
        'color: ' + COL_C + '; background-color: ' + COL_B + ';'
    );
    if (window.user != null) {
        console.log("Attempting to read value as user \"" + user.displayName +"\"") ;   
    } else {
        console.log("Attempting to read value as anonymous user");
    }
    const reference = ref(FB_DATABASE, path);
    get(reference).then((snapshot) => {
        var fb_data = snapshot.val();
        if (fb_data != null) {
            console.log(fb_data);
            return fb_data;
        } else {
            console.warn("The data at \'" + ref + "\' was not found.");
        }

    }).catch((error) => {
        console.warn(error.code + " - " + error.message);
        if (error.message = "Permission denied.") {
            console.warn("PERMISSION DENIED - you do not have permission to read the database at the queried location.")
        } else {
            console.warn(error.code + " - " + error.message);
        }
    });
};

function fb_getadmin() {
    console.log('%c fb_getadmin(): ',
        'color: ' + COL_C + '; background-color: ' + COL_B + ';'
    );
    console.log("Getting admin status of user...");
    const reference = ref(FB_DATABASE, "/admin/" + user.uid + "/role");
    get(reference).then((snapshot) => {
        var fb_data = snapshot.val();
        if (fb_data != null) {
            if (fb_data == "admin") {
                console.log("ADMIN");
                document.getElementById("h2_fbAdmin").innerHTML = "YOU ARE CURRENTLY LOGGED IN WITH AN ADMIN ACCOUNT";
            } else {
                console.log("NOT ADMIN");
                document.getElementById("h2_fbAdmin").innerHTML = "";
            }
        } else {
            console.warn("The data at \'" + ref + "\' was not found.");
        }

    }).catch((error) => {
        console.warn(error.code + " - " + error.message);
        if (error.message = "Permission denied.") {
            console.warn("PERMISSION DENIED - you do not have permission to read the database at the queried location.")
        } else {
            console.warn(error.code + " - " + error.message);
        }
    });
};

function fb_readpath() {
    console.log('%c fb_readpath(): ',
        'color: ' + COL_C + '; background-color: ' + COL_B + ';'
    );
    if (window.user != null) {
        console.log("Attempting to read path as user \"" + user.displayName +"\"") ;   
    } else {
        console.log("Attempting to read path as anonymous user");
    }
    const reference = ref(FB_DATABASE, "/userData/xP8RZ3QKIxamS5hIiVJ2WEdUovb2");
    get(reference).then((snapshot) => {
        var fb_data = snapshot.val();
        if (fb_data != null) {
            console.log(fb_data);
        } else {
            console.warn("The data at \'" + ref + "\' was not found.");
        }

    }).catch((error) => {
        if (error.message = "Permission denied.") {
            console.warn("PERMISSION DENIED - you do not have permission to read the database at the queried location.")
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
    const reference = ref(FB_DATABASE, "/userData/xP8RZ3QKIxamS5hIiVJ2WEdUovb2/thing2");
    set(reference, "stuff").then(() => {
        console.log("Write successful.")
    }).catch((error) => {
        if (error.message = "Permission denied.") {
            console.warn("PERMISSION DENIED - you do not have permission to write to the database at the queried location.")
        } else {
            console.warn(error.code + " - " + error.message);
        }
    });
};

function fb_update() {
    console.log('%c fb_update(): ',
        'color: ' + COL_C + '; background-color: ' + COL_B + ';'
    );
    if (window.user != null) {
        console.log("Attempting to update value as user \"" + user.displayName +"\"")  ;
    } else {
        console.log("Attempting to update value as anonymous user");
    }
    const reference = ref(FB_DATABASE, "/userData/xP8RZ3QKIxamS5hIiVJ2WEdUovb2");
    update(reference, {thing2:"UPDATED STUFF"}).then(() => {
        console.log("Update successful.")
    }).catch((error) => {
        if (error.message = "Permission denied.") {
            console.warn("PERMISSION DENIED - you do not have permission to update the database at the queried location.")
        } else {
            console.warn(error.code + " - " + error.message);
        }
    });
}

function fb_sortedread() {
    console.log('%c fb_sortedread(): ',
        'color: ' + COL_C + '; background-color: ' + COL_B + ';'
    );
    if (window.user != null) {
        console.log("Attempting to read value as user \"" + user.displayName +"\"") ;   
    } else {
        console.log("Attempting to read value as anonymous user");
    }
    const reference = query(ref(FB_DATABASE, "/userData"), orderByChild("order"), limitToFirst(10));
    get(reference).then((snapshot) => {
        var fb_data = snapshot.val();
        if (fb_data != null) {
            console.log(fb_data);
        } else {
            console.warn("The data at \'" + ref + "\' was not found.");
        }

    }).catch((error) => {
        console.warn(error.code + " - " + error.message);
        if (error.message = "Permission denied.") {
            console.warn("PERMISSION DENIED - you do not have permission to read the database at the queried location.")
        } else {
            console.warn(error.code + " - " + error.message);
        }
    });
};

function fb_listen(path) {
    console.log('%c fb_listen(): ',
        'color: ' + COL_C + '; background-color: ' + COL_B + ';'
    );
    if (window.user != null) {
        console.log("Attempting to set up listener on value as user \"" + user.displayName +"\"") ;   
    } else {
        console.log("Attempting to set up listener on value as anonymous user");
    }
    const reference = ref(FB_DATABASE, path);
    onValue(reference).then((snapshot) => {
        console.log("LISTENER ACTIVATED")
        var fb_data = snapshot.val();
        if (fb_data != null) {
            console.log(fb_data);
            return fb_data;
        } else {
            console.warn("The data at \'" + ref + "\' was not found.");
        }

    }).catch((error) => {
        console.warn(error.code + " - " + error.message);
        if (error.message = "Permission denied.") {
            console.warn("PERMISSION DENIED - you do not have permission to set up a listener at the queried location.")
        } else {
            console.warn(error.code + " - " + error.message);
        }
    });
};



/**************************************************************/
// END OF CODE
/**************************************************************/