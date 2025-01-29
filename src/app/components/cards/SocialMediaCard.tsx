import { Card, CardContent, Typography, Box } from "@mui/material";
import { LinkedIn, GitHub } from "@mui/icons-material";
import XIcon from "@mui/icons-material/X";
import SocialMediaBtn from "../buttons/SocialMediaBtn";

const SocialMediaCard = () => {
  return (
    <Card className="p-8 w-[65vw] mx-auto bg-socialMediaCard shadow-none">
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          className="font-bold text-2xl text-foreground text-center pb-8"
        >
          Social Medias
        </Typography>

        <Box className="flex gap-2 w-full justify-center pb-8">
          <SocialMediaBtn
            icon={GitHub}
            name="GitHub"
            url="https://github.com/Kadirleventkabadayi?tab=overview&from=2025-01-01&to=2025-01-29"
          />{" "}
          <SocialMediaBtn
            icon={LinkedIn}
            name="LinkedIn"
            url="https://www.linkedin.com/in/kadir-levent-kabaday%C4%B1-7b015b25a/"
          />
          <SocialMediaBtn icon={XIcon} name="X" url="https://x.com/Prelencos" />
        </Box>
      </CardContent>
    </Card>
  );
};

export default SocialMediaCard;
