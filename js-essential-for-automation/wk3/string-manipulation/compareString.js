"use strict";

/**
 * Compare a string:
 * 1. Full match
 * 2. Partial match
 * - includes()
 * - startsWith()
 * - endsWith()
 * NOTE: The methods will return a boolean type
 *  */

let fileName = "Invoice_123.pdf"

// Full match example
if(fileName.toUpperCase().trim() === "INVOICE_123.PDF"){
    console.log(`>>> The file name matches`);
}
// .toUpperCase is used to compare in caps
// .trim is used to remove empty spaces etc.

// Partial match example
if(fileName.startsWith("Invoice"));{
    console.log(`This is a match`);
}
// .startsWith checks for a match at the start of the string
if(fileName.endsWith(".pdf"));{
  console.log(`This is also a match`);
}
// .endsWith checks for a match at the end of the string
