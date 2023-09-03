"use strict";

/**
 * Throw an error to the console.
 * @syntax
 * The throw expression is used to throw an error to the console.
 */

// Definition
function readFile(filepath) {
    if(!fs.existsSync(filepath))
    {
        throw new Error('File not found');
    }
    let data = fs.readFileSync(filepath, 'utf8');
return data;
};

// Calling the function
// let filepath = `${process.cwd()}/data/sampleData.json`;
// let data = readFile(filepath);
// console.log(data);

module.exports = {
    readFile
};