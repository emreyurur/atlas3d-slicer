import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

function TraditionalCom() {
  return (
    <React.Fragment>
      <Box sx={{ position : 'relative'}}>
        <Box className="traditional_back">
          <Container maxWidth="xl">
            <Box
              sx={{
                maxWidth: "1400px",
                padding: {xs: '65px 0px 107px' , lg: "140px 0px"},
                margin: "auto",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#212529",
                  fontSize: {xs: 36 , lg:72},
                  fontWeight: 700,
                  fontFamily: '"Inter", sans-serif',
                  lineHeight: {xs: '44px' , lg: "87px"},
                }}
              >
                Bridge the Gap Between Traditional and Digital Assets
              </Typography>
              <Typography
                sx={{
                  color: "#212529",
                  fontSize: {xs: 18 , lg: 22},
                  fontWeight: 400,
                  fontFamily: '"Inter", sans-serif',
                  maxWidth: "1180px",
                  padding: {xs: '44px 0px 60px 0px' , lg: "54px 0px 60px 0px"},
                  margin: "auto",
                }}
              >
                Povego is more than just a marketplace. It's a gateway to a
                world of opportunities, allowing you to invest in tangible
                assets that align with your values. Our blockchain-powered
                platform ensures security, transparency, and ease of use, making
                it simple to build a diversified portfolio.
              </Typography>
              <Button
                sx={{
                  fontWeight: 500,
                  fontSize: 18,
                  color: "#fff",
                  backgroundColor: "#3A1078",
                  borderRadius: "48px",
                  padding: "16px 44px",
                  textTransform: "none",
                  margin: "auto",
                  fontFamily: '"Inter", sans-serif',
                  "&::first-letter": {
                    textTransform: "capitalize",
                  },
                  "&:hover": {
                    background: "#3A1078",
                  },
                }}
              >
                Get Started
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginLeft: "10px" }}
                >
                  <path
                    d="M1.5 6.5H11.5"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.5 1.5L11.5 6.5L6.5 11.5"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default TraditionalCom;
