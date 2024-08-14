import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import certichain_info from '../../assets/images/certichain_info.jpeg'

function InvestSection() {
  return (
    <React.Fragment>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between", 
             padding: {xs: '0px 0px 107px' , lg: "0px 0px 140px"},
             flexDirection : {xs: 'column' , lg: 'row'}
          }}
        >
         <Box sx={{ width : {xs: '100%' ,lg: '40%' , xl: '50%'}}}>
          <img src={certichain_info} alt="certichain_info" style={{ width : '100%'}}></img>
         </Box>
          <Box
            sx={{
              maxWidth: "650px",
              marginLEft: "auto",
            }}
          >
            <Typography
              sx={{
                color: "#212529",
                fontSize: {xs: 36 , lg: 72},
                fontWeight: 700,
                fontFamily: '"Inter", sans-serif',
                lineHeight: {xs: '44px' , lg:"87px"},
                marginTop : { xs: '60px' , lg: '0px'},
                textAlign : {xs: 'center' , lg: 'start'}
              }}
            >
              Token Spending Tracking
            </Typography>
            <Typography
              sx={{
                color: "#212529",
                fontSize: {xs: 18 , lg:22},
                fontWeight: 400,
                fontFamily: '"Inter", sans-serif',
                maxWidth: "1180px",
                padding: "24px 0px 60px 0px",
                margin: "auto",
                textAlign : {xs: 'center' , lg: 'start'}
              }}
            >
              It allows developers to track and analyze in detail the token spending of users using the platform.
            </Typography>
        <Box sx={{ display : 'flex' , justifyContent : {xs: 'center' , lg: 'start'}}}>
            <Button
              sx={{
                fontWeight: 500,
                fontSize: 18,
                color: "#fff",
                backgroundColor: "#3A1078",
                borderRadius: "48px",
                padding: "16px 45px",
                textTransform: "none",
                
                fontFamily: '"Inter", sans-serif',
                "&::first-letter": {
                  textTransform: "capitalize",
                },
                "&:hover": {
                  background: "#3A1078",
                },
              }}
            >
              Learn More
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
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default InvestSection;
