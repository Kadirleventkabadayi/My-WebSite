"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

const CustomHeader: React.FC = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "royalblue",
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      <Toolbar sx={{ width: "60%", gap: 5 }}>
        <Button
          sx={{
            fontSize: "large",
            fontWeight: "bold",
            borderBlockEnd: "2px solid white",
            borderRadius: 0,
          }}
          color="inherit"
          onClick={() => handleScroll("top")}
        >
          Kadir Levent Kabadayı
        </Button>
        <Button color="inherit" onClick={() => handleScroll("TopProjects")}>
          Top Projects
        </Button>
        <Button color="inherit" onClick={() => handleScroll("Techs")}>
          Technologies and Frameworks
        </Button>
        <Button color="inherit" onClick={() => handleScroll("SocialMedias")}>
          Social Medias
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default CustomHeader;
