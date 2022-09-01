//react imports
import React from "react";

//material ui imports
import { Box, Stack, Typography } from "@mui/material";

//style imports
import "../styles/app.css";

const Weather = ({ data }) => {
  const info = {
    city: data["location"]["name"],
    icon: data["current"]["condition"]["icon"],
    condition: data["current"]["condition"]["text"],
    curr_tmp: data["current"]["temp_c"],
    feels_like: data["current"]["feelslike_c"],
    max_temp: data["forecast"]["forecastday"][0]["day"]["maxtemp_c"],
    min_temp: data["forecast"]["forecastday"][0]["day"]["mintemp_c"],
    humidity: data["current"]["humidity"],
    precip: data["current"]["precip_mm"],
    wind_speed: data["current"]["wind_kph"],
  };

  return (
    <Box className="weather-cont">
      <Stack spacing={2}>
        <Stack direction="row" spacing={2}>
          <img className="c-img" src={info.icon} alt="weather icon" />

          <Box>
            <Typography variant="h2" component="h2">
              {info.curr_tmp}°c
            </Typography>
            <Typography variant="h5" component="h2">
              {info.condition}
            </Typography>
          </Box>
        </Stack>

        <Box>
          <Typography variant="body1" component="h2">
            <b>Feels Like:</b> {info.feels_like}°c
            <br />
            <b>High:</b> {info.max_temp}°c
            <br />
            <b>Low:</b> {info.min_temp}°c
            <br />
            <b>Humidity:</b> {info.humidity}%
            <br />
            <b>Precipitation:</b> {info.precip}mm
            <br />
            <b>Wind Speed:</b> {info.wind_speed}kph
          </Typography>
        </Box>
        <Box>
          <Typography variant="h2" component="h2">
            {info.city}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default Weather;
