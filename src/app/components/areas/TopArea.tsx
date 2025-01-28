import { Box } from "@mui/material";
import TopSelectedCard from "../cards/TopSelectedCard";
import { getColorByString } from "@/app/lib/utils";
import SelectedCard from "../cards/SelectedCard";
import { RepoData } from "@/app/lib/types";

interface TopAreaProps {
  id: string;
  repoData: RepoData[];
}

function TopArea({ id, repoData }: TopAreaProps) {
  const erciyesAIContentCreator = repoData?.find(
    (item: RepoData) => item.name === "Erciyes-AI-Content-Creator"
  );

  const otherRepoData = repoData?.filter(
    (item: RepoData) => item.name !== "Erciyes-AI-Content-Creator"
  );
  return (
    <Box
      id={id}
      sx={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        gap: 2,
        backgroundColor: "var(--topArea)",
        height: "95vh",
      }}
    >
      <TopSelectedCard
        title={erciyesAIContentCreator?.name || ""}
        cardType={getColorByString(erciyesAIContentCreator?.name || "")}
        description={erciyesAIContentCreator?.name}
        updated_at={erciyesAIContentCreator?.updated_at || ""}
        repoUrl={erciyesAIContentCreator?.html_url || ""}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          height: "80vh",
        }}
      >
        {otherRepoData
          .filter((_, index) => [0, 4, 3].includes(index))
          .map((item) => (
            <SelectedCard
              title={item.name}
              cardType={getColorByString(item.name)}
              key={item.name}
              desciption={item.name}
              updated_at={item.updated_at}
              repoUrl={item.html_url}
            />
          ))}
      </Box>
    </Box>
  );
}

export default TopArea;
