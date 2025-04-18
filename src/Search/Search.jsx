import { Box, Container, Stack, Typography } from "@mui/material";
import NavBar from "../components/NavBar/NavBar";
import SearchHospital from "../components/SearchHospital/SearchHospital";
import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import HospitalCard from "../components/HospitalCard/HospitalCard";
import icon from "../assets/tick.png";
import cta from "../assets/cta.png";

function Search() {
  const [searchParams, setSeachParams] = useSearchParams();
  const [state, setState] = useState(searchParams.get("state"));
  const [city, setCity] = useState(searchParams.get("city"));
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({});
  const [showBookingSuccess, setShowBookingSuccess] = useState(false);

  const availableSlots = useMemo(() => {
    return {
      morning: ["11:30 AM"],
      afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
      evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
    };
  }, []);

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
        );
        const data = await res.json();
        setHospitals(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    if (state && city) {
      fetchHospitals();
    }
  }, [state, city]);

  useEffect(() => {
    setState(searchParams.get("state"));
    setCity(searchParams.get("city"));
  }, [searchParams]);

  const handleBookingModal = (details) => {
    setBookingDetails(details);
    setIsModelOpen(true);
  };

  const setDescription = () => {
    if (hospitals.length === 0) {
      return null;
    }

    return (
      <Stack mt={15} px={5}>
        <Typography
          component="h1"
          fontSize={24}
          lineHeight={1.1}
          mb={2}
          fontWeight={500}
        >
          {`${hospitals.length} medical centers available in `}
          <span style={{ textTransform: "capitalize" }}>
            {city.toLocaleLowerCase()}
          </span>
        </Typography>
        <Stack direction="row" spacing={2}>
          <img src={icon} height={24} width={24} alt="icon" />
          <Typography color="#787887" lineHeight={1.4}>
            Book appointments with minimum wait-time & verified doctor details
          </Typography>
        </Stack>
      </Stack>
    );
  };

  const renderedHospitals = hospitals.map((hospital) => {
    return (
      <HospitalCard
        key={hospital["Hospital Name"]}
        details={hospital}
        availableSlots={availableSlots}
        handleBooking={handleBookingModal}
      />
    );
  });

  return (
    <>
      <NavBar />
      <Box
        sx={{
          background: "linear-gradient(#EFF5FE, rgba(241,247,255,0.47))",
          width: "100%",
        }}
      >
        <Box
          sx={{
            background: "linear-gradient(90deg, #2AA7FF, #0C8CE5)",
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
          }}
        >
          <Container
            maxWidth="xl"
            sx={{
              position: "relative",
              background: "#fff",
              p: 3,
              borderRadius: 2,
              top: "50px",
              mb: 10,
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            <SearchHospital />
          </Container>
        </Box>

        {loading ? (
          <Typography
            component="h3"
            variant="h3"
            bgcolor="#fff"
            p={3}
            borderRadius={2}
            textAlign="center"
          >
            Loading...
          </Typography>
        ) : null}

        {!state ? (
          <Typography
            component="h3"
            variant="h3"
            bgcolor="#fff"
            p={3}
            borderRadius={2}
            textAlign="center"
          >
            Please Select State and City
          </Typography>
        ) : null}

        {setDescription()}

        <Stack direction={{ xs: "column", md: "row" }} spacing={5}>
          <Stack spacing={2}>{renderedHospitals}</Stack>
          <Box
            component="img"
            src={cta}
            sx={{ width: "20%", height: "200px" }}
          ></Box>
        </Stack>
      </Box>
    </>
  );
}
export default Search;
