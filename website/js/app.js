// My Credentials
const apiKey = "33e0624bc3d5537a86a8535042de95c5";
// Base Url
const baseUrl = "http://api.openweathermap.org/data/2.5/weather?zip=";
// ZIP CODE
let zipCode = "";

/*
  Get ZIP code from the user input after click to the search button
  1- Get the submit button
  2- Add an event listener to the submit button
  3- OnClick get the user value 
  4- save it to the global variable 
  5- pass it to the url to fetch the weather information 
*/
const submitButton = document.querySelector("#generate");
submitButton.addEventListener("click", submitHandler);

// Helper Method for the submit Button
function submitHandler(e) {
  e.preventDefault();
  const zipCodeValue = document.querySelector("#zip");
  console.log(zipCodeValue.value);
  zipCode = zipCodeValue.value;
  getWeatherData();
}

// make a GET request from the OpenWeatherMap API
const getWeatherData = async () => {
  const res = await fetch(`${baseUrl + zipCode}&appid=${apiKey}`);
  try {
    const data = await res.json();
    return data;
    // console.log(data);
  } catch (error) {
    console.log("Error", error);
  }
};

// make a POST request to add the API data
const addData = async (url = "", data = {}) => {
  const response = fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "same-origin",
    body: JSON.stringify(data),
  });

  try {
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.log("Error ", error);
  }
};
