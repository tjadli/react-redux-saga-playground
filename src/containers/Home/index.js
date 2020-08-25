import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background-color: #282c34;
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  a {
    color: white;
  }
`;

export default () => {
  return (
    <Container>
      <Link to="/tweets">Start Demo</Link>
    </Container>
  );
};
