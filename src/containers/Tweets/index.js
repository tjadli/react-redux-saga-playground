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

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`;

export default () => {
  const tweets = useSelector((state) => state.tweets.allIds);
  const loading = useSelector((state) => state.tweetsLoading);
  return (
    <Container>
      <TweetsHeader />
      {loading ? (
        <Loader>loading....</Loader>
      ) : (
        tweets.map((id, i) => <Tweet key={i} id={id} />)
      )}
    </Container>
  );
};
