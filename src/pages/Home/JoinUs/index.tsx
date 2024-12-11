import { CustomLink } from "@/components";
import "./style.scss";

export const JoinUs = () => {
  return (
    <section className="p-home_joinUs">
      <div className="container">
        <h2 className="p-home_joinUs--title title">Join us today</h2>
        <CustomLink type="Button" content="Learn more" to="/" />
      </div>
    </section>
  );
};
