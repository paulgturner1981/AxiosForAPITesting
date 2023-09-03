"use strict";

/**
 * How to "replace all"
 * Rules:
 * 1. Replace is a method, which can accept a strong/regexp as it's first arg
 * 2. It will return the modified string value
 */

/**
 * Scenario:
 * 1. Get only the filename
 * 2. Rename the file extension from .pdf to .txt
 * 3. Replace the table_name with Accounts
 * 4. Convert the given date format to YYYYMMDD format
 */

let fileName = "invoice_123.pdf";
let query_template = `SELECT * FROM {{table_name}}`
let date = `2023-03-25`

// 1. Get only the filename
let onlyfileName = fileName.replace(`.pdf`, ``)
console.log(onlyfileName);

// 2. Rename the file extension from .pdf to .txt
let changeToTxt = fileName.replace(`pdf`, `txt`)
console.log(changeToTxt);

// 3. Replace the table_name with Accounts
let replaceTableName = query_template.replace(`table_name`, `Accounts`)
console.log(replaceTableName);

// 4. Convert the given date format to YYYYMMDD format
let ConvertDateFormat = date.replace(/-/g, ``)  // Regex /-/g used here to replace all -'s. 
console.log(ConvertDateFormat);