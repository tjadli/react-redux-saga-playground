import React from "react";
import styled from "styled-components";
import { FiHeart } from "react-icons/fi";

const Box = styled.div`
  text-align: left;
  background-color: white;
  border-color: rgb(204, 214, 221);
  border-style: solid;
  width: 550px;
  border-width: 1px;
  border-radius: 15px;
  margin-bottom: 15px;
  margin-top: 15px;
`;

const Content = styled.div`
  padding: 10px 15px 5px 15px;
`;

const Header = styled.div`
  align-items: stretch;
  box-sizing: border-box;
  display: flex;
  flex-basis: auto;
  flex-direction: row;
  flex-shrink: 0;
  height: 59px;
  padding-bottom: 10px;
  position: relative;
  width: 518px;
`;

const Avatar = styled.div`
  bottom: 0px;
  display: block;
  height: 49px;
  width: 49px;
`;

const AvatarPhoto = styled.img`
  width: 100%;
  border-radius: 50%;
`;

const HeaderContent = styled.div`
  margin: 5px;
  text-align: left;
`;

const UserFullname = styled.div`
  span {
    font-size: 15px;
    font-weight: 700;
  }
`;
const Username = styled.div`
  span {
    font-size: 15px;
    font-weight: 400;
    color: rgb(101, 119, 134);
  }
`;

const Body = styled.div`
  color: rgb(20, 23, 26);
  font-size: 19px;
  font-weight: 400;
`;

const Time = styled.div`
  margin-top: 12px;
  color: rgb(101, 119, 134);
  font-size: 15px;
`;

const Footer = styled.div`
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: rgb(204, 214, 221);
  margin-top: 5px;
  padding-top: 5px;
`;

const Likes = styled.div`
  color: rgb(101, 119, 134);
  justify-content: center;
  > span {
    margin-left: 10px;
  }
`;

export default ({ user, text, likes, created_at }) => (
  <Box>
    <Content>
      <Header>
        <Avatar>
          <AvatarPhoto alt="Profile" src={user.img} />
        </Avatar>
        <HeaderContent>
          <UserFullname>
            <span>{user.name}</span>
          </UserFullname>
          <Username>
            <span>@{user.username}</span>
          </Username>
        </HeaderContent>
      </Header>
      <Body>
        <div>
          <span>{text}</span>
        </div>
        <Time>
          <span>{created_at}</span>
        </Time>
      </Body>
      <Footer>
        <Likes>
          <FiHeart />
          <span>{likes}</span>
        </Likes>
      </Footer>
    </Content>
  </Box>
);
