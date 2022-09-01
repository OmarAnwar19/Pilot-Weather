import styled from "styled-components";

import { TextField, Accordion } from "@mui/material";

export const SearchBar = styled(TextField)`
  & label.Mui-focused {
    color: grey;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: grey;
    }
  }
`;

export const ForecastAcc = styled(Accordion)`
  background-color: #927883;
  border-radius: 1.5rem;
  color: #fff;
`;
