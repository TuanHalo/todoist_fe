import "./style.scss";
import { Slider } from "@/components";

export const Features = () => {
  const features = [
    {
      title: "Feature 1",
      desc: "Lorem ipsum dolor sit amet consectetur. A semper eget enim id. Ut vel facilisi massa lacus.",
    },
    {
      title: "Feature 2",
      desc: "Lorem ipsum dolor sit amet consectetur. A semper eget enim id. Ut vel facilisi massa lacus.",
    },
    {
      title: "Feature 3",
      desc: "Lorem ipsum dolor sit amet consectetur. A semper eget enim id. Ut vel facilisi massa lacus.",
    },
  ];

  return (
    <section className="p-home_features">
      <div className="container">
        <h3 className="p-home_features--title title">Features</h3>
        <p className="p-home_features--desc desc">
          Lorem ipsum dolor sit amet consectetur. A semper eget enim id. Ut vel
          facilisi massa lacus.
        </p>
        <img
          src="/images/features.svg"
          alt=""
          className="p-home_features--img"
        />
        <Slider count={features.length}>
          {features.map((slide, index) => (
            <li className="p-home_features--card" key={index}>
              <h4>{slide.title}</h4>
              <p>{slide.desc}</p>
            </li>
          ))}
        </Slider>
      </div>
    </section>
  );
};
