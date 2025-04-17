import { Box, Container, Grid, Typography } from "@mui/material";
import BlogsCard from "./BlogsCard";

function Blogs() {
  return (
    <Box py={6}>
      <Container>
        <Typography color="primary.main" fontWeight={600} textAlign="center">
          Blog & News
        </Typography>
        <Typography textAlign="center" variant="h2" mb={2}>
          Read Our Latest News
        </Typography>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <BlogsCard />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <BlogsCard />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <BlogsCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Blogs;
