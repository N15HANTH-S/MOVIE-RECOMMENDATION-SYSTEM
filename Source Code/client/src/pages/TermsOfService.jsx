import React from 'react';
import { Container} from '@mui/material';
import { Typography, Box } from '@mui/material';

const TermsOfService = () => {
    return (
      <Container>
        <Box sx={{ padding: '7rem', textAlign: 'center' }}>
          <Typography variant="h2" gutterBottom>
            Terms of Service
          </Typography>
          <Typography variant="body1" paragraph>
            By using our movie recommendation code, you agree to abide by the following terms and conditions:
          </Typography>
          <Typography variant="body1" paragraph>
            <ol>
              <li>
                The movie recommendations provided by this code are generated algorithmically and may not always be accurate or suitable for your preferences. We do not guarantee the accuracy or suitability of the recommendations.
              </li>
              <li>
                This code may collect and process data about your movie preferences and usage patterns to improve the recommendation algorithm. By using this code, you consent to the collection and processing of such data.
              </li>
              <li>
                You agree not to misuse or abuse the movie recommendation code for any illegal or unethical purposes, including but not limited to spamming, harassment, or distributing inappropriate content.
              </li>
              <li>
                We reserve the right to modify or discontinue the movie recommendation code at any time without prior notice. We are not liable for any loss or inconvenience caused by such modifications or discontinuations.
              </li>
              <li>
                Your use of this code is at your own risk. We disclaim any warranties, express or implied, regarding the performance, reliability, or suitability of the movie recommendations provided by this code.
              </li>
            </ol>
          </Typography>
          <Typography variant="body1">
            By using this code, you acknowledge that you have read, understood, and agree to be bound by these terms of service. If you do not agree to these terms, please refrain from using the movie recommendation code.
          </Typography>
        </Box>
      </Container>
    );
  };
  
  export default TermsOfService;
  