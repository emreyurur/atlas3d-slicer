import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import arrow from "../../assets/images/website/launcharrow.png";
import { useNavigate } from "react-router-dom";

function OwnershipSection() {
  const navigate = useNavigate()
  return (
    <React.Fragment>
      <Box
        sx={{ backgroundColor: "#E63B1F", padding: { xs: '80px 0px', lg: "200px 0px" } }}
        className="ownership_section"
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: { xs: 'column', lg: 'row' }
            }}
          >
            <Box sx={{ width: { xs: '100%', lg: "50%" } }}>
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: 700,
                  fontFamily: '"Inter", sans-serif',
                  fontSize: { xs: 36, lg: 54 },
                  lineHeight: { xs: '44px', lg: "65px" },
                  maxWidth: '500px',
                  margin: { xs: 'auto', lg: 0 },
                  textAlign: { xs: 'center', lg: 'start' }
                }}
              >
                Blockchain Based Certification
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: 400,
                  fontFamily: '"Inter", sans-serif',
                  fontSize: { xs: 18, lg: 22 },
                  padding: "24px 0px 60px",
                  textAlign: { xs: 'center', lg: 'start' }
                }}
              >
                In compliance with the EU Artificial Intelligence Law, it securely records and stores data input into AI models and outputs from those models.
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: { xs: 'center', lg: 'start' } }}>
                <Button
                  sx={{
                    fontWeight: 500,
                    fontSize: 18,
                    color: "#E63B1F",
                    backgroundColor: "#fff",
                    borderRadius: "48px",
                    padding: "16px 35px",
                    textTransform: "none",
                    fontFamily: '"Inter", sans-serif',
                    "&::first-letter": {
                      textTransform: "capitalize",
                    },
                    "&:hover": {
                      background: "#fff",
                    },
                  }}
                  onClick={() => navigate("/login")}
                >
                  Launch App
                  <img
                    src={arrow}
                    alt="arrow"
                    style={{ marginLeft: "10px" }}
                  ></img>
                </Button>
              </Box>
            </Box>
            <Box sx={{ width: { xs: '100%', md: '45%' }, marginTop: { xs: '60px', lg: '0px' } }}>
            </Box>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
}

export default OwnershipSection;
