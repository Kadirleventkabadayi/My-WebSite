"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Box, Switch } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const CustomHeader: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();

  const handlePush = (href: string) => {
    router.push(href);
  };

  const handleScroll = (id: string) => {
    const url = new URL(window.location.href);
    const lastParam = url.pathname.split("/").filter(Boolean).pop();
    if (lastParam && lastParam !== "/") {
      handlePush(`/`);
    }
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
      <Toolbar className="w-[60%] gap-5 justify-between w-full">
        <Box>
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
          <Button color="inherit" onClick={() => handlePush("/about")}>
            About Me
          </Button>
        </Box>
        <Switch
          color="default"
          classes={{
            switchBase: "text-white",
            checked: "text-white",
            track: "bg-gray-400",
          }}
          checked={darkMode}
          onChange={handleThemeChange}
        />
      </Toolbar>
    </AppBar>
  );
};

export default CustomHeader;
