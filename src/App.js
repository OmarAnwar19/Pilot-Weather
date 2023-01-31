//node imports
import axios from "axios";

// react imports
import React, { useState } from "react";

//material-ui imports
import { Box, Grid, Typography } from "@mui/material";

//component imports
import Weather from "./components/Weather";
import Forecast from "./components/Forecast";
import Search from "./components/Search";

//style imports
import "./styles/app.css";

//key imports
import { BASE_URL } from "./api/keys";

const App = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .get(`${BASE_URL}&q=${city}`)
      .then((res) => setData(res.data))
      .catch((err) => setData({ message: err["message"] }));

    console.log(`${BASE_URL}&q=${city}`);
  };

  return (
    <>
      <Grid container className="grid" direction="column" spacing={0}>
        <Search city={city} setCity={setCity} handleSubmit={handleSubmit} />
        <Box className="bg-cont">
          {data ? (
            <Box>
              {data.message ? (
                <Typography className="text-msg" variant="h3">
                  Invalid city entered, please try again.
                </Typography>
              ) : (
                <>
                  <Weather data={data} />
                  <Forecast data={data} />
                </>
              )}
            </Box>
          ) : (
            <Typography className="text-msg" variant="h3">
              Enter a city to see weather information!
            </Typography>
          )}
        </Box>
      </Grid>
    </>
  );
};

export default App;
