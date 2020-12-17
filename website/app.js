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
let baseURL = "https:api.openweathermap.org/data/2.5/weather?units=metric&zip=";
let apiKey = "&appid=1fcd1f7667fd34bb1090a17a561b6eca";
// Event listener to add function to existing HTML DOM element
const generate = document.getElementById("generate");
generate.addEventListener("click", handleClick);
/* Function called by event listener */
function handleClick() {
  zip = document.getElementById("zip").value;
  feelings = document.getElementById("feelings").value;
  url = baseURL + zip + apiKey;
  getApiData(url)
    .then(data => {
      getPost("http://localhost:3000", {
        temp: data.main.temp,
        date: newDate,
        userResponse: feelings
      })
    })
    .then(() => {
      updateUI();
    })

};
/* Function to GET Web API Data*/
const getApiData = async (url) => {

  const res = await fetch(url)
  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
}

/* Function to POST data */
const getPost = async (url = '', data = {}) => {
  console.log(data);

  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response.json();
}
// http://localhost:3000
// updateUI
const updateUI = async () => {
  const request = await fetch('http://localhost:3000/get');
  try {
    const allData = await request.json();
    document.getElementById('date').innerHTML = "Date: " + allData.date;
    document.getElementById('temp').innerHTML = "Temperature: " + allData.temp;
    document.getElementById('content').innerHTML = "On Your mind: " + allData.userResponse;

  } catch (error) {
    console.log("error", error);
  }
}
