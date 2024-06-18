import React from "react";
import CarCards from "../../Components/CarCards";
import LocomotiveScroll from "locomotive-scroll";
import GSAPslider from "../../Components/GSAPslider";
import Services from "../../Components/AdditionalFeatures";
import ConsultationModal from "../../Components/Modals/ConsultationModal";

const Home = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="bg-white">
      <ConsultationModal />
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
