import styled from 'styled-components';


export const DealSection = styled.section`
  padding-top: 40px;
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #2f3438;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-items: center;

  /* 반응형 팁: 화면이 작아지면 2열로 바꿀 수도 있어요 */
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ProductCard = styled.div`
  width: 100%;
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const ProductImage = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  display: block;
  border-radius: 5px;
  transition: transform 0.2s ease-in-out;

  /* 마우스 올렸을 때 이미지가 살짝 커지는 효과 (오늘의집 디테일) */
  ${ProductCard}:hover & {
    transform: scale(1.08);
  }
`;

export const TimerBadge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #ff5252;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
`;

export const ProductInfo = styled.div`
  width: 100%;
  padding-top: 10px;
`;

export const BrandName = styled.p`
  font-size: 11px;
  color: #828c94;
  margin-bottom: 4px;
`;

export const ProductTitle = styled.h4`
  font-size: 13px;
  line-height: 1.4;
  margin: 4px 0;
  height: 38px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #2f3438;
`;

export const PriceArea = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Discount = styled.span`
  color: #35c5f0;
  font-weight: bold;
  font-size: 17px;
`;

export const Price = styled.span`
  font-weight: bold;
  font-size: 17px;
  color: #2f3438;
`;

export const SpecialBadge = styled.span`
  font-size: 10px;
  color: #fff;
  background-color: #ff5252;
  padding: 2px 4px;
  border-radius: 3px;
  font-weight: bold;
`;