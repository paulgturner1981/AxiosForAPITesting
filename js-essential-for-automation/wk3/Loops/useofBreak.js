"use strict";

/**
 * How to use break statements in loops
 * e.g when switching to a specific tab in a browser. (once you have switched you would need to break the loop.)
 */

let tabs = ["Google", "Amazon", "YouTube"]

for (let i = 0; i < tabs.length; i++){
    let tab = tabs[i]
    if (tab === "YouTube"){
        // Here you would add the code to actually switch the window
        break
    }
    console.log(tab); 
    }