import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import banner from "../../../assets/our-families-banner.png";

function OurFamilies() {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      py={3}
      spacing={10}
      sx={{ background: "linear-gradient(#E7F0FF, #E8F1FF)" }}
    >
      <Stack
        direction="column"
        width={{ xs: "100%", md: "50%" }}
        spacing={3}
        justifyContent="center"
        padding={4}
      >
        <Typography fontWeight={600} color="primary.main">
          CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
        </Typography>
        <Typography variant="h2">Our Families</Typography>
        <Typography color="#77829D" lineHeight={2}>
          We will work with you to develop individualised care plans, including
          management of chronic diseases. If we cannot assist, we can provide
          referrals or advice about the type of practitioner you require. We
          treat all enquiries sensitively and in the strictest confidence.
        </Typography>
      </Stack>
      <Box component="img" src={banner} width={{ xs: "100%", md: "50%" }}></Box>
    </Stack>
  );
}

export default OurFamilies;
