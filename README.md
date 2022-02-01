# WJA-Udacity

Weather Journal App - <b>JavaScript</b>

### walkthrough

- Step one
  ![WJA-walkthrough 1](https://user-images.githubusercontent.com/49618856/151500566-f86622a6-9879-4863-8f31-a3510286cc6c.jpg)

- Step Two
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

- Step Three
    <ol>
        <li>Create credentials from <b>OpenWeatherMap</b> website, and store the base url to the global variable</li>
        <li>
            Create async function to GET data request from the <b>OpenWeatherMap</b> API using `fetch` method.<br/> Add to three parameters th this function : 
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

- Step Four
  - Chain all promises together, and test it in the console to ensure that the data is passed between server-side and client-side correctly!</li>
- Step Five and the final step
  - Update the UI dependent on the API data

#### How To Install the project 
* First you need to install node.js on your local machine
* Then run the server
``` node server/server.js ```
  * install requirements dependencies ``` npm install ```
* Then open the browser on port 8080
  * http://localhost:8080/




#### The project was built from scratch using
- [x] HTML
- [x] CSS
- [x] JavaScript
- [x] Node.js
- [x] Figma for UI
  * URL: https://www.figma.com/file/05RU7ePbAMVqSMbmXBom6R/Untitled?node-id=0%3A1
  
  
#### Features
  * Change themes
  * Animation
  * Responsive Design


##### GIF PREVIEW 
![video-to-gif-converter](https://user-images.githubusercontent.com/49618856/151805104-ff1ac33c-f2e7-4dcd-aeeb-2fbf217025a7.gif)

*Thank you*
