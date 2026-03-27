import styled from 'styled-components';

export const Container = styled.section`
  margin: 30px auto;
  padding: 0 15px;
`;

export const TitleSection = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px 20px;
`;

export const CardWrapper = styled.div`
  width: 100%;
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const ImageArea = styled.div`
  position: relative;
  aspect-ratio: 1 / 1;
  border-radius: 4px;
  overflow: hidden;
  transition: transform 0.2s ease;
  img { 
    width: 100%; 
    height: 100%; 
    object-fit: cover; 
    transition: transform 0.2s ease;
    }
    &:hover img {
    transform: scale(1.08); /* 5% 정도 커짐 */
  }
`;

export const InfoArea = styled.div`
  padding-top: 10px;
  .brand { 
    font-size: 11px; 
    color: #828c94; 
  }
  .title { 
    font-size: 13px; color: #2f3438; line-height: 1.4;
    margin-top: 4px; display: -webkit-box; -webkit-line-clamp: 2;
    -webkit-box-orient: vertical; overflow: hidden;
  }
  .price-row {
    margin-top: 4px; 
    display: flex; 
    align-items: 
    center; gap: 4px;

    .discount { 
      color: #35c5f0; 
      font-weight: 700; 
      font-size: 17px; 
    }

    .price { 
      color: #2f3438; 
      font-weight: 700; 
      font-size: 17px; 
    }
  }
`;

export const RatingRow = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  margin-top: 4px;
  font-size: 12px;

  .star { color: #35c5f0; }

  .score { 
    font-weight: 700; 
    color: #2f3438; 
  }
  
  .count { color: #828c94; }
`;

export const TagRow = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 8px;
  span {
    padding: 2px 4px;
    font-size: 10px;
    font-weight: 700;
    border-radius: 2px;
  }

  .free { 
    background: #f5f5f5; 
    color: #828c94; 
  }
  .special { 
    background: #ff7777; 
    color: white; 
  }
  .coupon { 
    background: #ffeded; 
    color: #ff7777; 
    }
`;

// --- [이벤트 카드 및 뱃지] ---
export const EventCard = styled.div`
  position: relative;
  height: 450px; /* 전체 카드 높이 */
  border-radius: 4px;
  overflow: hidden;
  /* 🚀 Flexbox 설정 추가 */
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
`;
export const CardImage = styled.img`
  width: 100%;
  /* 🚀 이미지 높이를 부모의 50%로 설정 */
  height: 60%; 
  object-fit: cover;
  /* 만약 이미지가 위쪽으로 쏠려 보인다면 아래 속성 추가 */
  object-position: center bottom;
`;

export const EventOverlay = styled.div`
  width: 100%;
  height: 50%;
  background: rgb(49, 42, 32);
  padding: 20px;
  display: flex;
  flex-direction: column;
  color: white;

  .text-box {
    width: 81%;
  }

  .brand { 
    font-size: 13px; 
    font-weight: 700; 
  }
  .title { 
    font-size: 18px; 
    font-weight: 800; 
    margin: 6px 0; 
  }
  .desc { 
    font-size: 12px; 
    font-weight: 300;
  }
`;

export const CircleArrow = styled.div`
  position: absolute; 
  bottom: 20px; 
  right: 20px;
  width: 28px; 
  height: 28px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex; justify-content: center; align-items: center;
`;

export const BadgeWrapper = styled.div`
  
  display: flex; 
  gap: 4px;
  align-items: flex-start;
`;
const BaseBadge = styled.span`
  font-weight: 500; 
  color: white;
`;

export const OnlyBadge = styled(BaseBadge)` 
  background: rgb(61, 61, 61);
  padding: 4px 16px  7px 16px;
  position: absolute; 
  top: 10px; left: 10px; 
  border-radius: 3px; 
  font-size: 16px;
`;
export const PickBadge = styled(BaseBadge)` 
  background: #509768; 
  position: absolute; 
  top: 0; right: 10px; 
  padding: 16px 10px  17px 10px;
  font-size: 14px;
  line-height: 1.2;
`;

export const ScrapBtn = styled.button`
  position: absolute; 
  bottom: 10px; right: 10px; 
  background: none; 
  border: none;
  color: white; 
  font-size: 22px; 
  cursor: pointer;
`;