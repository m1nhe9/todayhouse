// (베스트 상품)
import React from 'react';
import { useState } from 'react';
import * as S from './CategoryBest.styles';
import { bestData } from "../../../data/HomeData/productData";

const categories = [
  { id: 'all', name: '전체' },
  { id: 'furniture', name: '가구' },
  { id: 'fabric', name: '패브릭' },
  // 필요시 추가 (가전-디지털, 주방용품 등)
];

const CategoryBest = () => {
  const [activeTab, setActiveTab] = useState('all');

  // 탭 클릭 시 데이터 필터링 로직
  const filteredData = activeTab === 'all' 
    ? bestData.filter(item => item.id.includes('bestAll')) 
    : bestData.filter(item => item.id.includes(activeTab));

  return (
    <S.BestContainer>
      <S.BestHeader>
        <S.Title>베스트</S.Title>
      </S.BestHeader>

      <S.TabList>
        {categories.map((cat) => (
          <S.TabBtn 
            key={cat.id} 
            $active={activeTab === cat.id}
            onClick={() => setActiveTab(cat.id)}
          >
            {cat.name}
          </S.TabBtn>
        ))}
      </S.TabList>

      <S.ProductGrid>
        {filteredData.slice(0, 3).map((item, index) => (
          <S.ProductCard key={item.id}>
            <S.ImgWrapper>
              <img src={item.img} alt={item.title} />
              <S.RankBadge>{index + 1}</S.RankBadge>
              <S.ScrapBtn>
                <i className="fa-regular fa-bookmark"></i>
              </S.ScrapBtn>
            </S.ImgWrapper>
            
            <S.InfoBox>
              <S.Brand>{item.brand}</S.Brand>
              <S.ProductTitle>{item.title}</S.ProductTitle>
              <S.PriceInfo>
                <span className="discount">{item.discount}</span>
                <span className="price">{item.price.toLocaleString()}</span>
              </S.PriceInfo>
              {item.specialPrice && <S.SpecialTag>특가</S.SpecialTag>}
            </S.InfoBox>
          </S.ProductCard>
        ))}
      </S.ProductGrid>
    </S.BestContainer>
  );
};

export default CategoryBest;