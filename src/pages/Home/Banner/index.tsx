import { CustomLink } from "@/components";
import "./style.scss";

export const Banner = () => {
  return (
    <section className="p-home_banner">
      <div className="container">
        <h2 className="p-home_banner--title">
          Lorem ipsum dolor sit amet consectetur.
        </h2>
        <p className="p-home_banner--desc">
          Lorem ipsum dolor sit amet consectetur. A semper eget enim id. Ut vel
          facilisi massa lacus.
        </p>
        <CustomLink type="Button" to="/" content="Learn more" />
      </div>
    </section>
  );
};
