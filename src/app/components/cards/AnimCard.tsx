interface AnimCardProps {
  imageSrc: string;
  position: "left" | "right";
}

const AnimCard: React.FC<AnimCardProps> = ({ imageSrc, position }) => {
  return (
    <div className={`card card-${position}`}>
      <img className="card-image" src={imageSrc} alt={`Card ${position}`} />
    </div>
  );
};

export default AnimCard;
