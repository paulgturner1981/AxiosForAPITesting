"use strict";

/**
 * Create a page class with reusable methods.
 */

class Page {

    runDate

  Constructor() {
    console.log(`This should get printed first`);
    this.runDate = null;
  }
  // reusable methods
  navigateTo(url) {
    console.log(`>>> Navigating to url: ${url}`);
    //TODO: add code to navigate to url
  }
  // Adding click handler method
  click(Element) {
    console.log(`>>> Click the element: ${Element}`);
    //TODO: add code to click the element
  }
}

module.exports = Page;