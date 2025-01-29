import { RepoData } from "./types";

function getColorByString(input: string): string {
  switch (input.toLowerCase()) {
    case "admin-dashboard":
      return "#08a8f0";
    case "myblog":
      return "#ff4400";
    case "my-library":
      return "purple";
    default:
      return "orange";
  }
}

async function fetchGitHubData(endpoint: string): Promise<RepoData[]> {
  const response = await fetch(`https://api.github.com/${endpoint}`);

  if (!response.ok) {
    throw new Error(`GitHub API request failed: ${response.statusText}`);
  }

  return response.json();
}

function timeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) return `${interval} years ago`;

  interval = Math.floor(seconds / 2592000);
  if (interval > 1) return `${interval} months ago`;

  interval = Math.floor(seconds / 86400);
  if (interval > 1) return `${interval} days ago`;

  interval = Math.floor(seconds / 3600);
  if (interval > 1) return `${interval} hours ago`;

  interval = Math.floor(seconds / 60);
  if (interval > 1) return `${interval} minutes ago`;

  return `${Math.floor(seconds)} seconds ago`;
}

const replaceHyphensWithSpaces = (input: string): string => {
  return input.replace(/-/g, " ");
};

export { getColorByString, fetchGitHubData, timeAgo, replaceHyphensWithSpaces };
