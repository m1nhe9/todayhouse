import styled from 'styled-components';


// 1. 기존에 지웠던 섹션 레이아웃들을 여기에 직접 정의합니다.
export const Section = styled.section`
  padding-top: 40px;
`;

export const SectionHeader = styled.div`
  margin-bottom: 20px;
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #2f3438;
`;

// Exhibition 전용 그리드 (Home.styles에서 가져옴)
export const ExhibitionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.$columns || 4}, 1fr);
  gap: 20px 15px;
`;

export const ExhibitionWrapper = styled.div`
  position: relative;
`;

export const ExhibitionCard = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const ExhibitionImgBox = styled.div`
  width: 100%;
  aspect-ratio: 1.8 / 1;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 12px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: scale(1.06);
  }
`;

export const ExhibitionTitle = styled.h4`
  font-size: 15px;
  font-weight: 700;
  color: #2f3438;
  line-height: 1.4;
`;