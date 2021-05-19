import React from "react";
import { ReactNode } from "react";

import streamThumbnail from "../../images/stream_thumbnail.png";
import streamAvatar from "../../images/stream_avatar.png";

// import { Text } from "react-native";

import {
  List,
  Stream,
  StreamContainer,
  StreamThumbnail,
  StreamColumn,
  StreamRow,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  TagRow,
  TagView,
  TagText,
  StreamDescription,
  StreamCategory,
} from "./styles";

interface StreamListProps {
  children: ReactNode;
}

function StreamList({ children }: StreamListProps) {
  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />

      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar source={streamAvatar} />
            <StreamUsername numberOfLines={1}>arte.apps</StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            Front-end com React Native , Typescript and love
          </StreamDescription>

          <StreamCategory numberOfLines={1}>
            Science & Technology
          </StreamCategory>
        </StreamRow>

        <TagRow>
          <TagView>
            <TagText>Portuguese</TagText>
          </TagView>

          <TagView>
            <TagText numberOfLines={1}>Mobile Development</TagText>
          </TagView>
        </TagRow>
      </StreamColumn>
    </StreamContainer>
  );

  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
}

export default StreamList;
