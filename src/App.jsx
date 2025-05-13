import { useState } from "react";
import rowData from "../MOCK_DATA.json";

console.log(rowData);
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Stack } from "@mui/material";

const columns = [
  { field: "id", headerName: "Product Id" },
  { field: "first_name", headerName: "First Name", width: 300 },
  { field: "last_name", headerName: "Last Name", width: 300 },
  { field: "email", headerName: "Email Id", width: 300 },
  { field: "gender", headerName: "Gender", width: 300 },
  { field: "ip_address", headerName: "Address", width: 300 },
];

function App() {
  // State to manage filtered rows
  const [filteredRows, setFilteredRows] = useState(rowData);

  // Filter function for Fitz
  const handleFilterFitz = () => {
    const filtered = rowData.filter((row) => row.first_name === "Fitz");
    setFilteredRows(filtered);
  };

  // Filter function for Keeley
  const handleFilterKeeley = () => {
    const filtered = rowData.filter((row) => row.first_name === "Keeley");
    setFilteredRows(filtered);
  };

  // Reset to show all data
  const handleShowAll = () => {
    setFilteredRows(rowData);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Stack direction={"row"} spacing={2} sx={{ p: 4 }}>
        <Button variant="outlined" onClick={handleFilterFitz}>
          Filter Fitz
        </Button>
        <Button variant="outlined" onClick={handleFilterKeeley}>
          Filter Keeley
        </Button>
        <Button variant="outlined" onClick={handleShowAll}>
          All
        </Button>
      </Stack>
      <DataGrid rows={filteredRows} columns={columns} />
    </Box>
  );
}

export default App;
