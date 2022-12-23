import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import UserDetails from "../components/UserDetails";
import UserList from "../components/UserList";

const Main = () => {
  return (
    <div>
      {/* <Header></Header>
      <Outlet></Outlet> */}
      <Container>
        <Row>
          <Col lg="3">
            <UserList></UserList>
          </Col>
          <Col lg="6">
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
