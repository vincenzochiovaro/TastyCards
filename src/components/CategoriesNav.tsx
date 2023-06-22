import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import "../styles/categoriesNav.css";

const CategoriesNav = () => {
  const [expanded, setExpanded] = useState(false);
  const isLinkDisabled = true;

  const handleNavClose = () => {
    setExpanded(false);
  };
  const renderTooltip = () => {
    return <Tooltip>Coming Soon</Tooltip>;
  };

  return (
    <Navbar expand="lg" className="categories-nav">
      <Navbar.Toggle
        className="nav-toggle"
        aria-controls="basic-navbar-nav"
        onClick={() => setExpanded(!expanded)}
      >
        <FaBars className="toggle-icon" />
        <span className="toggle-label"> Categories</span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" in={expanded}>
        <Nav className="nav-links">
          <Link
            to="/recipes/Pork"
            data-testid="categoryList"
            className="category-link animated fadeInUp"
            onClick={handleNavClose}
          >
            Pork
          </Link>
          <Link
            to="/recipes/Lamb"
            data-testid="categoryList"
            className="category-link animated fadeInUp"
            onClick={handleNavClose}
          >
            Lamb
          </Link>
          <Link
            to="/recipes/Chicken"
            data-testid="categoryList"
            className="category-link animated fadeInUp"
            onClick={handleNavClose}
          >
            Chicken
          </Link>
          <Link
            to="/recipes/Beef"
            data-testid="categoryList"
            className="category-link animated fadeInUp"
            onClick={handleNavClose}
          >
            Beef
          </Link>

          {isLinkDisabled ? (
            <OverlayTrigger placement="bottom" overlay={renderTooltip()}>
              <span
                data-testid="categoryList"
                className="category-link animated fadeInUp disabled"
              >
                Vegetarian
              </span>
            </OverlayTrigger>
          ) : (
            <Link
              to={"/recipes/Vegetarian"}
              data-testid="categoryList"
              className="category-link animated fadeInUp disabled"
              onClick={handleNavClose}
            >
              Vegetarian
            </Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CategoriesNav;
