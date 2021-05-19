import React from "react";
import { ReactNode } from "react";

import {
  CategoryContainer,
  CategoryImage,
  CategoryName,
  CategoryStatus,
  RedCircle,
  Info,
  List,
} from "./styles";

import data from "./data";

interface CategoryListProps {
  children: ReactNode;
}

interface ItemProps {
  item: typeof data[0];
}

function CategoryList({ children }: CategoryListProps) {
  const CategoryItem: React.FC<ItemProps> = ({ item }) => (
    <CategoryContainer>
      <CategoryImage source={item.source} />
      <CategoryName numberOfLines={1}>{item.name}</CategoryName>
      <CategoryStatus>
        <RedCircle />
        <Info>51.9K</Info>
      </CategoryStatus>
    </CategoryContainer>
  );

  return (
    <List>
      {data.map((item) => (
        <CategoryItem key={item.name} item={item} />
      ))}
    </List>
  );
}

export default CategoryList;
