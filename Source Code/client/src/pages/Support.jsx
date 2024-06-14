import { Container, Typography, Box } from '@mui/material';

const Support = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ padding: '7rem'}}>
        <Typography variant="h2" gutterBottom>
          Support
        </Typography>
        <Typography variant="body1" paragraph>
          We're here to help! If you have any questions, issues, or feedback, please don't hesitate to reach out to us. Our support team is dedicated to providing you with the best possible experience.
        </Typography>
        <Typography variant="body1" paragraph>
          You can contact us through the following channels:
        </Typography>
        <Typography variant="body1" paragraph>
          <ul>
            <li>Email: akshayajanarthanreddy@gmail.com</li>
            <li>Phone: +91 9345983566</li>
            <li>Address: Not Applicable</li>
          </ul>
        </Typography>
        <Typography variant="body1" paragraph>
          For frequently asked questions, visit our <a href="/faq">FAQ page</a>. You might find the answers you're looking for there!
        </Typography>
        <Typography variant="body1" paragraph>
          We value your feedback and strive to improve our service based on your input. Please let us know how we can better serve you.
        </Typography>
        <Typography variant="body1">
          Thank you for choosing Blackswan!
        </Typography>
      </Box>
    </Container>
  );
};

export default Support;
