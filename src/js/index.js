
/// JS CODE METHODS FOR INDEX.HTM file

// let JSON_DATA_SCHEMA = [
//   {
//     "actual_url": "",
//     "short_url": "",
//     "date": "",
//     "time": "",
//     "status": false
//   }
// ];

function generateShortURL(_url) {
  console.log(_url);
}

// function checkURLValidity()

// function checkURLStatus();

// function redirectToURL();

function fetchLinkData(url) {
  let new_url = url;
  let short_url = generateShortURL(new_url);
  let new_date = new Date();
  // console.log(new_date);

  // var file = JSON.parse('data.json');
  // var new_entry = JSON.stringify(file.push({
  //   "url-to-redirect": new_url,
  //   "short-url": short_url,
  //   "date-time": new_date
  // }));

  var fs = require('fs');

  var json_data = [];
  json_data.table = {};

  var new_data_object = {
    "url-to-redirect": new_url,
    "short-url": short_url,
    "date-time": new_date
  };
  json_data.table.push(new_data_object);

  fs.writeFile("data.json", JSON.stringify(json_data), function(err) {
    if (err) throw err;
    console.log("new data saved!");
  });
}



/// PAGE CONTENT CODE
document.body.style.margin = "auto";
document.body.style.maxWidth = "1450px";

let homepage = document.createElement("div");
homepage.className = "page homepage";
homepage.id = "homepage";

let URL_EVENT_SECTION = document.createElement("div");
URL_EVENT_SECTION.className = "section url_event_section";
URL_EVENT_SECTION.id = "url_event_section";

let page_title = document.createElement("h2");
page_title.className = "headline";
page_title.id = "page-title";
page_title.innerHTML = "URL.SHRT";
page_title.style.color = "black";
page_title.style.fontFamily = "Poppins";

let INPUT_URL = document.createElement("input");
INPUT_URL.type = "text";
INPUT_URL.className = "url_input input";
INPUT_URL.id = "input-url";
INPUT_URL.name = "url";
INPUT_URL.placeholder = "Enter URL";

let INPUT_BUTTON = document.createElement("a");
INPUT_BUTTON.className = "button input_button";
INPUT_BUTTON.id = "input-button";
INPUT_BUTTON.innerHTML = "Short URL";

INPUT_BUTTON.addEventListener("click", function fetch() {
  let fetch_link = document.getElementById("input-url").value;
  fetchLinkData(fetch_link);
});

URL_EVENT_SECTION.append(page_title);
URL_EVENT_SECTION.append(INPUT_URL);
URL_EVENT_SECTION.append(INPUT_BUTTON);

homepage.append(URL_EVENT_SECTION);
document.getElementById("root").appendChild(homepage);