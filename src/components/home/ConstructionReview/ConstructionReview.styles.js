import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 80px;
`;

export const SectionHeader = styled.div`
  margin-bottom: 20px;
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #2f3438;
`;

export const ReviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.$columns || 3}, 1fr);
  gap: 20px;
`;

export const ReviewCard = styled.div`
  cursor: pointer;
  &:hover img {
    transform: scale(1.05);
  }
`;

export const ReviewImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9; /* 시공 리뷰는 가로형 이미지가 많음 */
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 12px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
`;

export const ReviewInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ReviewTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: #2f3438;
  line-height: 1.4;
`;

export const ReviewDesc = styled.p`
  font-size: 14px;
  color: #828c94;
  line-height: 1.5;
  /* 두 줄 넘어가면 말줄임표 처리 */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;