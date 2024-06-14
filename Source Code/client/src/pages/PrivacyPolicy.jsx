import { Container, Typography, Box } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ padding: '7rem', textAlign:'center' }}>
        <Typography variant="h2" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography variant="body1" paragraph>
          We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
          We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
        </Typography>
        
        <Typography variant="body1" paragraph>
          We don’t share any personally identifying information publicly or with third-parties, except when required to by law.
          Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
          You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.
        </Typography>
        <Typography variant="body1" paragraph>
          Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;