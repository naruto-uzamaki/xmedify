import { Box, Grid, Stack, Typography } from "@mui/material";
import doctorIcon from "../../assets/Doctor.png";
import pharmacyIcon from "../../assets/Drugstore.png";
import hospitalIcon from "../../assets/Hospital.png";
import capsuleIcon from "../../assets/Capsule.png";
import ambulanceIcon from "../../assets/Ambulance.png";
import IconCard from "../IconCard/IconCard";
import { useMemo } from "react";

function HeroServices() {
  const Services = useMemo(
    () => [
      { img: doctorIcon, title: "Doctors", active: false },
      { img: pharmacyIcon, title: "Labs", active: false },
      { img: hospitalIcon, title: "Hospitals", active: true },
      { img: capsuleIcon, title: "Medical Store", active: false },
      { img: ambulanceIcon, title: "Ambulance", active: false },
    ],
    []
  );

  const renderedItems = Services.map((service) => {
    return (
      <Box flex={1} key={service.title}>
        <IconCard
          img={service.img}
          title={service.title}
          active={service.active}
          bgColor="#FAFBFE"
        ></IconCard>
      </Box>
    );
  });

  return (
    <Box>
      <Typography
        component="h4"
        variant="h6"
        textAlign="center"
        fontWeight={500}
      >
        You may be looking for
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        flexWrap="wrap"
        spacing={2}
      >
        {renderedItems}
      </Stack>
    </Box>
  );
}

export default HeroServices;
