"use client";

import React from "react";
import Button from "@mui/material/Button";
import { SvgIconComponent } from "@mui/icons-material";

interface SocialMediaBtnProps {
  icon: SvgIconComponent;
  name: string;
  url: string;
}

const SocialMediaBtn: React.FC<SocialMediaBtnProps> = ({
  icon: Icon,
  name,
  url,
}) => {
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<Icon />}
      onClick={() => window.open(url, "_blank")}
    >
      {name}
    </Button>
  );
};

export default SocialMediaBtn;
