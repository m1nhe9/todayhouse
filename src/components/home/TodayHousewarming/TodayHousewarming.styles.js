import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 40px;
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #2f3438;
  margin-bottom: 20px;
`;

export const FeedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.$columns || 4}, 1fr);
  gap: 20px;
`;