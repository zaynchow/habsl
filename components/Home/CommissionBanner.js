import React from "react";
import H2 from "../Typography/H2";
import Subtitle from "../Typography/Subtitle";
import SectionContainer from "../Utils/SectionContainer";
import Button from "../Button/Button";
import P from "../Typography/P";

const CommissionBanner = () => {
  return (
    <SectionContainer>
      <div>
        <H2>Upto 50% discounts in commissions</H2>
        <Subtitle>
          A step towards acknowledging the valuable contributions of our
          respected clients
        </Subtitle>
      </div>
      <div className="mt-16">
        <img className="w-1/2 inline-block" src="/CommissionImg.png" alt="" />
        <div className="w-1/2 inline-block pl-[100px]">
          <P className="text-left">
            Our structured reward policy is to motivate and encourage clients to
            invest in the capital market. Any client is eligible to get a
            commission discount on their trade volume after meeting some
            eligibility criteria which enables them to maximize their return on
            investment.
          </P>
          <Button bgColor="bg-yellow" link="/" className="mt-6" arrow>
            Contact Us To Enroll
          </Button>
        </div>
      </div>
    </SectionContainer>
  );
};

export default CommissionBanner;
