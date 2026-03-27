import React, { useState, useEffect } from 'react';
import * as S from './TodaysDeal.styles';


// 2. 컴포넌트 로직 영역
const TodaysDeal = ({ data }) => {
  const [timeLeft, setTimeLeft] = useState(86400);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  if (!data) return null;

  return (
    <S.DealSection>
      <S.SectionTitle>오늘의딜</S.SectionTitle>
      <S.ProductGrid>
        {data.map((item) => (
          <S.ProductCard key={item.id}>
            <S.ImageWrapper>
              <S.ProductImage src={item.img} alt={item.title} />
              <S.TimerBadge>{formatTime(timeLeft)} 남음</S.TimerBadge>
            </S.ImageWrapper>

            <S.ProductInfo>
              <S.BrandName>{item.brand}</S.BrandName>
              <S.ProductTitle>{item.title}</S.ProductTitle>
              <S.PriceArea>
                <S.Discount>{item.discount}</S.Discount>
                <S.Price>{item.price.toLocaleString()}</S.Price>
                {item.specialPrice && <S.SpecialBadge>특가</S.SpecialBadge>}
              </S.PriceArea>
            </S.ProductInfo>
          </S.ProductCard>
        ))}
      </S.ProductGrid>
    </S.DealSection>
  );
};

export default TodaysDeal;