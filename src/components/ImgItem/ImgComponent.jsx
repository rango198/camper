import React from 'react';
import { ImgItem } from '../CatalogItem/CatalogItem.styled';

const ImgComponent = ({ item }) => {
  return (
    <ImgItem bgImage={item?.gallery[0]}>{/* Вміст, якщо необхідно */}</ImgItem>
  );
};

export default ImgComponent;
