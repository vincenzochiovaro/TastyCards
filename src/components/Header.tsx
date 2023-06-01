// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";
// import "../styles/header.css";

// type HeaderProps = {};

// function Header(props: HeaderProps) {
//   return (
//     <Navbar bg="white" variant="white" expand="lg" sticky="top">
//       <Container>
//         <Navbar.Brand>
//           <Link to="/" className="linkStyleHeader__css">
//             Tasty Cards
//           </Link>
//         </Navbar.Brand>
//         <Nav className="ms-auto">
//           {/* <Nav.Link style={{ fontWeight: "bold" }}>Bookmarks</Nav.Link> feature to add*/}

//           <Link to="/login" className="linkStyleHeader__css">
//             Sign In <FontAwesomeIcon icon={faSignInAlt} />
//           </Link>
//         </Nav>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../styles/header.css";
import "animate.css/animate.min.css";

type HeaderProps = {};

function Header(props: HeaderProps) {
  return (
    <Navbar
      bg="white"
      variant="light"
      expand="lg"
      sticky="top"
      className="header__container"
    >
      <Container>
        <Navbar.Brand className="header__animation">
          <Link to="/" className="header__link ">
            Tasty Cards
          </Link>
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Link to="/login" className="header__link header__signIn">
            Sign In <FontAwesomeIcon icon={faSignInAlt} />
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
