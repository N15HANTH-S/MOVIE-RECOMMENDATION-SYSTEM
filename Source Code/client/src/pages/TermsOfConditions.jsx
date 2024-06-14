import { Container, Typography, Box } from '@mui/material';

const TermsAndConditions = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ padding: '7rem' }}>
        <Typography variant="h2" gutterBottom>
          Terms and Conditions
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to Blackswan! These terms and conditions outline the rules and regulations for the use of our movie recommendation service.
        </Typography>
        <Typography variant="body1" paragraph>
          By accessing this service, we assume you accept these terms and conditions in full. Do not continue to use Blackswan's service if you do not accept all of the terms and conditions stated on this page.
        </Typography>
        <Typography variant="h5" gutterBottom>
          1. License
        </Typography>
        <Typography variant="body1" paragraph>
          Unless otherwise stated, Blackswan and/or its licensors own the intellectual property rights for all material on Blackswan. All intellectual property rights are reserved. You may view and/or print pages from http://localhost:300 for your own personal use subject to restrictions set in these terms and conditions.
        </Typography>
        <Typography variant="body1" paragraph>
          You must not:
          <ul>
            <li>Republish material from http://localhost:300</li>
            <li>Sell, rent or sub-license material from http://localhost:300</li>
            <li>Reproduce, duplicate or copy material from http://localhost:300</li>
            <li>Redistribute content from Blackswan (unless content is specifically made for redistribution)</li>
          </ul>
        </Typography>
        <Typography variant="h5" gutterBottom>
          2. User Comments
        </Typography>
        <Typography variant="body1" paragraph>
          Certain parts of this website offer the opportunity for users to post and exchange opinions, information, material, and data ('Comments'). Blackswan does not screen, edit, publish, or review Comments prior to their appearance on the website, and Comments do not reflect the views or opinions of Blackswan, its agents, or affiliates. Comments reflect the view and opinion of the person who posts such a view or opinion.
        </Typography>
        <Typography variant="body1" paragraph>
          Blackswan reserves the right to monitor all Comments and to remove any Comments which it considers in its absolute discretion to be inappropriate, offensive, or otherwise in breach of these Terms and Conditions.
        </Typography>
        <Typography variant="h5" gutterBottom>
          3. Disclaimer
        </Typography>
        <Typography variant="body1" paragraph>
          To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website (including, without limitation, any warranties implied by law in respect of satisfactory quality, fitness for purpose, and/or the use of reasonable care and skill).
        </Typography>
        <Typography variant="body1" paragraph>
          Nothing in this disclaimer will:
          <ul>
            <li>limit or exclude our or your liability for death or personal injury resulting from negligence;</li>
            <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
            <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
            <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
          </ul>
        </Typography>
        <Typography variant="body1" paragraph>
          The limitations and exclusions of liability set out in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer or in relation to the subject matter of this disclaimer, including liabilities arising in contract, in tort (including negligence), and for breach of statutory duty.
        </Typography>
        <Typography variant="body1" paragraph>
          To the extent that the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
        </Typography>
      </Box>
    </Container>
  );
};

export default TermsAndConditions;
