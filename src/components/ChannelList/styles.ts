import styled from "styled-components/native";
import colors from "../../styles/colors";

export const List = styled.View`
  padding: 8px 0 0px;
`;

export const ChannelItem = styled.View``;

export const ChannelContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 14px;
  margin-bottom: 25px;
`;

export const LeftSide = styled.View`
  flex-direction: row;
  align-items: center;k
`;

export const Avatar = styled.Image`
  /* background: ${colors.tag}; */
  width: 48px;
  height: 48px;
  border-radius: 24px;
  opacity: 0.8;
`;

export const Column = styled.View`
  padding-left: 10px;
`;

export const Username = styled.Text`
  font-size: 16px;
  color: ${colors.black};
  font-family: roboto_500;
`;

export const Info = styled.Text`
  margin-top: 1px;
  font-size: 13px;
  color: ${colors.gray};
`;

export const RightSide = styled.View``;

export const WhiteCircle = styled.View`
  background: ${colors.black};
  width: 9px;
  height: 9px;
  border-radius: 4.5px;
  opacity: 0.8;
`;

export const SpaceBottom = styled.View`
  /* background: green; */
  height: 96px;
`;
