import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const UserList = () => {
  const users = useLoaderData();
  console.log(users);

  return (
    <div>
      <h1 className="fw-bold my-4 text-center">Total User: {users?.length}</h1>

      {users.map((user) => (
        <div className="my-3">
          <Card className="p-2">
            <div className="d-flex justify-content-around align-items-center">
              {/* <img
                src={user.avatar}
                className="rounded-circle"
                alt="..."
                style={{ width: "50px" }}
              /> */}
              <img
                src="data:image/png;base64,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"
                className="rounded-circle"
                alt="..."
                style={{ width: "50px" }}
              />

              <p className="mt-2">{user.profile.firstName}</p>
              <Link to={`/${user.id}`}>
                <Button variant="primary">Details</Button>
              </Link>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default UserList;
