import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import arrow from '../../assets/images/website/launcharrow.png'
import dashboard from '../../assets/images/dashboard.png'
import { useNavigate } from 'react-router-dom'

function HeroSection() {
  const navigate = useNavigate()
  return (
    <React.Fragment>
      <Box className='website_hero'>
        <Container maxWidth='xl'>
          <Box
            sx={{
              padding: { xs: '66px 0px 80px', lg: '80px 0px 140px' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: { xs: 'column', lg: 'row' },
            }}
          >
            <Box sx={{ width: { xs: '100%', lg: '50%', xl: '40%' } }}>
              <Typography
                sx={{
                  color: '#fff',
                  fontWeight: 700,
                  fontFamily: '"Inter", sans-serif',
                  fontSize: { xs: 36, lg: 54 },
                  lineHeight: { xs: '44px', lg: '65px' },
                  textAlign: { xs: 'center', lg: 'start' },
                }}
              >
                Blockchain Based Verification
                <br /> for AI Regulations
              </Typography>
              <Typography
                sx={{
                  textAlign: { xs: 'center', lg: 'start' },
                  color: '#fff',
                  fontWeight: 400,
                  fontFamily: '"Inter", sans-serif',
                  fontSize: { xs: 18, lg: 22 },
                  padding: { xs: '24px 0px 40px', lg: '24px 0px 60px' },
                }}
              >
                CertiChain is a blockchain-based certification platform for AI developers, enabling them to track input/output and track user spending in compliance with the EU Artificial Intelligence Law.
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: { xs: 'center', lg: 'start' } }}>
                <Button
                  sx={{
                    fontWeight: 500,
                    fontSize: 18,
                    color: "#3A1078",
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
                </Button>
              </Box>
            </Box>
            <Box sx={{ width: { xs: '100%', lg: '50% ', xl: '55%' } }}>
              <Box
                sx={{
                  backgroundColor: '#C4DEFD',
                  width: '100%',
                  height: { xs: '231px', lg: '550px' },
                  marginTop: { xs: '44px', lg: '0px' },
                  borderRadius: '10px',
                  objectFit: 'contain',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={dashboard}
                  alt="dashboard"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Görseli tam alanı kaplayacak şekilde yerleştiriyoruz
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  )
}

export default HeroSection;
