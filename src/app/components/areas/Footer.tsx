"use client";

import {
  Box,
  Container,
  Typography,
  Link,
  Divider,
  IconButton,
} from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
  return (
    <Box component="footer" className="py-4 px-2 mt-auto bg-topArea ">
      <Container maxWidth="sm">
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          className="font-bold text-footerString1"
        >
          My Website
        </Typography>
        <Divider
          sx={{
            marginY: 2,
            borderColor: "var(--footerString1)",
            borderStyle: "solid",
            borderWidth: "1px",
          }}
        />

        <Box className="flex justify-center mb-2">
          <IconButton
            href="https://github.com/Kadirleventkabadayi?tab=overview&from=2025-01-01&to=2025-01-29"
            target="_blank"
            className="text-footerString1"
          >
            <GitHub sx={{ color: "var(--footerString1)" }} />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/kadir-levent-kabaday%C4%B1-7b015b25a/"
            target="_blank"
            className="text-footerString1"
          >
            <LinkedIn sx={{ color: "var(--footerString1)" }} />
          </IconButton>
          <IconButton
            href="https://x.com/Prelencos"
            target="_blank"
            className="text-footerString1"
          >
            <XIcon sx={{ color: "var(--footerString1)" }} />
          </IconButton>
        </Box>

        <Box className="flex justify-center mb-2">
          <Link
            href="mailto:kadirleventkabadayi@gmail.com"
            className="text-footerString2 mx-2"
          >
            Contact
          </Link>
        </Box>

        <Typography
          variant="body1"
          align="center"
          className="text-footerString2 mb-2"
        >
          Thank you for visiting my website. Feel free to explore more!
        </Typography>

        <Typography
          variant="body2"
          align="center"
          className="mt-2 text-footerString2"
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
