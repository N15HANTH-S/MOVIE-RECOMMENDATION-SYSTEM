import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';
import axios from 'axios';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const feedbackData = {
      name,
      email,
      message,
    };

    axios.post('http://localhost:5000/send-feedback', feedbackData)
      .then((response) => {
        console.log('SUCCESS!', response.data);
        setSubmitted(true);
      })
      .catch((error) => {
        console.error('There was an error sending the feedback!', error);
      });
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ padding: '7rem' }}>
        <Typography variant="h2" gutterBottom>
          Feedback
        </Typography>
        <Typography variant="body1" paragraph>
          We value your feedback! Please fill out the form below to let us know your thoughts, suggestions, or any issues you have encountered.
        </Typography>
        {submitted ? (
          <Typography variant="h6" color="primary">
            Thank you for your feedback!
          </Typography>
        ) : (
          <form onSubmit={handleSubmit}>
            <Box sx={{ marginBottom: '1.5rem' }}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{ marginBottom: '1rem' }}
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ marginBottom: '1rem' }}
              />
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Box>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </form>
        )}
      </Box>
    </Container>
  );
};

export default FeedbackForm;
