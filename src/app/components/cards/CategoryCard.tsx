import { useState } from "react";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";

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
    <Box className="w-[15vw] overflow-hidden bg-white rounded-lg select-none">
      <div
        className="relative cursor-pointer bg-on-background rounded-lg"
        onClick={handleOpen}
      >
        <img className="h-[140] w-full object-cover" src={image} alt={title} />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black via-black/64 to-transparent flex items-end justify-center p-4">
          <div className="w-[10%] border-white border mb-4 mx-2"></div>
          <h5 className="text-white text-xl font-bold select-none">{title}</h5>
          <div className="w-[10%] border-white border mb-4 mx-2"></div>
        </div>
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] bg-background shadow-lg p-4 rounded-lg">
          <h6 className="text-lg font-semibold">{title}</h6>
          <p className="mt-2">{description}</p>
        </Box>
      </Modal>
    </Box>
  );
};

export default CategoryCard;
