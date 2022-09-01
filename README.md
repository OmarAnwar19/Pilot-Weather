# Pilot-Weather

---

## Build Instructions

1. Clone the project to your local machine using the command
   `git clone https://github.com/OmarAnwar19/Pilot-Weather.git`
2. Navigate to the cloned folder either using the command line, or your os' file explorer.
3. Install node dependencies using the command `npm install` or `npm i`
4. At this point, the project is installed locally, and any of the following Available Scripts can be run. For testing the project on a local machine, it is sufficient to use `npm start`

## Available Scripts

This project follows general react app build steps, and as such all general React scripts are available, including the following.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

---

## Approach

For the approach I took to this assignment, I followed the same general proccess which I do whenever I am starting a new personal project. My first step, was to draw out an idea of how I wanted the app to look. For bigger projects, in the past I have used Photoshop, or briefly Figma; however, as this was not too large-scale of a project, I decided to draw it out physically on a piece of paper, and plan out how I wanted the finished product to look. Next, I planned out the different features and what I actually wanted to include in the project, such as hourly and future forecasts. After my planning stage was complete, I always like to start with the client-side of the project, and by laying down some foundations, such as the background, the main square where the project would be, and the search bar. Once these foundations were set, I started working on fetching the weather data from the api, and being able to search for a city from the seach bar, and have it retrieve the data for the appropriate city from the api. After this was sorted, aswell as error handling for invalid city entry, I started working on the current weather portion of the app, and figuring out what data I actually wanted to display from the json that was recieved from the api. After this, I actually became stuck for a bit, thinking about how I wanted to implement the hourly, seven day, and fourteen day forecasts, however, I eventually settled on an accordion style setup, and again, started by placing down client-side components. Once theses components were at a standard which I believed was good, I again went back to the json data, and extracted what I thought was important, then put the two pieces together, which completed the app. Finally, I went over everything again a couple of times, to check for any formatting issues, or places which I thought could be styled better, and once that was complete, the assignment could officially be deemed a success.

## Future Improvements / Changes:

- Color Pallete - Although I like the color pallete, at times, it seems too bright, and after looking at other popular weather apps, they generally seem to have a more simple, darker colour pallete. This is a change I might consider for next time.
- Dark Mode - A feature which I would definitley look to implement in the future would be dark mode, as I am someone who uses all of their devices and applications in dark mode, and as such, realize how important it is for user comfort, and for reducing eye strain.
- Display More Data - For the daily weather, and especially the future forecasts, it might have been nice to re-format the project, so that I could fit in more data, without it looking awkward (currently, it would lead to a very long rectangle for the 14 day, and 24 hour forecasts).
- Inconsistent Styling Methods - I generally like to keep my code organized, and like to keep the methods I use to style all of my components equally as organized. Personally, I like using SCSS style sheets when possible, however, for an assignment such as this, CSS is sufficient. However, I was forced to use a styled component for the search bar, as Material-UI did not have an easy way of changing the search-bar color. Although this is not an issue, it is a bit of an annoyance to me.
