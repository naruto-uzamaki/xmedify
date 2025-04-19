import { Box, Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import SearchBar from "../components/SearchBar/SearchBar";
import HospitalCard from "../components/HospitalCard/HospitalCard";
import cta from "../assets/cta.png";

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("bookings") || "[]";
    setBookings(JSON.parse(data));
    setFilteredBookings(JSON.parse(data));
  }, []);

  const renderedItems = filteredBookings.map((hospital, index) => {
    return (
      <HospitalCard
        key={hospital["Hospital Name"]}
        details={hospital}
        booking={true}
      />
    );
  });

  return (
    <Box
      sx={{
        background: "linear-gradient(#EFF5FE, rgba(241,247,255,0.47))",
        width: "100%",
      }}
    >
      <NavBar />
      <Box
        sx={{
          background: "linear-gradient(90deg, #2AA7FF, #0C8CE5)",
          borderBottomLeftRadius: "1rem",
          borderBottomRightRadius: "1rem",
        }}
      >
        <Container maxWidth="xl">
          <Stack>
            <Typography
              component="h1"
              fontSize={{ xs: 32, md: 40 }}
              fontWeight={700}
              color="#fff"
              textAlign="left"
            >
              My Bookings
            </Typography>
            <Box
              position="relative"
              top="40px"
              p={2}
              bgcolor="#fff"
              borderRadius={2}
              sx={{ width: "70%" }}
              alignSelf="flex-end"
            >
              <SearchBar
                list={bookings}
                setFilteredList={setFilteredBookings}
              />
            </Box>
          </Stack>
        </Container>
      </Box>

      <Stack direction={{ xs: "column", md: "row" }} py={10} spacing={3}>
        <Stack>
          {filteredBookings.length == 0 ? (
            <Typography variant="h3" bgcolor="#fff" p={3} borderRadius={2}>
              No Bookings Found!
            </Typography>
          ) : null}

          {renderedItems}
        </Stack>
        <Box
          component="img"
          src={cta}
          sx={{ width: "20%", height: "200px" }}
        ></Box>
      </Stack>
    </Box>
  );
}
export default MyBookings;
