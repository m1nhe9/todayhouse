import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #2f3438;
  margin-bottom: 20px;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
  width: 100%;
`;

export const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.2s;
`;

export const ImageWrapper = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const NavTitle = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: #2f3438;
  text-align: center;
  line-height: 1.2;
`;