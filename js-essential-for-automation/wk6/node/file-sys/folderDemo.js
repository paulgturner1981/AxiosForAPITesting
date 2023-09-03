"use strict";

/**
 * Folder operations
 * @rule fs modules expect the full path, not relative
 * @methods
 * 1. existsSync
 * 2. mkdirSync
 * 3. rmdirSync
 * 4. readdirSync
 * 
 * @scenario
 * 1. Check if directory exists
 * 2. If directory exists delete. If not delete.
 */

const fs = require("fs");

fs.existsSync = (`${process.cwd()}/`)

const path = require("path");