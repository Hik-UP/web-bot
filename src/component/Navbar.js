// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navvbar from 'react-bootstrap/Navbar';

// function Navbar() {
//   return (
//     <>
//       <Navvbar bg="primary" variant="dark">
//         <Container>
//           <Navvbar.Brand href="#home">Navvbar</Navvbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//           </Nav>
//         </Container>
//       </Navvbar>
//     </>
//   );
// }

// export {Navbar};

import React, { useState } from "react";
import '../pages/gradiant.css';
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
//   Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from "./Navbar.style";
// import LogoImg from "../assets/logo.png";
// <Logo src={LogoImg}></Logo>

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar} style={{position:"fixed", width:"100%", backgroundColor:"#04D300", zIndex:"10"}}>
      <NavbarInnerContainer>
        {/* <LeftContainer> */}
          <NavbarLinkContainer>
            <NavbarLink className="funButton" to="/" href="logo.svg"> Home</NavbarLink>
            <NavbarLink className="funButton" to="/login"> Login</NavbarLink>
            <NavbarLink className="funButton" to="/register"> Register</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        {/* </LeftContainer> */}
        {/* <RightContainer>

        </RightContainer> */}
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended className="funButton" to="/"> Home</NavbarLinkExtended>
          <NavbarLinkExtended className="funButton" to="/login"> Login</NavbarLinkExtended>
          <NavbarLinkExtended className="funButton" to="/register"> Register</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export  {Navbar};