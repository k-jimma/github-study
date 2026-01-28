const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {
  let content = '';

  // push data character by character to "content" variable
  resp.on('data', (c) => (content += c));

  // when finished reading all data, parse it for what we need now
  resp.on('end', () => {
    let jsonContent = JSON.parse(content);
    let jsonContentArray = jsonContent.data.split(',');
    let keyArray = [];

    for (let i = 0; i < jsonContentArray.length; i++) {
      let keySplit = jsonContentArray[i].trim().split('=');
      keyArray.push(keySplit[1]);
    }

    console.log(keyArray.toString());
    console.log("Length: " + keyArray.length);
  });
});
