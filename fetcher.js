const fs = require('fs');
const request = require('request');

const path = process.argv[3];
const url = process.argv[2];


request(url, (error, response, body) => {
  if (error) {
    console.log("Error", error); // Print the error if one occurred
  }
  fs.writeFile(path, body, err => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
    }
  });

});






