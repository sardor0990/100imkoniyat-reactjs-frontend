import React from "react";
import { HeadSection } from "./HeadSection";
import OpportunitySection from "./OpportunitySection";
import Partner from "./Partner";
import Footer from "../Footer";
const Home: React.FC = () => {
  return (
    <div className="w-full flex flex-col ">
      <HeadSection />
     <OpportunitySection />
       {/* <Partner /> */}
      <Footer />
    </div>
  );
};
export default Home;
