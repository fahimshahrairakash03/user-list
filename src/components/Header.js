import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>This is header</h1>
      <Link to="/userlist">Users</Link>
    </div>
  );
};

export default Header;
