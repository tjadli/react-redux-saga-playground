import React from "react";
import { useSelector } from "react-redux";
import Tweet from "~components/Tweet";

import styled from "styled-components";
import TweetsHeader from "./TweetsHeader";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default () => {
  const tweets = useSelector((state) => state.tweets);
  return (
    <Container>
      <TweetsHeader />
      {tweets.map((tweet, i) => (
        <Tweet key={i} {...tweet} />
      ))}
    </Container>
  );
};
