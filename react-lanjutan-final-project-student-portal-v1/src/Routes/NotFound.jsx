import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from "@chakra-ui/react";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <Box>
      <p>404 | Not Found</p>
      <Button onClick={handleGoBack} data-testid="back">
        Go Back
      </Button>
    </Box>
  );
};

export default NotFound;
