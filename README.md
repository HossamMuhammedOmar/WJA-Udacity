# WJA-Udacity
Weather Journal App - <b>JavaScript</b> 

### Walkthrow 
* Step one
![WJA-Walkthrow 1](https://user-images.githubusercontent.com/49618856/151500566-f86622a6-9879-4863-8f31-a3510286cc6c.jpg)

* Step Two
    <ol>
      <li>Create GET Route in the server-side that returns the <b>'projectData'</b> Object</li>
      <li>
         Create POST Route in the server-side that receive three pieces of data from the request body 
          <p> 
            <ul>
               <li>temperature</li>
               <li>date</li>
               <li>user response</li> 
            </ul>
          </p>
      </li>
      <li>
        add each of these three values with a key to the <b>projectData</b> object.
      </li>
    </ol>

* Step Three 
    <ol>
        <li>Create credentials from <b>OpenWeatherMap</b> website, and store the base url to the global variable</li>
        <li>
            Create async function to GET data request from the <b>OpenWeatherMap</b> API usnig `fetch` method.<br/> Add to three parameters th this function : 
            <ul>
               <li>base url</li>
               <li>zip code</li>
               <li>API key</li> 
            </ul>
        </li>
        <li>
            Add event listener to the Generate button and get the ZIP code from the user, Then execute the function that return the weather data from API dependent on             the input value
        </li>
        <li>Create POST request to add the API data inside async function which receive a path (baseurl+zipcode+apikey) and a data object</li>
    </ol>
    
* Step Four
   <ol>
        <li> Chain all promises together, and test it in the console to ensure that the data is passed between server-side and client-side correctly!</li>
   </ol>
