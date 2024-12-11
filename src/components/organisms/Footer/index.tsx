import { Link } from "react-router-dom";
import "./style.scss";
import { CustomLink } from "@/components";

export const Footer = () => {
  return (
    <footer className="o-footer">
      <div className="container">
        <div className="o-footer_logo">
          <CustomLink type="Icon" to="/" content="/images/logo.svg" />
        </div>
        <ul className="o-footer_socials">
          <li className="o-footer_socials--item">
            <CustomLink type="Icon" to="/" content="/images/facebook.svg" />
          </li>
          <li className="o-footer_socials--item">
            <CustomLink type="Icon" to="/" content="/images/youtube.svg" />
          </li>
          <li className="o-footer_socials--item">
            <CustomLink type="Icon" to="/" content="/images/tiktok.svg" />
          </li>
        </ul>
        <ul className="o-footer_categories">
          <li className="o-footer_categories--item">
            <CustomLink type="Link" to="/" content="About" />
            <p>Lorem ipsum dolor sit amet consectetur. </p>
          </li>
          <li className="o-footer_categories--item">
            <CustomLink type="Link" to="/" content="About" />
            <p>Lorem ipsum dolor sit amet consectetur. </p>
          </li>
          <li className="o-footer_categories--item">
            <CustomLink type="Link" to="/" content="About" />
            <p>Lorem ipsum dolor sit amet consectetur. </p>
          </li>
          <li className="o-footer_categories--item">
            <CustomLink type="Link" to="/" content="About" />
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
