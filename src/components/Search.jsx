//react imports
import React from "react";

//material ui imports
import { Box, IconButton } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

import { SearchBar } from "../styles/theme";

//style imports
import "../styles/app.css";

const Search = ({ city, setCity, handleSubmit }) => {
  return (
    <Box className="search">
      <form onSubmit={handleSubmit}>
        <SearchBar
          size="small"
          name="city"
          label="Enter city name here!"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          InputProps={{
            endAdornment: (
              <IconButton type="submit">
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
      </form>
    </Box>
  );
};

export default Search;
