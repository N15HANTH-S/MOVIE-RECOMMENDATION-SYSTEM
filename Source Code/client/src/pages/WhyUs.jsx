import React from 'react';
import { Container} from '@mui/material';
import { Typography,Box} from '@mui/material';

const WhyUs = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ padding: '7rem', textAlign: 'justify' }}>
      <Typography variant="h2" gutterBottom>
        Why Choose Us?
      </Typography>
      <Typography variant="body1" paragraph>
        Blackswan offers a unique movie recommendation experience tailored to your tastes and preferences. Here's why you should choose us:
      </Typography>
      <ul>
        <li>
          <Typography variant="body1">
            Personalized Recommendations: Our advanced algorithm analyzes your viewing history, ratings, and preferences to suggest movies that you're likely to enjoy.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Wide Variety: Whether you're in the mood for a blockbuster hit, an indie gem, or a classic film, Blackswan has got you covered with a diverse selection of recommendations.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Seamless Experience: Our intuitive interface and user-friendly design make it easy to discover and watch movies hassle-free.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Continuous Improvement: We are committed to constantly improving our recommendation system to provide you with the best movie-watching experience possible.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Passionate Team: Blackswan is the result of a dedicated team of movie enthusiasts and tech experts who are passionate about helping you find your next favorite film.
          </Typography>
        </li>
      </ul>
      <Typography variant="body1" paragraph>
        Join Blackswan today and embark on a journey of discovering new and exciting movies tailored just for you!
      </Typography>
      </Box>
    </Container>
  );
};

export default WhyUs;
