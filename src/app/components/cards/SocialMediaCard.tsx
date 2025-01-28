import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { Twitter, Instagram, LinkedIn, GitHub } from "@mui/icons-material";
import SocialMediaBtn from "../buttons/SocialMediaBtn";

const SocialMediaCard: React.FC = () => {
  return (
    <Card
      sx={{
        width: "22vw",
        margin: "auto",
        marginTop: 5,
        position: "absolute",
        right: "15%",
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          sx={{ fontWeight: "bold", fontSize: "2rem" }}
        >
          Social Networks
        </Typography>
        <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2}>
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
