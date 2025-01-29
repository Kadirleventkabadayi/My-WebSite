"use client";

import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import TopArea from "./components/areas/TopArea";
import TopCategories from "./components/areas/TopCatefories";
import { fetchGitHubData } from "./lib/utils";
import { RepoData } from "./lib/types";
import About from "./components/areas/About";
import CustomHeader from "./components/areas/CustomHeader";

export default function Home() {
  const [data, setData] = useState<RepoData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const username = "kadirleventkabadayi";
  const url = "repos";

  const handleFlipChange = (flip: boolean) => {
    setIsFlipped(flip); // isFlipped değerini değiştiriyoruz
  };

  useEffect(() => {
    const getGitHubData = async () => {
      try {
        const result = await fetchGitHubData(`users/${username}/${url}`);
        setData(
          result.map((repo: RepoData) => ({
            name: repo.name,
            description: repo.description,
            html_url: repo.html_url,
            updated_at: repo.updated_at,
          }))
        );
      } catch (error) {
        if (error instanceof Error) {
          setError("Error fetching GitHub data: " + error.message);
        } else {
          setError("Error fetching GitHub data");
        }
      } finally {
        setLoading(false);
      }
    };

    getGitHubData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Box id="top" />
      <CustomHeader
        isFlippedData={isFlipped}
        onFlipChange={handleFlipChange}
      />{" "}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            width: "100%",
            perspective: "1000px",
          }}
        >
          <Box
            sx={{
              perspective: "1000px",
              transformStyle: "preserve-3d",
              transform: isFlipped ? "rotateY(180deg)" : "none",
              transition: "transform 0.5s",
            }}
          >
            {!isFlipped && (
              <Box
                sx={{
                  position: isFlipped ? "absolute" : "relative",
                  backfaceVisibility: "hidden",
                }}
              >
                <TopArea id="TopProjects" repoData={data} />
                <Box
                  id="Techs"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    bgcolor: "var(--categoryArea)",
                  }}
                >
                  <TopCategories />
                </Box>
              </Box>
            )}

            {isFlipped && (
              <Box
                sx={{
                  width: "100%",
                  position: "realtive",
                  transform: "rotateY(180deg)",
                }}
              >
                <Box>
                  <About />
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}
