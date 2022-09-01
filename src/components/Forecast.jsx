//react imports
import React from "react";

//material ui imports
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";

//style imports
import "../styles/app.css";

const Forecast = ({ data }) => {
  const index = 0;

  //for each hour in forecastday[0][hour]
  // prettier-ignore
  const hourly_info = {
    time: (data["forecast"]["forecastday"][0]["hour"][index]["time"]).split(" ")[1],
    icon: data["forecast"]["forecastday"][0]["hour"][index]["condition"]["icon"],
    temp: data["forecast"]["forecastday"][0]["hour"][index]["temp_c"],
    humidity: data["forecast"]["forecastday"][0]["hour"][index]["humidity"],
    precip: data["forecast"]["forecastday"][0]["hour"][index]["precip_mm"],
  };

  // prettier-ignore
  const info = {
    date: data["forecast"]["forecastday"][index]["date"],
    icon: data["forecast"]["forecastday"][index]["day"]["condition"]["icon"],
    avg_temp: data["forecast"]["forecastday"][index]["day"]["avgtemp_c"],
    avg_humidity: data["forecast"]["forecastday"][index]["day"]["avghumidity"],
    total_precip: data["forecast"]["forecastday"][index]["day"]["totalprecip_mm"],
  };

  return (
    <Box className="forecast-cont">
      <Accordion className={"accordion"}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
        >
          <Typography>Hourly</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={"accordion"}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
        >
          <Typography>7 Day</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={"accordion"}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
        >
          <Typography>14 Day</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Forecast;
