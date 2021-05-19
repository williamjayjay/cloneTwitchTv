import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import React from "react";

import { ReactNode } from "react";

import { Text } from "react-native";
import colors from "../../styles/colors";
import streamAvatar from "../../images/stream_avatar.png";

import {
  Container,
  Avatar,
  OnlineStatus,
  RightSide,
  Button,
  ImageAvatar,
} from "./styles";

interface HeaderProps {
  children: ReactNode;
}

function Header({ children }: HeaderProps) {
  return (
    <Container>
      <Avatar>
        <ImageAvatar resizeMode="cover" source={streamAvatar}></ImageAvatar>
        <OnlineStatus />
      </Avatar>

      <RightSide>
        <Button>
          <MaterialIcons
            name="notifications-none"
            size={26}
            color={colors.black}
          />
        </Button>

        <Button>
          <MaterialCommunityIcons
            name="message-outline"
            size={26}
            color={colors.black}
          />
        </Button>

        <Button>
          <Feather name="search" size={26} color={colors.black} />
        </Button>
      </RightSide>
    </Container>
  );
}

export default Header;
