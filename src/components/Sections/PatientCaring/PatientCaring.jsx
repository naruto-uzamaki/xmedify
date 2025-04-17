import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import banner from "../../../assets/patientcaring.png";
import tick from "../../../assets/tick-blue.png";

function PatientCaring() {
  return (
    <Box
      py={6}
      sx={{ background: "linear-gradient(#E7F0FF, #E8F1FF)" }}
      height="100vh"
    >
      <Stack direction={{ xs: "column", md: "row" }} spacing={25}>
        <Box component="img" src={banner} width={{ xs: "100%", md: "40%" }} />
        <Stack
          direction="column"
          alignItems="flex-start"
          justifyContent="center"
          width={{ xs: "100%", md: "50%" }}
        >
          <Typography fontWeight={600} color="primary.main">
            HELPING PATIENTS FROM AROUND THE GLOBE!!
          </Typography>
          <Typography variant="h2" mb={1}>
            Patient{" "}
            <Box component="span" color="primary.main">
              Caring
            </Box>
          </Typography>
          <Typography color="#77829D" lineHeight={1.8}>
            Our goal is to deliver quality of care in a courteous, respectful,
            and compassionate manner. We hope you will allow us to care for you
            and strive to be the first and best choice for healthcare.
          </Typography>
          <List sx={{ fontSize: { xs: 12, md: 18 } }}>
            <ListItem disableGutters>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <Box component="img" src={tick} height={22} width={22} />
              </ListItemIcon>
              <ListItemText
                primary="Stay Updated About Your Health"
                sx={{
                  fontSize: { xs: 14, md: 18 },
                  fontWeight: 500,
                  color: "#1B3C74",
                }}
              />
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <Box component="img" src={tick} height={22} width={22} />
              </ListItemIcon>
              <ListItemText
                primary="Check Your Results Online"
                sx={{
                  fontSize: { xs: 14, md: 18 },
                  fontWeight: 500,
                  color: "#1B3C74",
                }}
              />
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <Box component="img" src={tick} height={22} width={22} />
              </ListItemIcon>
              <ListItemText
                primary="Manage Your Appointments"
                sx={{
                  fontSize: { xs: 14, md: 18 },
                  fontWeight: 500,
                  color: "#1B3C74",
                }}
              />
            </ListItem>
          </List>
        </Stack>
      </Stack>
    </Box>
  );
}

export default PatientCaring;
