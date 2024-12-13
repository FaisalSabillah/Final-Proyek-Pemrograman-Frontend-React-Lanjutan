import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, Link as ChakraLink } from "@chakra-ui/react";
import "./navbar.css"

const NavBar = () => {
  return (
    <nav>
      <List display="flex">
        <ListItem data-testid="student-btn" mr="4">
          <ChakraLink as={Link} to="/" data-testid="home-page">
            Student Portal
          </ChakraLink>
        </ListItem>
        <ListItem mr="4">
          <ChakraLink as={Link} to="/student" data-testid="student-page">
            All Student
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ChakraLink as={Link} to="/add" data-testid="add-page">
            Add Student
          </ChakraLink>
        </ListItem>
      </List>
    </nav>
  );
};

export default NavBar;
