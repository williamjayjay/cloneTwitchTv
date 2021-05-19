import React from "react";
import { ReactNode } from "react";

import { Text, View, FlatList } from "react-native";
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import Title from "../../components/Title";
import CategoryList from "../../components/CategoryList";
import StreamList from "../../components/StreamList";
import ChannelList from "../../components/ChannelList";

import { Container, Wrapper, Main } from "./styles";

interface FollowingProps {
  children: ReactNode;
}

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

function Following({ children }: FollowingProps) {
  const { data, indices } = React.useMemo(() => {
    const items: Item[] = [
      {
        key: "PAGE_HEADING",
        render: () => <Heading> Following </Heading>,
      },

      {
        key: "FOLLOWED_CATEGORIES",
        render: () => <Title>Followed Categories</Title>,
        isTitle: true,
      },

      {
        key: "COMPONENT1",
        render: () => <CategoryList />,
      },

      {
        key: "LIVE_CHANNELS",
        render: () => <Title>Live Channels</Title>,

        isTitle: true,
      },

      {
        key: "COMPONENT2",
        render: () => <StreamList />,
      },

      {
        key: "CONTINUE_WATCHING",
        render: () => <Title>Continue Watching</Title>,

        isTitle: true,
      },

      {
        key: "COMPONENT3",
        render: () => <StreamList />,
      },

      {
        key: "OFFLINE_CHANNELS",
        render: () => <Title>Offline Channels</Title>,

        isTitle: true,
      },

      {
        key: "COMPONENT4",
        render: () => <ChannelList />,
      },
    ];

    //Array que contem apenas os indices dos elementos que são titulos
    const indices: number[] = [];

    items.forEach((item, index) => item.isTitle && indices.push(index));

    return {
      data: items,
      indices,
    };
  }, []);

  return (
    <Wrapper>
      <Container>
        <Header />
        <Main>
          <FlatList<Item>
            data={data}
            keyExtractor={(item) => item.key}
            stickyHeaderIndices={indices}
            renderItem={({ item }) => item.render()}
            //Refresh Effect
            onRefresh={() => {}}
            refreshing={false}
          />
        </Main>
      </Container>
    </Wrapper>
  );
}

export default Following;
