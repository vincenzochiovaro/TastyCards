import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../style/header.css";

type HeaderProps = {};

function Header(props: HeaderProps) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="linkStyle">
            Tasty Cards
          </Link>
        </Navbar.Brand>
        <Nav className="ms-auto">
          {/* <Nav.Link style={{ fontWeight: "bold" }}>Bookmarks</Nav.Link> feature to add*/}

          <Link to="/login" className="linkStyle">
            Sign In <FontAwesomeIcon icon={faSignInAlt} />
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
