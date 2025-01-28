"use client";

import { Box, Container, Typography, Link, Divider } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: "auto",
        backgroundColor: "var(--categoryArea)",
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", color: "var(--footerString1)" }}
        >
          My Website
        </Typography>
        <Divider
          sx={{
            my: 2,
            borderColor: "var(--footerString1)",
            border: "solid 1px",
          }}
        />
        <Typography
          variant="body1"
          align="center"
          sx={{ color: "var(--footerString2)", mb: 2 }}
        >
          Thank you for visiting my website. Feel free to explore more!
        </Typography>
        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 2, color: "var(--footerString2)" }}
        >
          {"Copyright © "}
          <Link href="/">Your Website</Link> {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
