"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Box, Switch } from "@mui/material";
import { useEffect, useState } from "react";
import { checkScreenSize } from "@/app/lib/utils";

interface CustomHeaderProps {
  isFlippedData: boolean;
  onFlipChange: (flip: boolean) => void;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
  isFlippedData,
  onFlipChange,
}) => {
  const [darkMode, setDarkMode] = useState(false);
  const [, setIsFlipped] = useState(isFlippedData);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleFlip = (flip: boolean) => {
    setIsFlipped(flip);
    onFlipChange(flip);
  };

  const handleClick = (id: string, flip: boolean) => {
    handleScroll(id);
    handleFlip(flip);
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
    <AppBar position="sticky" className="bg-royalblue flex items-start z-10">
      <Toolbar className="w-[60%] gap-5 justify-between w-full">
        <Box>
          {checkScreenSize() ? (
            <>
              <Button
                className="text-lg font-bold border-b-2 border-white rounded-none"
                color="inherit"
                onClick={() => handleClick("top", false)}
              >
                Kadir Levent Kabadayı
              </Button>

              <Button
                color="inherit"
                onClick={() => {
                  handleClick("top", true);
                }}
              >
                About Me
              </Button>
            </>
          ) : (
            <>
              <Button
                className="text-lg font-bold border-b-2 border-white rounded-none"
                color="inherit"
                onClick={() => handleClick("top", false)}
              >
                Kadir Levent Kabadayı
              </Button>
              <Button
                color="inherit"
                onClick={() => handleClick("TopProjects", false)}
              >
                Top Projects
              </Button>
              <Button
                color="inherit"
                onClick={() => handleClick("Techs", false)}
              >
                Technologies and Frameworks
              </Button>
              <Button
                color="inherit"
                onClick={() => {
                  handleClick("top", true);
                }}
              >
                About Me
              </Button>
            </>
          )}
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
