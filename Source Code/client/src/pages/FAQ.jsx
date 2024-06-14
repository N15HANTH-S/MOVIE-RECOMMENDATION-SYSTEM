import React from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ padding: '7rem' }}>
        <Typography variant="h2" gutterBottom>
          Frequently Asked Questions (FAQ)
        </Typography>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5">
              What is Blackswan?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              Blackswan is a personalized movie recommendation service that helps you discover movies tailored to your tastes and preferences.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5">
              How does Blackswan work?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              Our advanced algorithm analyzes your viewing history, ratings, and preferences to suggest movies that you're likely to enjoy. The more you use our service, the better our recommendations become.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5">
              Is Blackswan free to use?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              Yes, Blackswan offers a free tier with access to basic features. We also offer premium subscriptions that provide additional benefits and enhanced features.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5">
              How do I create an account?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              You can create an account by clicking the "Sign Up" button on our homepage and filling out the required information. You can also sign up using your Google or Facebook account.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5">
              How do I reset my password?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              If you've forgotten your password, click the "Forgot Password" link on the login page. Enter your email address, and we'll send you instructions on how to reset your password.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5">
              How can I contact support?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              If you need assistance, you can reach our support team via email at support@blackswan.com or by phone at +1 (123) 456-7890. Our support hours are 9 AM to 6 PM, Monday to Friday.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5">
              Where can I find more information about your privacy policy?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              You can read our full privacy policy by clicking <a href="/privacy-policy">here</a>.
            </Typography>
          </AccordionDetails>
        </Accordion>
        
      </Box>
    </Container>
  );
};

export default FAQ;
