import { Box, Button, Stack, Typography } from "@mui/material";
import img from "../../assets/home.webp";
import { Link } from "react-router-dom";
function HeroComponent() {
  return (
    <Box>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Stack
          direction="column"
          alignItems="flex-start"
          justifyContent="center"
          spacing={2}
        >
          <Typography variant="h3">Skip the travel! Find Online</Typography>
          <Typography variant="h1">
            Medical <span style={{ color: "#2AA7FF" }}>Centers</span>
          </Typography>
          <Typography color="#5C6169" fontSize={{ md: 20 }}>
            Connect instantly with a 24x7 specialist or choose to video visit a
            particular doctor.
          </Typography>
          <Link to="/search">
            <Button variant="contained" size="large" disableElevation>
              Find Centers
            </Button>
          </Link>
        </Stack>
        <Box component="img" src={img} width={{ xs: "100%", md: "50%" }}></Box>
      </Stack>
    </Box>
  );
}

export default HeroComponent;
