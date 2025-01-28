import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  GitHub,
} from "@mui/icons-material";
import SocialMediaBtn from "../buttons/SocialMediaBtn";

const SocialMediaCard: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Social Networks
        </Typography>
        <Box display="flex" flexDirection="column" gap={2}>
          <SocialMediaBtn
            icon={Twitter}
            name="Twitter"
            url="https://twitter.com"
          />
          <SocialMediaBtn
            icon={Facebook}
            name="Facebook"
            url="https://facebook.com"
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
