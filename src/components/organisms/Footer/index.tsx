import { Link } from "react-router-dom";
import "./style.scss";
import { IconLink } from "@/components/atoms";

export const Footer = () => {
  return (
    <footer className="o-footer">
      <div className="container">
        <div className="o-footer_logo">
          <IconLink to="/" icon="/images/logo.svg" />
        </div>
        <ul className="o-footer_socials">
          <li className="o-footer_socials--item">
            <IconLink to="/" icon="/images/facebook.svg" />
          </li>
          <li className="o-footer_socials--item">
            <IconLink to="/" icon="/images/youtube.svg" />
          </li>
          <li className="o-footer_socials--item">
            <IconLink to="/" icon="/images/tiktok.svg" />
          </li>
        </ul>
        <ul className="o-footer_categories">
          <li className="o-footer_categories--item">
            <Link to="/">About</Link>
            <p>Lorem ipsum dolor sit amet consectetur. </p>
          </li>
          <li className="o-footer_categories--item">
            <Link to="/">About</Link>
            <p>Lorem ipsum dolor sit amet consectetur. </p>
          </li>
          <li className="o-footer_categories--item">
            <Link to="/">About</Link>
            <p>Lorem ipsum dolor sit amet consectetur. </p>
          </li>
          <li className="o-footer_categories--item">
            <Link to="/">About</Link>
            <p>Lorem ipsum dolor sit amet consectetur. </p>
          </li>
        </ul>
        <p className="o-footer_copyright">
          @Lorem ipsum dolor sit amet consectetur.{" "}
        </p>
      </div>
    </footer>
  );
};
