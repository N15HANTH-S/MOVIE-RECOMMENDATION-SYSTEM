import React from 'react';
import { Container} from '@mui/material';
import { Typography, Box } from '@mui/material';
const TermsOfUse = () => {
    return (
      <Container>
        <Box sx={{ padding: '7rem', textAlign: 'center' }}>
          <Typography variant="h2" gutterBottom>
            Terms of Use
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to Blackswan! By accessing and using our movie recommendation service, you agree to be bound by the following terms and conditions:
          </Typography>
          <Typography variant="body1" paragraph>
            <ol>
              <li>
                You must be at least 18 years old to use our service. If you are under 18, you may only use the service with the involvement of a parent or guardian.
              </li>
              <li>
                You agree to provide accurate and complete information when using our service. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer or mobile device to prevent unauthorized access to your account.
              </li>
              <li>
                You agree not to use our service for any unlawful or unauthorized purpose, including but not limited to violating any applicable laws or regulations.
              </li>
              <li>
                We reserve the right to modify, suspend, or terminate the service or your access to the service at any time without prior notice for any reason, including but not limited to violation of these terms of use.
              </li>
              <li>
                We may update these terms of use from time to time without prior notice. Your continued use of the service after any changes to these terms will constitute your acceptance of such changes.
              </li>
            </ol>
          </Typography>
          <Typography variant="body1">
            If you have any questions about these terms of use, please contact us at support@blackswan.com.
          </Typography>
        </Box>
      </Container>
    );
  };
  
  export default TermsOfUse;
  