import { Paper, Stack } from '@mui/material';
import React from 'react';
import Container from './Container';
import Logo from './Logo';
import './footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <Paper square={true} sx={{ backgroundImage: "unset", padding: "2rem" }}>
        <Stack
          alignItems="center"
          justifyContent="space-between"
          direction={{ xs: "column", md: "row" }}
          sx={{ height: "max-content" }}
        >
          <Logo />
          <footer className="top">
            <div className="links">
              <div>
                <h2>Explore</h2>
                <Link to="/about">About Us</Link>
                <Link to="/faq">FAQ</Link>
                <Link to="/terms-of-service">Terms of Service</Link>
                <Link to="/terms-of-use">Terms of use</Link>
              </div>
              <div>
                <h2>Dive Into</h2>
                <a href="/why-us">Why Us</a>
                <Link to="/meet-us">Meet Us</Link>
                <Link to="/credits">Credits</Link>
                <Link to="/license">License</Link>
              </div>
              <div>
                <h2>Contents</h2>
                <Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/support">Support</Link>
                <Link to="/help">Help</Link>
                <Link to="/terms-of-conditions">Terms Of Conditions</Link>
              </div>
              <div>
                <h2>Contact Us</h2>
                <Link to="#">Email</Link>
                <Link to="#">Instagram</Link>
                <Link to="#">Facebook</Link>
                <Link to="#">Whatsapp</Link>
              </div>
            </div>
          </footer>
        </Stack>
      </Paper>
      <div className="copyright">
        &copy; 2024 Blackswan. All rights reserved.
      </div>
    </Container>
  );
};

export default Footer;
