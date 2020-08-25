import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getTweetsActionRequest } from "~actions/Tweets";
import { setSelectedTag } from "~actions/Tag";
import { TAGS } from "~utils/Constants";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Button = styled.button`
  height: 50px;
  padding: 0px 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  font-size: 16px;
  cursor: default;
  background: transparent;
  outline: none;
  transition: border-color 0.2s ease-in;
  border: none;
  border-bottom: 4px solid ${(props) => (props.selected ? "#20a1f2" : "#fff")};
  &:hover,
  &:focus,
  &:active {
    border-bottom: 4px solid ${(props) => (props.selected ? "#20a1f2" : "#eee")};
  }
`;

export default () => {
  const dispatch = useDispatch();
  const selectedTag = useSelector((state) => state.selectedTag);

  const selectTag = (tag) => {
    dispatch(setSelectedTag(tag));
  };

  useEffect(() => {
    dispatch(getTweetsActionRequest(selectedTag));
  }, [dispatch, selectedTag]);

  return (
    <Container>
      {TAGS.map(({ label, value }, i) => (
        <Button
          key={i}
          onClick={() => selectTag(value)}
          selected={value === selectedTag}
        >
          {label}
        </Button>
      ))}
    </Container>
  );
};
