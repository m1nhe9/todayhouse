import React from 'react';
import * as S from './CategoryNav.styles';

import { CategorynavData } from '../../../data/ShoppingData/CategoryNavData';

const CategoryNav = () => {
  return (
    <S.Container>
      <S.Title>카테고리</S.Title>
      <S.GridWrapper>
        {CategorynavData.map((item) => (
          <S.NavItem key={item.id}>
            <S.ImageWrapper>
              <img src={item.img} alt={item.title} />
            </S.ImageWrapper>
            <S.NavTitle>{item.title}</S.NavTitle>
          </S.NavItem>
        ))}
      </S.GridWrapper>
    </S.Container>
  );
};

export default CategoryNav;