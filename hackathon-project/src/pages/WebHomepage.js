import React from "react";
import { Box } from "@mui/material";
import Header from "../components/WebpageComponent/Header";
import HeroSection from "../components/WebpageComponent/HeroSection"
import TraditionalCom from "../components/WebpageComponent/TraditionalCom";
import InvestSection from "../components/WebpageComponent/InvestSection";
import OwnershipSection from "../components/WebpageComponent/OwnershipSection";
import FaqSection from "../components/WebpageComponent/FaqSection"

function WebHomepage() {
  return (
    <React.Fragment>
      <Box sx={{ backgroundColor: "#333" }}> {/* Header için koyu bir arka plan rengi belirleyin */}
        <Header />
      </Box>
      <Box sx={{ backgroundColor: "#3A1078" }}>
        <HeroSection />
      </Box>
      <TraditionalCom />
      <InvestSection />
      {/* <OwnershipSection /> */}
      {/* <FaqSection /> */}
    </React.Fragment>
  );
}

export default WebHomepage;
