import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const AboutUs = () => {
  return (
    <Container>
      <Box sx={{ padding: '7rem', textAlign: 'center' }}>
      <Typography variant="h2" gutterBottom>
          About Us
        </Typography>
      <Typography variant="body1" paragraph>
          Welcome to Blackswan, your go-to destination for personalized movie recommendations!
          At Blackswan, we understand that finding the right movie to watch can be overwhelming with the vast number of options available. That's why we've created a recommendation system that curates a list of movies tailored to your tastes and preferences.
          Our mission is to help movie enthusiasts discover new favorites and enjoy a seamless movie-watching experience. Whether you're in the mood for a blockbuster hit, an indie gem, or a classic film, Blackswan has got you covered.
      </Typography>
      <Typography variant="body1" paragraph>
          How does it work? Our advanced algorithm analyzes your viewing history, ratings, and preferences to suggest movies that you're likely to enjoy. The more you use our system, the better our recommendations become!
          Founded in 2024, Blackswan is the result of a passionate team of movie buffs and tech enthusiasts coming together to solve a common problem. Our commitment to innovation and user satisfaction drives us to continually improve our platform and deliver the best possible experience to our users.
          Thank you for choosing Blackswan. We hope you enjoy discovering and watching movies as much as we enjoy recommending them to you.
        </Typography>
        <Typography variant="body1" paragraph>
          Happy watching!
        </Typography>
        <Typography variant="body1">
          - The Blackswan Team
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutUs;
