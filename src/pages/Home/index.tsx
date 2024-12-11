import { AboutUs } from "./AboutUs";
import { Advantages } from "./Advantages";
import { Banner } from "./Banner";
import { Features } from "./Features";
import { JoinUs } from "./JoinUs";
import { Reviews } from "./Reviews";
import "./style.scss";

export const Home = () => {
  return (
    <div className="p-home">
      <Banner />
      <AboutUs />
      <Features />
      <Advantages />
      <Reviews />
      <JoinUs />
    </div>
  );
};
