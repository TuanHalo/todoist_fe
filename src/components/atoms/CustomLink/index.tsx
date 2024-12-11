import { Link } from "react-router-dom";
import "./style.scss";

type CustomLinkProps = {
  type: "Button" | "Icon" | "Link";
  style?: "Type1" | "Type2";
  to: string;
  content: string;
};

export const CustomLink = ({
  type,
  style = "Type1",
  to,
  content,
}: CustomLinkProps) => {
  return (
    <Link
      to={to}
      className={`a-customLink ${
        type === "Button" ? "button" : ""
      } ${style.toLowerCase()}`}
    >
      {type === "Icon" ? <img src={content} alt="" /> : content}
    </Link>
  );
};
