import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./header.scss";

const Header = () => {
  return (
    <div className="bg-dark">
      <Container>
        <Row>
          <Col>
            <div className="site-header">
              <h1 className="site-branding">Sike!!</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
