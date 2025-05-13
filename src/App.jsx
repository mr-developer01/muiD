import { useState } from "react";
import FilterUsingButton from "./components/FilterUsingButton";
import { Box } from "@mui/material";
import SelectFilter from "./components/SelectFilter";

function App() {
  return (
    <Box sx={{ width: "100%" }}>
      {/* <FilterUsingButton /> */}
      <SelectFilter />
    </Box>
  );
}

export default App;
