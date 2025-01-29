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
    <AppBar position="sticky" className="bg-royalblue flex items-start">
      <Toolbar className="w-[60%] gap-5">
        <Button
          className="text-lg font-bold border-b-2 border-white rounded-none"
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
