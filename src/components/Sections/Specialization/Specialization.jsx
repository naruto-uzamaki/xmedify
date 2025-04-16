import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import IconCard from "../../IconCard/IconCard";
import icon1 from "../../../assets/Drugstore.png";
import icon2 from "../../../assets/primary-care.png";
import icon3 from "../../../assets/cardiology.png";
import icon4 from "../../../assets/mri.png";
import icon5 from "../../../assets/blood-test.png";
import icon6 from "../../../assets/piscologist.png";
import icon7 from "../../../assets/X-Ray.png";
import { useMemo } from "react";

function Specialization() {
  const data = useMemo(
    () => [
      { icon: icon1, title: "Dentistry" },
      { icon: icon2, title: "Primary Care" },
      { icon: icon3, title: "Cardiology" },
      { icon: icon4, title: "MRI Resonance" },
      { icon: icon5, title: "Blood Test" },
      { icon: icon6, title: "Piscologist" },
      { icon: icon1, title: "Laboratory" },
      { icon: icon7, title: "X-Ray" },
    ],
    []
  );

  const renderedItems = data.map((item) => {
    return (
      <Grid key={item.title} size={{ xs: 12, md: 3 }}>
        <IconCard
          img={item.icon}
          title={item.title}
          bgColor={"#FFFFFF"}
          shadow={true}
        />
      </Grid>
    );
  });
  return (
    <Stack
      direction="column"
      spacing={4}
      alignItems="center"
      py={4}
      px={2}
      sx={{ width: "100%", background: "linear-gradient(#E7F0FF, #E8F1FF)" }}
    >
      <Typography variant="h2" textAlign="center">
        Find by specialisation
      </Typography>

      <Grid container spacing={2}>
        {renderedItems}
      </Grid>

      <Button
        size="large"
        variant="contained"
        disableElevation
        sx={{ paddingX: "25px", marginBottom: "12px" }}
      >
        View All
      </Button>
    </Stack>
  );
}

export default Specialization;
