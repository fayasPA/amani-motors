import React from "react";
import { SwipeCarousel } from "../../Components/Carousel";
import CarCards from "../../Components/CarCards";
import LocomotiveScroll from "locomotive-scroll";
import GSAPslider from "../../Components/GSAPslider";
import Modal from "../../Components/Modals/Modal";
import Services from "../../Components/AdditionalFeatures";

const Home = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="">
      <GSAPslider />

      <div className="flex-1 bg-white">
        <CarCards />
      </div>
      <Services />

      {/* <GradientButton /> */}
    </div>
  );
};

export default Home;
