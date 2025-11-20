import { useState } from "react";
import Star from "./Star";

const containerStyle = {
  display: "flex",
};

const starStyle = {
  display: "flex",
  gap: "4px",
};

interface StarRatingProps {
  maxRating?: number;
  color?: string;
  size?: number;
  className?: string;
  messages?: string[];
  defaultRating?: number;
  onSetRating?: (rating: number) => void;
}

export default function StarRating({
  maxRating = 5,
  color = "#fcc419",
  size = 20,
  className,
  messages = [],
  defaultRating = 0,
  onSetRating,
}: StarRatingProps) {
  const [rating, setRating] = useState(1);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(rating: number) {
    setRating(rating);
    onSetRating?.(rating);
  }

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size}px`,
  };

  return (
    <div style={containerStyle} className={className}>
      <div style={starStyle}>
        {Array.from({ length: maxRating }, (_, index) => (
          <Star
            key={index}
            full={tempRating ? tempRating >= index + 1 : rating >= index + 1}
            onRate={() => handleRating(index + 1)}
            onHoverIn={() => setTempRating(index + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>{tempRating || rating || ""}</p>
    </div>
  );
}
