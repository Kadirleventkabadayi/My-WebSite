import { replaceHyphensWithSpaces, timeAgo } from "@/app/lib/utils";
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";

interface TopSelectedCardProps {
  cardSx?: SxProps<Theme>;
  cardType?: string;
  title: string;
  description?: string;
  updated_at: string;
  repoUrl: string;
}

function TopSelectedCard({
  cardSx,
  cardType,
  title,
  description,
  updated_at,
  repoUrl,
}: TopSelectedCardProps) {
  return (
    <Card onClick={() => window.open(repoUrl)} sx={cardSx} className="m-2">
      <CardActionArea className="flex">
        <CardMedia
          className="w-[60vw] h-[80vh] "
          component="img"
          image="/ai.png"
          alt="Levent"
        />
        <CardContent className="absolute w-full h-full p-2 flex flex-col justify-end bg-gradient-to-t from-black via-black/60 to-transparent">
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className={`bg-${
              cardType || "orange"
            } p-1 rounded-lg text-white font-bold text-sm text-center`}
          >
            {replaceHyphensWithSpaces(
              title.replace("Erciyes-", "").trim().toUpperCase()
            )}
          </Typography>
          <Typography
            variant="body2"
            className="overflow-hidden text-ellipsis text-white font-bold text-xl mt-1"
          >
            {description}
          </Typography>

          <Box className="flex items-center">
            <Avatar
              className="w-6 h-6 mr-2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ9y6VvHr6HIPDQ1K8uwe_0qDH20HqHxloTg&s"
            />
            <Typography variant="body2" className="text-white font-bold">
              Kadir Levent
            </Typography>
            <Divider
              className="mx-2 text-white border-white"
              orientation="vertical"
              flexItem
            />
            <Typography variant="body2" className="text-white font-bold">
              {timeAgo(updated_at)}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default TopSelectedCard;
