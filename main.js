let url = "DATAREPLACE"

let parsedUrl = encodeURIComponent(baseurl(url))

console.log(parsedUrl)

fetch(`https://content-developerprofiles-pa.googleapis.com/v1/profiles/112442519837325880152/paths/${parsedUrl}?locale&updateMask=path.state&key=DATAREPLACE&alt=json&%24unique=DATAREPLACE`, {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "authorization": "Bearer DATAREPLACE",
    "content-type": "application/json",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Chrome OS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "x-client-data": "DATAREPLACE",
    "x-clientdetails": "DATAREPLACE",
    "x-goog-encode-response-if-executable": "base64",
    "x-javascript-user-agent": "google-api-javascript-client/1.1.0",
    "x-requested-with": "XMLHttpRequest"
  },
  "referrer": "https://developer.android.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"state\":\"COMPLETED\"}",
  "method": "PATCH",
  "mode": "cors",
  "credentials": "include"
});

function baseurl(url) {
  const urlObj = new URL(url);
  // Construct the full path including the domain name
  return `${urlObj.host}${urlObj.pathname}`;
}
