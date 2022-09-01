import styled from "styled-components";

import { TextField } from "@mui/material";

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
