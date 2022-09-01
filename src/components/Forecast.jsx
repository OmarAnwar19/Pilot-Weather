//react imports
import React from "react";

//material ui imports
import { Box } from "@mui/material";

//component imports
import ForecastAccordion from "./ForecastAccordion";

//style imports
import "../styles/app.css";

const Forecast = ({ data }) => {
  const genHourlyInfo = (i) => {
    // prettier-ignore
    const info = {
      time: (data["forecast"]["forecastday"][0]["hour"][i]["time"]).split(" ")[1],
      condition: data["forecast"]["forecastday"][0]["hour"][i]["condition"]["text"],
      icon: data["forecast"]["forecastday"][0]["hour"][i]["condition"]["icon"],
      avg_temp: data["forecast"]["forecastday"][0]["hour"][i]["temp_c"],
    };

    return info;
  };

  const genDailyInfo = (i) => {
    // prettier-ignore
    const info = {
      date: data["forecast"]["forecastday"][i]["date"],
      condition: data["forecast"]["forecastday"][i]["day"]["condition"]["text"],
      icon: data["forecast"]["forecastday"][i]["day"]["condition"]["icon"],
      avg_temp: data["forecast"]["forecastday"][i]["day"]["avgtemp_c"],
    };

    return info;
  };

  return (
    <Box className="forecast-cont">
      <ForecastAccordion title={"Hourly"} genInfo={genHourlyInfo} n={24} />
      <ForecastAccordion title={"7 Day"} genInfo={genDailyInfo} n={7} />
      <ForecastAccordion title={"14 Day"} genInfo={genDailyInfo} n={14} />
    </Box>
  );
};

export default Forecast;
