// My Credentials
const apiKey = "33e0624bc3d5537a86a8535042de95c5";
// Base Url
const baseUrl = "http://api.openweathermap.org/data/2.5/weather?zip=";
// ZIP CODE
let zipCode = "";
// before get the data from api we need to check if the zipCode is valid or not, by default is not valid because it is empty!
let isZipCodeValid = false;

/* Select ui elements to show the result on it, and select the container to make it appear when we get a result */
const dateUi = document.querySelector(".date-result");
const tempUi = document.querySelector(".temp-result");
const feelUi = document.querySelector(".feel-result");
const resultContainer = document.querySelector(".result-container");
// By default the resultContainer is nonvisible
resultContainer.style.display = "none";

// Select the input and the textarea
const input = document.getElementsByTagName("input")[0];
const textArea = document.getElementsByTagName("textarea")[0];

// Select the form container to hide it when we get a result
const formContainer = document.getElementsByTagName("form")[0];

// Select back button to return to the home page agin, and apply the eventListener directly
document.querySelector(".back").addEventListener("click", () => {
  resultContainer.style.display = "none";
  formContainer.style.display = "flex";
  // remove previous text content
  input.value = "";
  textArea.value = "";
});

/* Select theme color buttons and add event listener directly to them, because we do not need to use them anymore.
/* and also select the main section to accept these themes to it.
*/
document.querySelector(".color-1").addEventListener("click", activeTheme1);
document.querySelector(".color-2").addEventListener("click", activeTheme2);
document.querySelector(".color-3").addEventListener("click", activeTheme3);
document.querySelector(".color-4").addEventListener("click", activeTheme4);
document.querySelector(".color-5").addEventListener("click", activeTheme5);
const main = document.getElementsByTagName("main")[0];
// SET THE FIRST THEME BY DEFAULT
main.classList.add("active-color-1");

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
  const zipCodeValue = document.querySelector("#zip").value.trim();
  // set the ZIP code value to the global variable (zipCode) to use it when create a path

  // ZIP code validation
  // USE trim() function to remove all the white space before validate it.

  // CHECK if the zip code is number
  zipCodeValidation(zipCodeValue);

  // Select the user's feeling
  const feel = document.querySelector("#feel").value;

  if (isZipCodeValid)
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
    // hide the form container and show the result container
    formContainer.style.display = "none";
    resultContainer.style.display = "flex";
    const data = await response.json();
    dateUi.innerHTML = "DATE: " + data.date;
    tempUi.innerHTML = "TEMP: " + data.temperature + " °C";
    // CHECK IF THE USER FEEL IS EMPTY
    if (data.userResponse !== "") feelUi.innerHTML = data.userResponse;
    else feelUi.innerHTML = `Cool!`;
    resultContainer.style.display = "flex";
  } catch (error) {
    console.log("Error ", error);
  }
};

// ZIPCODE validation helper method
function zipCodeValidation(zipCodeValue) {
  const errorDisplay = document.querySelector(".input-error-message");
  let errorType = "";

  if (zipCodeValue.length === 0) {
    errorType = "emptyString";
  }

  if (zipCodeValue % 1 !== 0) {
    errorType = "NAN";
  }

  if (errorType === "") {
    zipCode = zipCodeValue;
    isZipCodeValid = true;
  } else {
    isZipCodeValid = false;
    errorDisplay.classList.add("error");
    errorType === "emptyString"
      ? (errorDisplay.innerHTML = "This field is require")
      : (errorDisplay.innerHTML = "Please enter a valid ZIP code");
  }
}

// THEMES HELPER METHODS
function activeTheme1() {
  main.classList.add("active-color-1");
  main.classList.remove("active-color-2");
  main.classList.remove("active-color-3");
  main.classList.remove("active-color-4");
  main.classList.remove("active-color-5");
}
function activeTheme2() {
  main.classList.add("active-color-2");
  main.classList.remove("active-color-1");
  main.classList.remove("active-color-3");
  main.classList.remove("active-color-4");
  main.classList.remove("active-color-5");
}
function activeTheme3() {
  main.classList.add("active-color-3");
  main.classList.remove("active-color-1");
  main.classList.remove("active-color-2");
  main.classList.remove("active-color-4");
  main.classList.remove("active-color-5");
}
function activeTheme4() {
  main.classList.add("active-color-4");
  main.classList.remove("active-color-1");
  main.classList.remove("active-color-2");
  main.classList.remove("active-color-3");
  main.classList.remove("active-color-5");
}
function activeTheme5() {
  main.classList.add("active-color-5");
  main.classList.remove("active-color-1");
  main.classList.remove("active-color-2");
  main.classList.remove("active-color-3");
  main.classList.remove("active-color-4");
}
