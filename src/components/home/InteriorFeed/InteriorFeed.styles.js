import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 40px;
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #2f3438;
  margin-bottom: 8px;
`;

export const SectionP = styled.p`
  font-size: 14px;
  color: #828c94;
  margin-bottom: 20px;
`;

export const FeedGrid = styled.div`
  display: grid;
  // 유저 사진은 6열로 촘촘하게 배치
  grid-template-columns: repeat(${props => props.$columns || 6}, 1fr);
  gap: 20px;
`;