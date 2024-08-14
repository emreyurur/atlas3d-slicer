import { Box, Container, Typography } from "@mui/material";
import React from "react";
import downarrow from "../../assets/images/website/downarrow.png";
import burger_icon from "../../assets/images/website/burger_icon.png";
import { useNavigate } from "react-router-dom";

function Header({ setOpenSidebar }) {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Box
        sx={{
          backgroundColor: "#3A1078",
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 0",
            }}
          >
            <Typography
              sx={{
                fontSize: "24px", // Yazı boyutunu belirleme
                fontWeight: "bold", // Kalın yazı
                color: "#fff", // Beyaz renk
                cursor: "pointer", // Tıklanabilir
              }}
              onClick={() => navigate("/")}
            >
              CertiChain
            </Typography>
            <Box sx={{ display: { xs: "block", lg: "none", fontWeight: "bold", color: "#fff" } }} onClick={() => setOpenSidebar(true)}>
              <img src={burger_icon} alt="menu icon" style={{ cursor: "pointer" }} />
            </Box>
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  alignItems: "center",
                  margin: 5, // Boşlukları sıfırlama
                  padding: 5, // Boşlukları sıfırlama
                }}
              >
                <li>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "#fff",
                      marginRight: "16px",
                      cursor: "pointer",
                    }}
                  >
                    What is CertiChain
                  </Typography>
                </li>
                <li>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "#fff",
                      margin: "0px 16px",
                      cursor: "pointer",
                    }}
                  >
                    How to use
                  </Typography>
                </li>
                <li>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "#fff",
                      margin: "0px 16px",
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    Resources
                    <img
                      src={downarrow}
                      alt="downarrow"
                      style={{ marginLeft: "20px" }}
                    />
                  </Typography>
                </li>
                <li>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "#fff",
                      marginLeft: "16px",
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    Company
                    <img
                      src={downarrow}
                      alt="downarrow"
                      style={{ marginLeft: "20px" }}
                    />
                  </Typography>
                </li>
              </ul>
            </Box>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
}

export default Header;
