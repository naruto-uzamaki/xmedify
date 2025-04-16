import { Box, Button, InputAdornment } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Select, MenuItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchHospital() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [formData, setFormData] = useState({ state: "", city: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const res = await fetch("https://meddata-backend.onrender.com/states");
        const data = await res.json();
        setStates(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchStates();
  }, []);

  useEffect(() => {
    const fetchCities = async () => {
      if (!formData.state) return;
      setCities([]);
      setFormData((prev) => {
        return { ...prev, city: "" };
      });
      try {
        const res = await fetch(
          `https://meddata-backend.onrender.com/cities/${formData.state}`
        );
        const data = await res.json();
        setCities(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCities();
  }, [formData.state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.state || !formData.city) return;
    navigate(`/search?state=${formData.state}&city=${formData.city}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const stateOptions = states.map((state) => {
    return (
      <MenuItem key={state} value={state}>
        {state}
      </MenuItem>
    );
  });

  const cityOptions = cities.map((city) => {
    return (
      <MenuItem key={city} value={city}>
        {city}
      </MenuItem>
    );
  });

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        gap: "50px",
      }}
    >
      <Select
        displayEmpty
        id="state"
        name="state"
        value={formData.state}
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        required
        sx={{ Width: 500, minWidth: "30%" }}
      >
        <MenuItem selected value="" disabled>
          State
        </MenuItem>
        {stateOptions}
      </Select>

      <Select
        displayEmpty
        id="city"
        name="city"
        value={formData.city}
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        required
        sx={{ Width: 500, minWidth: "30%" }}
      >
        <MenuItem selected value="" disabled>
          City
        </MenuItem>
        {cityOptions}
      </Select>

      <Button
        type="submit"
        size="large"
        startIcon={<SearchIcon />}
        variant="contained"
        disableElevation
        sx={{ py: "15px", px: "50px" }}
      >
        Search
      </Button>
    </Box>
  );
}

export default SearchHospital;
