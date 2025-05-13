import { useState } from "react";
import rowData from "../../MOCK_DATA.json";
import { DataGrid } from "@mui/x-data-grid";
import {
  Box,
  Button,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const columns = [
  { field: "id", headerName: "Product Id" },
  { field: "first_name", headerName: "First Name", width: 300 },
  { field: "last_name", headerName: "Last Name", width: 300 },
  { field: "email", headerName: "Email Id", width: 300 },
  { field: "gender", headerName: "Gender", width: 300 },
  { field: "ip_address", headerName: "Address", width: 300 },
];

function SelectFilter() {
  // State to manage filtered rows and selected gender
  const [filteredRows, setFilteredRows] = useState(rowData);
  const [selectedGender, setSelectedGender] = useState("");

  // Filter function for Fitz
  const handleFilterFitz = () => {
    let filtered = rowData.filter((row) => row.first_name === "Fitz");
    if (selectedGender) {
      filtered = filtered.filter((row) => row.gender === selectedGender);
    }
    setFilteredRows(filtered);
  };

  // Filter function for Keeley
  const handleFilterKeeley = () => {
    let filtered = rowData.filter((row) => row.first_name === "Keeley");
    if (selectedGender) {
      filtered = filtered.filter((row) => row.gender === selectedGender);
    }
    setFilteredRows(filtered);
  };

  // Reset to show all data
  const handleShowAll = () => {
    let filtered = rowData;
    if (selectedGender) {
      filtered = rowData.filter((row) => row.gender === selectedGender);
    }
    setFilteredRows(filtered);
  };

  // Handle gender selection
  const handleGenderChange = (event) => {
    const gender = event.target.value;
    setSelectedGender(gender);

    // Apply gender filter immediately
    if (gender) {
      const filtered = rowData.filter((row) => row.gender === gender);
      setFilteredRows(filtered);
    } else {
      setFilteredRows(rowData);
    }
  };

  // Get unique gender values for the select options
  const genderOptions = [...new Set(rowData.map((row) => row.gender))];

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
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="gender-select-label">Gender</InputLabel>
          <Select
            labelId="gender-select-label"
            value={selectedGender}
            label="Gender"
            onChange={handleGenderChange}
          >
            <MenuItem value="">All</MenuItem>
            {genderOptions.map((gender) => (
              <MenuItem key={gender} value={gender}>
                {gender}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
      <DataGrid rows={filteredRows} columns={columns} />
    </Box>
  );
}

export default SelectFilter;
