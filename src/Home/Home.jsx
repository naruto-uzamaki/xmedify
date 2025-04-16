import { Container, Stack, Box } from "@mui/material";
import HeroComponent from "../components/HeroComponent/HeroComponent";
import NavBar from "../components/NavBar/NavBar";
import SearchHospital from "../components/SearchHospital/SearchHospital";
import HeroServices from "../components/HeroServices/HeroServices";

function Home() {
  return (
    <>
      <Box
        sx={{
          background:
            "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
        }}
        mb={4}
      >
        <NavBar />
        <Container maxWidth="xl">
          <HeroComponent />
          <Stack
            position="relative"
            zIndex={99}
            p={{ xs: 2.5, md: 8 }}
            mt={{ xs: -2, md: 0, lg: -6, xl: -10 }}
            bgcolor="#fff"
            borderRadius="15px"
            spacing={10}
            boxShadow="0 0 12px rgba(0,0,0,0.1)"
          >
            <SearchHospital />
            <HeroServices />
          </Stack>
        </Container>
      </Box>
    </>
  );
}
export default Home;
