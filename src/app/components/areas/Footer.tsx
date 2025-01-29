"use client";

import {
  Box,
  Container,
  Typography,
  Link,
  Divider,
  IconButton,
} from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material"; // Örnek sosyal medya ikonları
import XIcon from "@mui/icons-material/X";

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

        <Box display="flex" justifyContent="center" mb={2}>
          <IconButton
            href="https://github.com/Kadirleventkabadayi?tab=overview&from=2025-01-01&to=2025-01-29"
            target="_blank"
            sx={{ color: "var(--footerString1)" }}
          >
            <GitHub />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/kadir-levent-kabaday%C4%B1-7b015b25a/"
            target="_blank"
            sx={{ color: "var(--footerString1)" }}
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            href="https://x.com/Prelencos"
            target="_blank"
            sx={{ color: "var(--footerString1)" }}
          >
            <XIcon />
          </IconButton>
        </Box>

        <Box display="flex" justifyContent="center" mb={2}>
          <Link
            href="mailto:kadirleventkabadayi@gmail.com"
            sx={{ color: "var(--footerString2)", mx: 2 }}
          >
            Contact
          </Link>
        </Box>

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
          <Link href="/">My Website</Link> {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
