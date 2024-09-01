## Weather Forecast App

This is a simple React-based weather forecasting application that allows users to search for the weather in any city worldwide. It displays the current weather and a 5-day forecast using the OpenWeatherMap API.

## Features

- **User's Location Detection:** Automatically detects the user's current location and shows the weather information for that area by default.
- **Search Functionality:** Allows users to search for the weather in any city globally.
- **Today's Weather:** Displays detailed weather information for the current day, including temperature, weather conditions, cloud coverage, and wind speed.
- **5-Day Forecast:** Provides a 5-day weather forecast with key weather details.
- **Info Section:** Contains a button that displays additional information about the Product Manager Accelerator Program.

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **Axios:** Promise-based HTTP client for making API requests.
- **OpenWeatherMap API:** Provides weather data for the app.
- **CSS:** Custom styling for the application.

## Setup and Installation

### Prerequisites

Ensure you have the following installed on your local development machine:

- [Node.js](https://nodejs.org/) (which includes npm)
- [Git](https://git-scm.com/)

### Installation Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Sai-G-GitHub/PMAccelerator-WeatherApp.git
   cd weather-app
   ```

2. **Install dependencies:**

   Navigate to the project directory and install the required npm packages:

   ```bash
   npm install
   ```

3. **Create a `.env` file:**

   In the root of the project directory, create a `.env` file and add your OpenWeatherMap API key:

   ```plaintext
   REACT_APP_WEATHER_API_KEY=________
   ```

4. **Run the app:**

   Start the development server:

   ```bash
   npm start
   ```

   The app should now be running at `http://localhost:3000`.

## Usage

- Upon loading the app, it will automatically show the weather for your current location.
- Use the search bar to find the weather for any city.
- Click the "Info" button next to today's weather section to learn more about the Product Manager Accelerator Program.

## License

This project is licensed under the MIT License.
