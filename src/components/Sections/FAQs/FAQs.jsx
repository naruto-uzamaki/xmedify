import { useMemo } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import faqBanner from "../../../assets/faqs-banner.jpg";
import CustomizedAccordions from "../../Accordion/Accordion";

function FAQs() {
  const data = useMemo(
    () => [
      {
        question: "Why choose our medical for your family?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
      },
      {
        question: "Why we are different from others?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
      },
      {
        question: "Trusted & experience senior care & love",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
      },
      {
        question: "How to get appointment for emergency cases?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
      },
    ],
    []
  );

  return (
    <Box py={4}>
      <Container maxWidth="xl">
        <Typography color="primary.main" fontWeight={600} textAlign="center">
          Get Your Answer
        </Typography>
        <Typography textAlign="center" variant="h2" mb={2}>
          Frequently Asked Questions
        </Typography>
        <Grid container alignItems="center" spacing={5}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box src={faqBanner} component="img" width={1} height="auto" />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box maxWidth={450}>
              <CustomizedAccordions data={data} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default FAQs;
