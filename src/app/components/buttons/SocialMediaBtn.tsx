import React from "react";
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
    if (name === "X") {
      return "#1f1f1f";
    } else if (name === "LinkedIn") {
      return "royalblue";
    } else if (name === "GitHub") {
      return "#1f1f1f";
    } else {
      return "orange";
    }
  };

  return (
    <button
      onClick={() => window.open(url, "_blank")}
      className="flex items-center justify-start flex-wrap rounded-xl font-semibold bg-socialMediaBtn text-foreground p-2"
    >
      <Icon
        sx={{
          borderRadius: "0.25rem",
          width: 50,
          height: 50,
          backgroundColor: setColor(name),
          color: "white",
        }}
        className="p-2"
      />
    </button>
  );
};

export default SocialMediaBtn;
