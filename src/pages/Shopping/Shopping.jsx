import React from 'react';

import * as S from './Shopping.styles';

import Banner from '../../components/Shoppings/Banner/Banner';
import CategoryNav from '../../components/Shoppings/CategoryNav/CategoryNav';
import Recommend from '../../components/Shoppings/Recommend/Recommend'


function Shopping () {
    return (
        <S.PageWrapper>
            <Banner />
            <S.ShoppingContainer>
                <CategoryNav />
                <Recommend />
            </S.ShoppingContainer>
        </S.PageWrapper>
    )
}

export default Shopping;