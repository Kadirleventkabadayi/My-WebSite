import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { LinkedIn, GitHub } from "@mui/icons-material";
import XIcon from "@mui/icons-material/X";
import SocialMediaBtn from "../buttons/SocialMediaBtn";

const SocialMediaCard: React.FC = () => {
  return (
    <Card
      sx={{
        paddingBlock: "2%",
        width: "65vw",
        margin: "auto",
        bgcolor: "var(--socialMediaCard)",
        boxShadow: 0,
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontSize: "2rem",
            color: "var(--foreground)",
            textAlign: "center",
            paddingBottom: "5%",
          }}
        >
          Social Medias
        </Typography>

        <Box
          gap={2}
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            paddingBottom: "5%",
          }}
        >
          <SocialMediaBtn
            icon={GitHub}
            name="GitHub"
            url="https://github.com/Kadirleventkabadayi?tab=overview&from=2025-01-01&to=2025-01-29"
          />{" "}
          <SocialMediaBtn
            icon={LinkedIn}
            name="LinkedIn"
            url="https://www.linkedin.com/in/kadir-levent-kabaday%C4%B1-7b015b25a/"
          />
          <SocialMediaBtn icon={XIcon} name="X" url="https://x.com/Prelencos" />
        </Box>
      </CardContent>
    </Card>
  );
};

export default SocialMediaCard;
