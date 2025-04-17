import { Box, Stack, Typography } from "@mui/material";

function SpecialistCard({ img, title, desigination }) {
  return (
    <Stack direction="column">
      <Box component="img" src={img}></Box>
      <Typography fontSize={{ xs: 16, md: 24 }} color="#1B3C74">
        {title}
      </Typography>
      <Typography
        fontSize={{ xs: 14, md: 16 }}
        fontWeight={500}
        color="primary.main"
      >
        {desigination}
      </Typography>
    </Stack>
  );
}

export default SpecialistCard;
