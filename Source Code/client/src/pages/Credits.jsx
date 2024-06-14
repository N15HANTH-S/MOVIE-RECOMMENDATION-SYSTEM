import { Container, Typography, Box } from '@mui/material';

const Credits = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ padding: '7rem',textAlign: 'center' }}>
        <Typography variant="h2" gutterBottom>
          Credits
        </Typography>
        <Typography variant="body1" paragraph>
          The movie recommendation code was developed by TEAM-C.  
        For the purpose of Internship During May 13/05/2024 to 14/06/2024.
        </Typography>
        <Typography></Typography>
        <Typography>
        &copy; 2024 BlackSwan. All rights reserved.
        </Typography>
      </Box>
    </Container>
  );
};

export default Credits;
