import { Button, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar({ list, setFilteredList }) {
  const [queryText, setQueryText] = useState("");

  const filterHospitals = () => {
    const filteredList = list.filter((item) => {
      return item["Hospital Name"]
        .toLowerCase()
        .includes(queryText.trim().toLowerCase());
    });
    setFilteredList(filteredList);
  };

  useEffect(() => {
    const timer = setTimeout(filterHospitals, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [queryText, list]);

  const handleSubmit = (e) => {
    e.preventDefault();
    filterHospitals();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row" spacing={2} justifyContent="flex-end">
        <TextField
          type="text"
          value={queryText}
          onChange={(e) => setQueryText(e.target.value)}
          label="Search By Hospital"
          variant="outlined"
          sx={{ width: "100%" }}
        />

        <Button
          type="submit"
          variant="contained"
          size="large"
          startIcon={<SearchIcon />}
          disableElevation
          sx={{ px: 2 }}
        >
          Search
        </Button>
      </Stack>
    </form>
  );
}

export default SearchBar;
