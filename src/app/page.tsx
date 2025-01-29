"use client";

import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import TopArea from "./components/areas/TopArea";
import TopCategories from "./components/areas/TopCatefories";
import SocialMediaCard from "./components/cards/SocialMediaCard";
import CustomHeader from "./components/areas/CustomHeader";
import { fetchGitHubData } from "./lib/utils";
import { RepoData } from "./lib/types";

export default function Home() {
  const [data, setData] = useState<RepoData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const username = "kadirleventkabadayi";
  const url = "repos";

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
        console.log(
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
    <Box>
      <div id="top"></div>
      <CustomHeader />
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
      <Box id="SocialMedias" sx={{ bgcolor: "var(--topArea)", pb: 5 }}>
        <SocialMediaCard />
      </Box>
    </Box>
  );
}
