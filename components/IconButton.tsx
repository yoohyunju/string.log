import Icon from "./Icon";

type IconButtonProps = {
  name: "moon" | "tag" | "search";
  onClick?: () => void;
  size?: number;
  color?: string;
  className?: string;
};

const IconButton = ({
  name,
  onClick,
  size = 24,
  color = "currentColor",
  className = "",
}: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`icon-button ${className}`}
      style={{ width: size, height: size }}
    >
      <Icon name={name} size={size} color={color} />
    </button>
  );
};

export default IconButton;
