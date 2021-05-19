import React from "react";
import { ReactNode } from "react";

import { Text } from "react-native";
import streamAvatar from "../../images/stream_avatar.png";

import {
  List,
  ChannelItem,
  ChannelContainer,
  LeftSide,
  Avatar,
  Column,
  Username,
  Info,
  RightSide,
  WhiteCircle,
  SpaceBottom,
} from "./styles";

interface ChannelListProps {
  children: ReactNode;
}

function ChannelList({ children }: ChannelListProps) {
  const ChannelItem = () => (
    <ChannelContainer>
      <LeftSide>
        <Avatar source={streamAvatar} />
        <Column>
          <Username>william_oficial</Username>
          <Info>68 news videos</Info>
        </Column>
      </LeftSide>

      <RightSide>
        <WhiteCircle />
      </RightSide>
    </ChannelContainer>
  );

  return (
    <List>
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <SpaceBottom />
    </List>
  );
}

export default ChannelList;
