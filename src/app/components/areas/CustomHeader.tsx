"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Switch } from "@mui/material";
import { useEffect, useState } from "react";

const CustomHeader: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkMode(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const handleThemeChange = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      document.documentElement.classList.toggle("dark", newMode);
      return newMode;
    });
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

        <Switch
          sx={{ color: "white", bgcolor: "white" }}
          checked={darkMode}
          onChange={handleThemeChange}
        />
      </Toolbar>
    </AppBar>
  );
};

export default CustomHeader;
