import styled from "styled-components";

import { TextField } from "@mui/material";

const SearchBar = styled(TextField)`
  & label.Mui-focused {
    color: grey;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: grey;
    }
  }
`;

export { SearchBar };
