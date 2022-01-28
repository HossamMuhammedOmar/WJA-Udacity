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
  // Stop the default button behavior
  e.preventDefault();

  /**
    Create a new instance Date to get the current date.
    And then formatting the date to MM/DD/YYYY
  */
  let dateNow = new Date();
  let dateFormat =
    dateNow.getMonth() +
    1 +
    "/" +
    dateNow.getDate() +
    "/" +
    dateNow.getFullYear();

  // Select the ZIP code user input
  const zipCodeValue = document.querySelector("#zip");
  // set the ZIP code value to the global variable (zipCode) to use it when create a path
  zipCode = zipCodeValue.value;

  // Select the user's feeling
  const feel = document.querySelector("#feel").value;

  getWeatherData().then((data) => {
    // Check if the ZIP code is valid or not by using status code!
    if (data.cod != "404") {
      addData("/addData", {
        temperature: data.main.temp,
        date: dateFormat,
        userResponse: feel,
      });
      updateUI();
    } else {
      // alert the user if he entered an invalid ZIP code
      alert("Please Enter a valid ZIP code");
    }
  });
}

// make a GET request from the OpenWeatherMap API
const getWeatherData = async () => {
  // Dependent on the OpenWeatherMap documentation we need to specify the Units Parameter to get the temperature with the Celsius unit => "units=metric".
  const res = await fetch(`${baseUrl + zipCode}&appid=${apiKey}&units=metric`);
  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error", error);
  }
};

// make a POST request to add the API data
const addData = async (url, data) => {
  const response = await fetch(url, {
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

// Update the UI
const updateUI = async () => {
  const response = await fetch("/all");

  try {
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error ", error);
  }
};
