import { Box, Typography } from "@mui/material";
import TopSelectedCard from "../cards/TopSelectedCard";
import { checkScreenSize, getColorByString } from "@/app/lib/utils";
import { RepoData } from "@/app/lib/types";
import { imgList } from "@/app/lib/consts";
import MobileSelectedCard from "../cards/MobileSelectedCard";

interface TopAreaProps {
  id: string;
  repoData: RepoData[];
}

function TopArea({ id, repoData }: TopAreaProps) {
  const erciyesAIContentCreator = repoData?.find(
    (item: RepoData) => item.name === "Erciyes-AI-Content-Creator"
  );

  const otherRepoData = repoData.filter(
    (item: RepoData) =>
      item.name === "admin-dashboard" ||
      item.name == "My-WebSite" ||
      item.name == "my-library"
  );
  return (
    <Box id={id} className="flex flex-col items-center bg-topArea pb-20 ">
      <Typography
        className="pb-10 font-bold text-foreground text-center pt-10"
        variant={checkScreenSize() ? "h4" : "h3"}
      >
        Top Projects
      </Typography>

      <Box
        className={`flex items-center justify-center gap-2 ${
          checkScreenSize() && "flex-col"
        }`}
      >
        {checkScreenSize() ? (
          <MobileSelectedCard
            title={erciyesAIContentCreator?.name || ""}
            cardType={getColorByString(erciyesAIContentCreator?.name || "")}
            description={erciyesAIContentCreator?.name || ""}
            updated_at={erciyesAIContentCreator?.updated_at || ""}
            repoUrl={erciyesAIContentCreator?.html_url || ""}
            imgUrl={"/ai.png"}
          />
        ) : (
          <TopSelectedCard
            title={erciyesAIContentCreator?.name || ""}
            cardType={getColorByString(erciyesAIContentCreator?.name || "")}
            description={erciyesAIContentCreator?.name}
            updated_at={erciyesAIContentCreator?.updated_at || ""}
            repoUrl={erciyesAIContentCreator?.html_url || ""}
          />
        )}

        <Box
          className={`flex flex-col justify-between${
            checkScreenSize() ? "" : "h-[80vh]"
          }  `}
        >
          {otherRepoData.map((item, itemIndex) => (
            <MobileSelectedCard
              title={item.name}
              cardType={getColorByString(item.name)}
              key={item.name}
              description={item.name}
              updated_at={item.updated_at}
              repoUrl={item.html_url}
              imgUrl={imgList[itemIndex]}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default TopArea;
