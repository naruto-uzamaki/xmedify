import { Box, Stack, Typography } from "@mui/material";

function IconCard({ img, title, bgColor, active = false, shadow = false }) {
  return (
    <Stack
      direction="column"
      spacing={2}
      borderRadius={2}
      px={6}
      py={4}
      alignItems="center"
      bgcolor={active ? "rgba(42,167,255,0.08)" : bgColor}
      border={active ? "1px solid #2AA7FF" : "0"}
      boxShadow={shadow ? "0 0 24px rgba(0,0,0,0.09)" : "none"}
    >
      <Box component="img" src={img} height={60} width={60}></Box>
      <Typography
        fontSize={18}
        color={active ? "primary.main" : "#ABB6C7"}
        fontWeight={active ? 600 : 400}
      >
        {title}
      </Typography>
    </Stack>
  );
}

export default IconCard;
