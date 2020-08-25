import React from "react";
import { Router } from "react-router-dom";
import Routes from "../routes/Routes";
import history from "../routes/History";
import styled from "styled-components";

const Header = styled.div`
  background-color: #282c34;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  position: fixed;
  width: 100%;
  z-index: 1;
`;

const Content = styled.div`
  padding-top: 50px;
`;

export default () => {
  return (
    <div>
      <Router history={history}>
        <Header>
          <p>This is a playground demonstrating redux-saga</p>
        </Header>
        <Content className={"App-content"}>{Routes}</Content>
      </Router>
    </div>
  );
};
