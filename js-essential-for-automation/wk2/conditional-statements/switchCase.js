/**
 * Switch case
 *
 */

let browser = "Safari";

switch (browser) {
  case "Chrome":
    console.log(`>>> Running Chrome browser`);
    break;
  case "Firefox":
    console.log(`>>> Running Firefox browser`);
    break;
  case "Edge":
    console.log(`>>> Running Edge browser`);
    break;
  default:
    console.log(`No valid browser: ${browser} has been provided`);
}
