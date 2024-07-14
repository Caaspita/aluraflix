
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f8f8f8;
`;

const Title = styled.h1`
  font-size: 6rem;
  color: #2271D1;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  color: #555;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #2271D1;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6BD1FF;
  }
`;

const Page404 = () => {
  return (
    <Container>
      <Title>404</Title>
      <Subtitle>Page Not Found</Subtitle>
      <Button onClick={() => window.location.href = '/'}>Go to Home</Button>
    </Container>
  );
};

export default Page404;