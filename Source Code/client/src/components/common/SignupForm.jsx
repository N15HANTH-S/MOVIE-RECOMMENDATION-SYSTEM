
import React from 'react';
import styled from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f0f0f0;
`;

const Card = styled.div`
  width: 900px;
  height: 500px;
  display: flex;
  background:white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  overflow: hidden;
`;

const SignInSection = styled.div`
  flex: 1;
  padding: 50px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  flex: 1;
  background: black;
  border-radius: 150px 0 0 100px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const SocialButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const SocialButton = styled.button`
  background: white;
  border: 2px solid #ccc;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 150%;
  max-width: 300px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 15px;
  background: black;
  color: white;
  cursor: pointer;
`;

const Link = styled.a`
  color: #6a11cb;
  cursor: pointer;
`;

const LoginSignUp = () => {
  return (
    <Container>
      <Card>
        <SignUpSection>
          <Title>Sign In</Title>
          <SocialButtons>
            <SocialButton><i className="fab fa-google"></i></SocialButton>
            <SocialButton><i className="fab fa-facebook-f"></i></SocialButton>
            <SocialButton><i className="fab fa-github"></i></SocialButton>
            <SocialButton><i className="fab fa-linkedin-in"></i></SocialButton>
          </SocialButtons>
          <Form>
            <label align ='center'>Or Sign Up With</label><br></br>
            <label>Enter the Email</label>
            <Input type="email" placeholder="Enter the Email" />
            <label>Enter the Password</label>
            <Input type="password" placeholder="Enter the Password" />
            <Link href="#">Have an Account?</Link>
            <br></br>
            <Button type="submit">Sign Up</Button>
          </Form>
        </SignUpSection>

        <Logo>
        <div className="Logo">
          </div>   
        </Logo>
      </Card>
    </Container>
  );
};

export default LoginSignUp;
