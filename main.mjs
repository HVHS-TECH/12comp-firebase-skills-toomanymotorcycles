/**************************************************************/
// main.mjs
// Main entry for index.html
// Written by <Your Name Here>, Term 2 202?
/**************************************************************/
const COL_C = 'white';	    // These two const are part of the coloured 	
const COL_B = '#CD7F32';	//  console.log for functions scheme
console.log('%c main.mjs', 
    'color: blue; background-color: white;');

/**************************************************************/
// Import all external constants & functions required

/**************************************************************/
// Import all the constants & functions required from fb modules
import {fb_initialise}
    from './fb_io.mjs';
    window.fb_initialise   = fb_initialise;
import {fb_login,fb_logout, fb_authCheck}
    from './fb_authhandler.mjs';
    window.fb_login   = fb_login;
    window.fb_logout   = fb_logout;
    window.fb_authCheck   = fb_authCheck;
import {fb_read, fb_readpath, fb_write, fb_update, fb_sortedread, fb_listen}
    from './fb_readwrite.mjs';
    window.fb_read   = fb_read;
    window.fb_readpath   = fb_readpath;
    window.fb_write   = fb_write;
    window.fb_update = fb_update;
    window.fb_sortedread = fb_sortedread;
    window.fb_listen = fb_listen;
/**************************************************************/
// index.html main code
/**************************************************************/


/**************************************************************/
//   END OF CODE
/**************************************************************/
