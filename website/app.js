/* Global Variables */
let zip;
let feelings;
let url;
let temp;
// const https = require("https");
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

// Personal API Key for OpenWeatherMap API
let baseURL = "https:api.openweathermap.org/data/2.5/weather?zip=";
let apiKey = "&appid=1fcd1f7667fd34bb1090a17a561b6eca";
// Event listener to add function to existing HTML DOM element
const generate = document.getElementById("generate");
generate.addEventListener("click", handleClick);
/* Function called by event listener */
function handleClick() {
  console.log("clicked");
  zip = document.getElementById("zip").value;
  feelings = document.getElementById("feelings").value;
  url = baseURL + zip + apiKey;
  getApiData(url)
   .then((data) => {
  getPost('https://localhost:3000', {
    temp: temp,
    date: newDate,
    response: feelings
  });
})
};
/* Function to GET Web API Data*/
const getApiData = async (url)=>{

  const res = await fetch(url)
  try {
    const data = await res.json();
    return data;
  }  catch(error) {
    console.log("error", error);
  }
}
// function getApiData(url) {
//   https.get(url, function(response) {
//     response.on("data", function(data) {
//       const weather = JSON.parse(data);
//       temp = weather.main.temp;
//     });
//   });
// }
// /* Function to POST data */
const getPost = async (url = '', data = {}) => {
  let response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'aplication/json'
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await response.json();
    return newData
  } catch (error) {
    console.log('error'.error)
  }
}


// © 2020 GitHub, Inc.
