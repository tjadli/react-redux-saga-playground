import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { FiHeart } from "react-icons/fi";
import { FaRetweet } from "react-icons/fa";

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
  display: flex;
  flex-direction: row;
`;

const Likes = styled.div`
  color: rgb(101, 119, 134);
  display: flex;
  justify-content: center;
  > span {
    margin-left: 10px;
    margin-right: 15px;
  }
`;

export default ({ id }) => {
  const {
    author_id,
    text,
    created_at,
    public_metrics: { like_count, retweet_count } = {},
  } = useSelector((state) => state.tweets.entities.byId[id]);
  const user = useSelector((state) => state.users.entities.byId[author_id]);

  return (
    <Box>
      <Content>
        <Header>
          <Avatar>
            <AvatarPhoto alt="Profile" src={user.profile_image_url} />
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
            <span>
              {new Intl.DateTimeFormat("en-US", {
                hour: "numeric",
                minute: "numeric",
                year: "numeric",
                month: "long",
                day: "2-digit",
              }).format(new Date(created_at))}
            </span>
          </Time>
        </Body>
        <Footer>
          <Likes>
            <FiHeart />
            <span>{like_count}</span>
          </Likes>
          <Likes>
            <FaRetweet size={20} />
            <span>{retweet_count}</span>
          </Likes>
        </Footer>
      </Content>
    </Box>
  );
};
