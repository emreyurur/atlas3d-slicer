import React, { useEffect, useState } from "react";
import Header from "../components/WebpageComponent/Header";
// import Footer from "../components/WebpageComponent/Footer";
import { Box, Button, Typography } from "@mui/material";
import sidebararrow from "../assets/images/website/sidebararrow.svg";
import { Link, useNavigate } from "react-router-dom";

function WebLayout({ children }) {
  const [openSidebar, setOpenSidebar] = useState("");
  useEffect(() => {
    if (openSidebar) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }
  }, [openSidebar]);

  const history = useNavigate();
  return (
    <Box sx={{ position: "relative" }}>
      <Header setOpenSidebar={setOpenSidebar} />
      <div>{children}</div>
      {/* <Footer /> */}

      {/* sidebar */}

      <Box
        className={`sidebar ${openSidebar ? "open" : ""}`}
        sx={{ backgroundColor: "#fff" }}
      >
        <Box sx={{ padding: "20px", textAlign: "center" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              marginBottom: "10px",
            }}
          >
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setOpenSidebar(false)}
            >
              <path
                d="M1.9975 0L0 1.9975L6.48833 8.5L0 15.0025L1.9975 17L10.4975 8.5L1.9975 0Z"
                fill="#e63b1f"
              />
              <path
                d="M15.4986 17L17.4961 15.0025L11.0078 8.5L17.4961 1.9975L15.4986 -1.74627e-07L6.99859 8.5L15.4986 17Z"
                fill="#e63b1f"
              />
            </svg>
          </Box>
          <Link
                style={{
                  fontSize: "20px",
                  fontWeight: 500,
                  color: "#e63b1f",
                  cursor: "pointer",
                  margin: "15px 0px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none"
                }}
                to={'/what'}
                onClick={() => {
                  setOpenSidebar(false);
                  history("/what");
                }}
              >
                Povego nedir
          </Link>
          <Link
                style={{
                  fontSize: "20px",
                  fontWeight: 500,
                  color: "#e63b1f",
                  cursor: "pointer",
                  margin: "15px 0px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none"
                }}
                to={'/how'}
                onClick={() => {
                  setOpenSidebar(false);
                  history("/how");
                }}
              >
                Nasıl çalışır
          </Link>
          <Link
                style={{
                  fontSize: "20px",
                  fontWeight: 500,
                  color: "#e63b1f",
                  cursor: "pointer",
                  margin: "15px 0px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none"
                }}
                to={'/products'}
                onClick={() => {
                  setOpenSidebar(false);
                  history("/products");
                }}
              >
                Ürünler
          </Link>
          <Button
            sx={{
              fontWeight: 500,
              fontSize: 18,
              color: "#fff",
              backgroundColor: "#E63B1F",
              borderRadius: "48px",
              padding: "10px 38px",
              marginTop: "20px",
              textTransform: "none",
              fontFamily: '"Inter", sans-serif',
              "&::first-letter": {
                textTransform: "capitalize",
              },
              "&:hover": {
                background: "#E63B1F",
              },
            }}
            onClick={() => {
              setOpenSidebar(false);
              history("/login");
            }}

            
          >
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default WebLayout;