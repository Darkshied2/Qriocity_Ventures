// /src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Importing the logo if it's stored locally
// You can use the import statement if you place your logo in the src directory
// import logo from '../assets/logo.png';

// Alternatively, use a URL or local public path
// const logoUrl = '/public/comlogo.png'; // Update this to your actual logo path or URL

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #282c34;
  padding: 10px 20px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
  margin-right: 20px;
`;

const Navbar = () => (
  <Nav>
    <Link to="/">
      <>
      <h1>Infinity Games</h1>
      </>
    </Link>
    <NavLinks>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/groups">Groups</NavLink>
    </NavLinks>
  </Nav>
);

export default Navbar;
