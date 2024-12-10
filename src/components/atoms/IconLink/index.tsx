import { Link } from "react-router-dom";
import "./style.scss";

type IconLinkProps = {
  to: string;
  icon: string;
};

export const IconLink = ({ to, icon }: IconLinkProps) => {
  return (
    <Link to={to} className="a-iconLink">
      <img src={icon} alt="" />
    </Link>
  );
};
