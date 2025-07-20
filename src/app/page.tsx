"use client";

import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import TopArea from "./components/areas/TopArea";
import TopCategories from "./components/areas/TopCatefories";
import { fetchGitHubData } from "./lib/utils";
import { RepoData } from "./lib/types";
import About from "./components/areas/About";
import CustomHeader from "./components/areas/CustomHeader";
import WebSkeleton from "./components/skeletons/WebSkeleton";
import CardArea from "./components/areas/CardArea";
import ReactLenis from "lenis/react";
import NextPageAnim from "./components/areas/NextPageAnim";
import Sus from "./components/Sus";

export default function Home() {
  const [data, setData] = useState<RepoData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [flipCahnged, setFlipChanged] = useState<boolean>(false);
  const [renderAfterOneSecond, setRenderAfterOneSecond] =
    useState<boolean>(false);
  const username = "kadirleventkabadayi";
  const url = "repos";

  const prevFlipRef = useRef(isFlipped);

  const handleFlipChange = (flip: boolean) => {
    setIsFlipped(flip);
    const previousFlip = prevFlipRef.current;
    if (previousFlip !== flip) {
      setTimeout(() => {
        setRenderAfterOneSecond(flip);
      }, 1000);

      setFlipChanged(true);
      setTimeout(() => {
        setFlipChanged(false);
      }, 2000);
    }
    prevFlipRef.current = flip;
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
    return (
      <>
        <Box id="top" />
        <CustomHeader
          isFlippedData={isFlipped}
          onFlipChange={handleFlipChange}
        />
        <WebSkeleton />
      </>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ReactLenis root>
      {flipCahnged && <NextPageAnim />}

      <Box id="top" />
      <CustomHeader isFlippedData={isFlipped} onFlipChange={handleFlipChange} />

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Box>
            {!renderAfterOneSecond && (
              <Box
                sx={{
                  position: renderAfterOneSecond ? "absolute" : "relative",
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
                <Box sx={{ pt: "5%", background: "var(--topArea)" }}>
                  <CardArea />
                </Box>
              </Box>
            )}

            {renderAfterOneSecond && (
              <Box
                sx={{
                  width: "100%",
                  position: !renderAfterOneSecond ? "absolute" : "relative",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "var(--categoryArea)",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <About />
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
      <Sus />
    </ReactLenis>
  );
}
