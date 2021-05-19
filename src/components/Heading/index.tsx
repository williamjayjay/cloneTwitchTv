import React from "react";

import { ReactNode } from "react";

import { Text } from "react-native";

import { Container, HeadingText } from "./styles";

interface HeadingProps {
  children: ReactNode;
}

function Heading({ children }: HeadingProps) {
  return (
    <Container>
      <HeadingText>{children}</HeadingText>
    </Container>
  );
}

export default Heading;
