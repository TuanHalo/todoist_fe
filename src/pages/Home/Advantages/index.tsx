import { CustomLink } from "@/components";
import "./style.scss";

export const Advantages = () => {
  const features = [
    {
      icon: "/images/feature1.svg",
      title: "Feature 1",
      desc: "Lorem ipsum dolor sit amet consectetur. A semper eget enim id. Ut vel facilisi massa lacus.",
      to: "/",
    },
    {
      icon: "/images/feature2.svg",
      title: "Feature 2",
      desc: "Lorem ipsum dolor sit amet consectetur. A semper eget enim id. Ut vel facilisi massa lacus.",
      to: "/",
    },
    {
      icon: "/images/feature3.svg",
      title: "Feature 3",
      desc: "Lorem ipsum dolor sit amet consectetur. A semper eget enim id. Ut vel facilisi massa lacus.",
      to: "/",
    },
  ];
  return (
    <section className="p-home_advantages">
      <div className="container">
        <h2 className="p-home_advantages--title title">Advantages</h2>
        <p className="p-home_advantages--desc desc">
          Lorem ipsum dolor sit amet consectetur. A semper eget enim id. Ut vel
          facilisi massa lacus.
        </p>
        <ul className="p-home_advantages--list">
          {features.map((feature, index) => (
            <li className="list_item" key={index}>
              <img src={feature.icon} alt="" />
              <h4>{feature.title}</h4>
              <p>{feature.desc}</p>
              <CustomLink
                type="Button"
                style="Type2"
                to={feature.to}
                content="Learn more"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
