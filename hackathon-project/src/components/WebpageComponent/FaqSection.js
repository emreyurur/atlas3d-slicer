import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import plus from "../../assets/images/website/plus.png";

function FaqSection() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <React.Fragment>
      <Container maxWidth="xl">
        <Box sx={{ marginTop: {xs: '58px' , lg: "84px"} }}>
          <Typography
            sx={{
              color: "#212529",
              fontSize: 36,
              fontWeight: 700,
              fontFamily: '"Inter", sans-serif',
              lineHeight: "44px",
              textAlign: "center",
            }}
          >
            Want to know more?
          </Typography>
          <Typography
            sx={{
              color: "#212529",
              fontSize: {xs: 18 , lg :22},
              fontWeight: 400,
              fontFamily: '"Inter", sans-serif',
              lineHeight: "30px",
              marginTop: "24px",
              textAlign: "center",
            }}
          >
            Still have questions? Find the answers to our most frequently asked
            questions here.
          </Typography>
        </Box>
        <Box sx={{ margin: {xs: '39px 0px 89px' , lg: "50px 0px 165px"} }}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            sx={{
              border: expanded === "panel1" && "1px solid #E63B1F",
              borderRadius: "6px",
              marginBottom: "12px",
            }}
          >
            <AccordionSummary
              expandIcon={
                <img
                  src={plus}
                  alt="plus"
                  style={{
                    transform:
                      expanded === "panel1" ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                ></img>
              }
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  color: "#000",
                  fontSize: 18,
                  fontWeight: 600,
                  fontFamily: '"Inter", sans-serif',
                }}
              >
                What are Real-World Assets (RWAs)?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  color: "#0004F575E",
                  fontSize: 18,
                  fontWeight: 400,
                  fontFamily: '"Inter", sans-serif',
                  lineHeight: "22px",
                }}
              >
                Real-world assets (RWAs) refer to physical assets, such as real
                estate, commodities, or fine art, that have been digitized and
                represented as tokens on a blockchain. This process, known as
                tokenization, allows for fractional ownership of these assets,
                meaning that investors can buy and sell smaller portions of a
                larger asset. RWAs offer a unique opportunity to diversify
                investment portfolios and gain exposure to traditional asset
                classes in a more liquid and accessible manner.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            sx={{
              border: expanded === "panel2" && "1px solid #E63B1F",
              borderRadius: "6px",
              marginBottom: "12px",
            }}
          >
            <AccordionSummary
              expandIcon={
                <img
                  src={plus}
                  alt="plus"
                  style={{
                    transform:
                      expanded === "panel2" ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                ></img>
              }
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography
                sx={{
                  color: "#000",
                  fontSize: 18,
                  fontWeight: 600,
                  fontFamily: '"Inter", sans-serif',
                }}
              >
                How does Povego fractionalize RWAs?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  color: "#0004F575E",
                  fontSize: 18,
                  fontWeight: 400,
                  fontFamily: '"Inter", sans-serif',
                  lineHeight: "22px",
                }}
              >
                Real-world assets (RWAs) refer to physical assets, such as real
                estate, commodities, or fine art, that have been digitized and
                represented as tokens on a blockchain. This process, known as
                tokenization, allows for fractional ownership of these assets,
                meaning that investors can buy and sell smaller portions of a
                larger asset. RWAs offer a unique opportunity to diversify
                investment portfolios and gain exposure to traditional asset
                classes in a more liquid and accessible manner.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            sx={{
              border: expanded === "panel3" && "1px solid #E63B1F",
              borderRadius: "6px",
              marginBottom: "12px",
            }}
          >
            <AccordionSummary
              expandIcon={
                <img
                  src={plus}
                  alt="plus"
                  style={{
                    transform:
                      expanded === "panel3" ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                ></img>
              }
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography
                sx={{
                  color: "#000",
                  fontSize: 18,
                  fontWeight: 600,
                  fontFamily: '"Inter", sans-serif',
                }}
              >
                How do I open an account on Povego?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  color: "#0004F575E",
                  fontSize: 18,
                  fontWeight: 400,
                  fontFamily: '"Inter", sans-serif',
                  lineHeight: "22px",
                }}
              >
                Real-world assets (RWAs) refer to physical assets, such as real
                estate, commodities, or fine art, that have been digitized and
                represented as tokens on a blockchain. This process, known as
                tokenization, allows for fractional ownership of these assets,
                meaning that investors can buy and sell smaller portions of a
                larger asset. RWAs offer a unique opportunity to diversify
                investment portfolios and gain exposure to traditional asset
                classes in a more liquid and accessible manner.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
            sx={{
              border: expanded === "panel4" && "1px solid #E63B1F",
              borderRadius: "6px",
              marginBottom: "12px",
            }}
          >
            <AccordionSummary
              expandIcon={
                <img
                  src={plus}
                  alt="plus"
                  style={{
                    transform:
                      expanded === "panel4" ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                ></img>
              }
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography
                sx={{
                  color: "#000",
                  fontSize: 18,
                  fontWeight: 600,
                  fontFamily: '"Inter", sans-serif',
                }}
              >
                What types of RWAs can I invest in on Povego?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  color: "#0004F575E",
                  fontSize: 18,
                  fontWeight: 400,
                  fontFamily: '"Inter", sans-serif',
                  lineHeight: "22px",
                }}
              >
                Real-world assets (RWAs) refer to physical assets, such as real
                estate, commodities, or fine art, that have been digitized and
                represented as tokens on a blockchain. This process, known as
                tokenization, allows for fractional ownership of these assets,
                meaning that investors can buy and sell smaller portions of a
                larger asset. RWAs offer a unique opportunity to diversify
                investment portfolios and gain exposure to traditional asset
                classes in a more liquid and accessible manner.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
            sx={{
              border: expanded === "panel5" && "1px solid #E63B1F",
              borderRadius: "6px",
              marginBottom: "12px",
            }}
          >
            <AccordionSummary
              expandIcon={
                <img
                  src={plus}
                  alt="plus"
                  style={{
                    transform:
                      expanded === "panel5" ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                ></img>
              }
              aria-controls="panel5bh-content"
              id="panel5bh-header"
            >
              <Typography
                sx={{
                  color: "#000",
                  fontSize: 18,
                  fontWeight: 600,
                  fontFamily: '"Inter", sans-serif',
                }}
              >
                How can I buy and sell RWAs on Povego?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  color: "#0004F575E",
                  fontSize: 18,
                  fontWeight: 400,
                  fontFamily: '"Inter", sans-serif',
                  lineHeight: "22px",
                }}
              >
                Real-world assets (RWAs) refer to physical assets, such as real
                estate, commodities, or fine art, that have been digitized and
                represented as tokens on a blockchain. This process, known as
                tokenization, allows for fractional ownership of these assets,
                meaning that investors can buy and sell smaller portions of a
                larger asset. RWAs offer a unique opportunity to diversify
                investment portfolios and gain exposure to traditional asset
                classes in a more liquid and accessible manner.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
            sx={{
              border: expanded === "panel6" && "1px solid #E63B1F",
              borderRadius: "6px",
              marginBottom: "12px",
            }}
          >
            <AccordionSummary
              expandIcon={
                <img
                  src={plus}
                  alt="plus"
                  style={{
                    transform:
                      expanded === "panel6" ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                ></img>
              }
              aria-controls="panel6bh-content"
              id="panel6bh-header"
            >
              <Typography
                sx={{
                  color: "#000",
                  fontSize: 18,
                  fontWeight: 600,
                  fontFamily: '"Inter", sans-serif',
                }}
              >
                What are the risks associated with investing in RWAs?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  color: "#0004F575E",
                  fontSize: 18,
                  fontWeight: 400,
                  fontFamily: '"Inter", sans-serif',
                  lineHeight: "22px",
                }}
              >
                Real-world assets (RWAs) refer to physical assets, such as real
                estate, commodities, or fine art, that have been digitized and
                represented as tokens on a blockchain. This process, known as
                tokenization, allows for fractional ownership of these assets,
                meaning that investors can buy and sell smaller portions of a
                larger asset. RWAs offer a unique opportunity to diversify
                investment portfolios and gain exposure to traditional asset
                classes in a more liquid and accessible manner.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel7"}
            onChange={handleChange("panel7")}
            sx={{
              border: expanded === "panel7" && "1px solid #E63B1F",
              borderRadius: "6px",
              marginBottom: "12px",
            }}
          >
            <AccordionSummary
              expandIcon={
                <img
                  src={plus}
                  alt="plus"
                  style={{
                    transform:
                      expanded === "panel7" ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                ></img>
              }
              aria-controls="panel7bh-content"
              id="panel7bh-header"
            >
              <Typography
                sx={{
                  color: "#000",
                  fontSize: 18,
                  fontWeight: 600,
                  fontFamily: '"Inter", sans-serif',
                }}
              >
                Can I withdraw my investment from an RWA at any time?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  color: "#0004F575E",
                  fontSize: 18,
                  fontWeight: 400,
                  fontFamily: '"Inter", sans-serif',
                  lineHeight: "22px",
                }}
              >
                Real-world assets (RWAs) refer to physical assets, such as real
                estate, commodities, or fine art, that have been digitized and
                represented as tokens on a blockchain. This process, known as
                tokenization, allows for fractional ownership of these assets,
                meaning that investors can buy and sell smaller portions of a
                larger asset. RWAs offer a unique opportunity to diversify
                investment portfolios and gain exposure to traditional asset
                classes in a more liquid and accessible manner.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default FaqSection;
