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
  const setColor = (name: string) => {
    if (name === "Twitter") {
      return "skyblue";
    } else if (name === "Instagram") {
      return "blueviolet";
    } else if (name === "LinkedIn") {
      return "royalblue";
    } else if (name === "GitHub") {
      return "#1f1f1f";
    } else {
      return "orange";
    }
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => window.open(url, "_blank")}
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "wrap",
        borderRadius: 1,
        fontWeight: "600",
        bgcolor: "var(--socialMediaBtn)",
        color: "var(--foreground)",
      }}
    >
      <Icon
        sx={{
          borderRadius: 1,
          width: 50,
          height: 50,
          mr: "10%",
          bgcolor: setColor(name),
          color: "white",
        }}
      />
      {name}
    </Button>
  );
};

export default SocialMediaBtn;
