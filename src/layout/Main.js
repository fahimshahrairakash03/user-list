import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet, useLoaderData } from "react-router-dom";
import Loading from "../components/Loading";
import UserList from "../components/UserList";

const Main = () => {
  const users = useLoaderData();
  return (
    <div>
      {users ? (
        <>
          <Container>
            <Row>
              <Col lg="3">
                <UserList users={users}></UserList>
              </Col>
              <Col lg="6">
                <Outlet></Outlet>
              </Col>
            </Row>
          </Container>
        </>
      ) : (
        <>
          <Loading></Loading>
          <h3>no data to show</h3>
        </>
      )}
    </div>
  );
};

export default Main;
