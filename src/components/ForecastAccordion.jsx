//react imports
import React from "react";

//material ui imports
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";

const ForecastAccordion = ({ title, genInfo, n }) => {
  return (
    //prettier-ignore
    <Accordion className={"accordion"}>
      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}>
        <Typography>{title}</Typography>
      </AccordionSummary>

      <AccordionDetails>
        <List>
          {[...Array(n)].map((key, i) => (
            <ListItem>
              <Typography>
                {genInfo(i).condition}
                {genInfo(i).time} - <img src={genInfo(i).icon} alt="weather icon" /> {genInfo(i).avg_temp}°c
              </Typography>
            </ListItem>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

export default ForecastAccordion;
