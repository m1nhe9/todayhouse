import styled from 'styled-components';

export const BestContainer = styled.section`
  padding-top: 40px;
  padding-bottom: 30px;
`;

export const BestHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
`;

export const MoreBtn = styled.button`
  color: #35c5f0;
  font-weight: 700;
  border: none;
  background: none;
  cursor: pointer;
`;

export const TabList = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
  overflow-x: auto;
  &::-webkit-scrollbar { display: none; }
`;

export const TabBtn = styled.button`
  padding: 8px 14px;
  border-radius: 20px;
  border: none;
  background: ${props => props.$active ? '#35c5f0' : '#f7f9fa'};
  color: ${props => props.$active ? '#fff' : '#2f3438'};
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

export const ProductCard = styled.div`
  cursor: pointer;
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  &:hover img { transform: scale(1.05); }
`;

export const RankBadge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #35c5f0;
  color: white;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 700;
`;

export const ScrapBtn = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  filter: drop-shadow(0 0 2px rgba(0,0,0,0.5));
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Brand = styled.span`
  font-size: 11px;
  color: #828c94;
`;

export const ProductTitle = styled.p`
  font-size: 13px;
  line-height: 1.4;
  color: #2f3438;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const PriceInfo = styled.div`
  .discount {
    color: #35c5f0;
    font-weight: 700;
    margin-right: 6px;
  }
  .price {
    font-weight: 700;
  }
`;

export const SpecialTag = styled.span`
  background: #ff7777;
  color: white;
  font-size: 10px;
  padding: 2px 4px;
  border-radius: 3px;
  width: fit-content;
  margin-top: 4px;
`;