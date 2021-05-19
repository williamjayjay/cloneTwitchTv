import { ReactNode } from "react";
import React from "react";

import { Text } from "react-native";

import { Wrapper, Heading } from "./styles";

interface ComingSoonProps {
  children: ReactNode;
}

function ComingSoon({ children }: ComingSoonProps) {
  return (
    <Wrapper>
      <Heading>Em breve...</Heading>
      {children}
    </Wrapper>
  );
}

export default ComingSoon;
