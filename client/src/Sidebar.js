import React from "react";
//import logo.svg from "./assets";
import styled from "styled-components";
import { NavLink, Link, Switch, Route } from "react-router-dom";
import { COLORS } from "./constants";

const Sidebar = () => {
  return (
    <Wrapper>
      <li>
        <NavLink to="/" exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/:profileId" exact>
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink to="/notifications" exact>
          Notifications
        </NavLink>
      </li>
      <li>
        <NavLink to="/bookmarks" exact>
          Bookmarks
        </NavLink>
      </li>
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  float: left;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 25px;
  list-style-type: none;
  width: 130px;
  position: fixed;
  z-index: 1;
  top: 50px;
  left: 50px;
  overflow-x: hidden;
  padding: 8px 10px;
`;

const NavigationLink = styled(NavLink)`
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #2196f3;
  display: block;
  &.active {
    color: ${COLORS.primary};
  }
`;

export default Sidebar;
