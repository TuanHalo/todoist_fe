import { Slider } from "@/components";
import "./style.scss";

export const Reviews = () => {
  const reviews = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur. A semper eget enim id. Ut vel facilisi massa lacus.",
      avatar: "/images/avatar.png",
      role: "Designer",
      name: "Jord Reff",
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur. A semper eget enim id. Ut vel facilisi massa lacus.",
      avatar: "/images/avatar.png",
      role: "Developer",
      name: "Jord Reff",
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur. A semper eget enim id. Ut vel facilisi massa lacus.",
      avatar: "/images/avatar.png",
      role: "Tester",
      name: "Jord Reff",
    },
  ];
  return (
    <section className="p-home_reviews">
      <div className="container">
        <h2 className="p-home_reviews--title title">Reviews</h2>
        <p className="p-home_reviews--desc desc">
          Lorem ipsum dolor sit amet consectetur. A semper eget enim id. Ut vel
          facilisi massa lacus.
        </p>

        <Slider count={reviews.length}>
          {reviews.map((review, index) => (
            <li className="p-home_reviews--card" key={index}>
              <p className="card_desc">{review.desc}</p>
              <div className="card_info">
                <img src={review.avatar} alt="" />
                <h6>{review.role}</h6>
                <h5>{review.name}</h5>
              </div>
            </li>
          ))}
        </Slider>
      </div>
    </section>
  );
};
