import React from "react";

import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      {/* ==== header top ==== */}
      <div className="header_top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header_top_left">
                <span>Need Help?</span>
                <span className="header_top_help">
                  <i class="ri-phone-fill"></i> +55 11 97438-2509
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6">
              <div className="header_top_right">
                <Link to="#" className="d-flex align-items-center gap-1">
                  <i class="ri-login-circle-line"></i> Login
                </Link>

                <Link to="#" className="d-flex align-items-center gap-1">
                  <i class="ri-user-line"></i> Register
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
};

export default Header;
