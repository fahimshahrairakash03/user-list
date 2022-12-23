import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import UserDetails from "../components/UserDetails";
import UserList from "../components/UserList";

const Home = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg="3">
            <UserList></UserList>
          </Col>
          <Col lg="6">
            <UserDetails></UserDetails>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
