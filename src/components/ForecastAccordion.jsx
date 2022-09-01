//react imports
import React from "react";

//material ui imports
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  Grid,
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
              <Grid container spacing={2}>
                <Grid item xs={10}>
                  <Typography>
                    {genInfo(i).datetime} - {genInfo(i).condition}, {genInfo(i).avg_temp}°c
                  </Typography>
                </Grid>
                
                <Grid item xs={2}>
                  <Typography>
                    <img src={genInfo(i).icon} alt="weather icon" />                
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

export default ForecastAccordion;
