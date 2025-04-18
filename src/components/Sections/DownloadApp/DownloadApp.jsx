import { Box, Button, Stack, Typography } from "@mui/material";
import mobile from "../../../assets/mobile.jpg";
import arrow from "../../../assets/down-arr.png";
import playstore from "../../../assets/playstore.png";
import apple from "../../../assets/apple-logo.png";
import SmsForm from "./SmsForm";

function DownloadApp() {
  return (
    <Box
      sx={{ background: "linear-gradient(#E7F0FF 100%, #E8F1FF 47%)", pt: 5 }}
    >
      <Stack direction={{ xs: "column", md: "row" }} spacing={8}>
        <Box component="img" src={mobile} width="40%"></Box>
        <Stack direction="row" width="60%" alignItems="center">
          <Box
            component="img"
            src={arrow}
            sx={{
              position: "relative",
              width: "50px",
              height: "150px",
            }}
          ></Box>
          <Stack direction="column" sx={{ position: "relative", top: 20 }}>
            <Typography variant="h2" mb={2}>
              Download the
              <br />
              <Box component="span" color="primary.main">
                Medify{" "}
              </Box>
              App
            </Typography>
            <SmsForm />
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 1, md: 2 }}
            >
              <Button
                sx={{
                  bgcolor: "#333",
                  color: "#fff",
                  py: 1.5,
                  borderRadius: 1.5,
                }}
                size={"large"}
                startIcon={<img src={playstore} height={24} />}
                variant="contained"
                disableElevation
              >
                Google Play
              </Button>
              <Button
                sx={{
                  bgcolor: "#333",
                  color: "#fff",
                  py: 1.5,
                  borderRadius: 1.5,
                }}
                size="large"
                startIcon={<img src={apple} height={24} />}
                variant="contained"
                disableElevation
              >
                App Store
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default DownloadApp;
