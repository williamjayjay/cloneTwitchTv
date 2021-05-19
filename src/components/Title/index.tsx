import React from "react";
import { ReactNode } from "react";

import { Text } from "react-native";

import { Container } from "./styles";

interface TitleProps {
  children: ReactNode;
}

function Title({ children }: TitleProps) {
  return <Container>{children}</Container>;
}

export default Title;
