import { useState } from "react";
import { Card, CardMedia, Modal, Typography, Divider } from "@mui/material";
import { Box } from "@mui/system";
import { checkScreenSize } from "@/app/lib/utils";

interface CategoryCardProps {
  image: string;
  title: string;
  description: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  image,
  title,
  description,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card
      className={`w-[15vh] overflow-hidden ${
        checkScreenSize() && "h-[15vh] m-2"
      }`}
      sx={{ position: "relative" }}
    >
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
        className="object-cover"
        onClick={handleOpen}
      />
      <Box
        onClick={handleOpen}
        sx={{
          background: !checkScreenSize() ? "var(--cardShadow)" : "",
        }}
        className="absolute top-0 left-0 right-0 bottom-0 flex items-end justify-center p-4"
      >
        {!checkScreenSize() && (
          <>
            <Divider
              sx={{ width: "10%", borderColor: "var(--foreground)", mb: 2 }}
            />
            <Typography
              variant="h5"
              color="var(--foreground)"
              className="font-bold"
            >
              {title}
            </Typography>
            <Divider
              sx={{ width: "10%", borderColor: "var(--foreground)", mb: 2 }}
            />
          </>
        )}
      </Box>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "var(--background)",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" fontWeight="600">
            {title}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            {description}
          </Typography>
        </Box>
      </Modal>
    </Card>
  );
};

export default CategoryCard;
