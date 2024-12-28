import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button } from "../Customs";

const Taklif: React.FC = () => {
  return (
    <div
      className="w-[843px] h-fit rounded-[24px]  flex flex-col items-center
        p-[30px] gap-[24px]  border border-solid z-10 border-1 border-[#E3E3E7]"
    >
      <div className="w-full flex justify-end">
        <Button width={"200px"} height={40}>
          <p className="text-[#fff]  text-[14px] font-[500] ">
            Yangi taklif yuborish
          </p>
        </Button>
      </div>
      <Accordion
        style={{
          background: "#F4F4F4",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <p className="text-[#161616] text-[16px] font-[600] max-[1000px]:text-[18px] max-[450px]:text-[14px]">
            About New Project
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex flex-col gap-[15px]">
            <p className="text-[#161616] text-[14px] font-[500] max-[1000px]:text-[18px] max-[450px]:text-[12px]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <div className="flex justify-end">
              <p className="text-[#161616] text-[14px] font-[500] max-[1000px]:text-[18px] max-[450px]:text-[12px]">
                12/12/2023
              </p>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          background: "#F4F4F4",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <p className="text-[#161616] text-[16px] font-[600] max-[1000px]:text-[18px] max-[450px]:text-[14px]">
            About New Project
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex flex-col gap-[15px]">
            <p className="text-[#161616] text-[14px] font-[500] max-[1000px]:text-[18px] max-[450px]:text-[12px]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <div className="flex justify-end">
              <p className="text-[#161616] text-[14px] font-[500] max-[1000px]:text-[18px] max-[450px]:text-[12px]">
                12/12/2023
              </p>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Taklif;
