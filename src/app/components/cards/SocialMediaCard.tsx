import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { Twitter, Instagram, LinkedIn, GitHub } from "@mui/icons-material";
import SocialMediaBtn from "../buttons/SocialMediaBtn";

const SocialMediaCard: React.FC = () => {
  return (
    <Card
      sx={{
        paddingBlock: "2%",
        width: "65vw",
        margin: "auto",
        bgcolor: "var(--socialMediaCard)",
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
            paddingBottom: "10%",
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
            icon={Twitter}
            name="Twitter"
            url="https://twitter.com"
          />

          <SocialMediaBtn
            icon={Instagram}
            name="Instagram"
            url="https://instagram.com"
          />
          <SocialMediaBtn
            icon={LinkedIn}
            name="LinkedIn"
            url="https://linkedin.com"
          />
          <SocialMediaBtn
            icon={GitHub}
            name="GitHub"
            url="https://github.com"
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default SocialMediaCard;
