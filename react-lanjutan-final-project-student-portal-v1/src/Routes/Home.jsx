import React from 'react';
import { Button } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <h1>Welcome to Student Portal</h1>
      <Button as={Link} to="/Student" data-testid="student-btn">
        All Student
          </Button>
        <Footer />
    </div>
  );
};

export default Home;
