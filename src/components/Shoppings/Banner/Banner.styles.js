import styled from 'styled-components';

export const BannerContainer = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 30px;

  /* Swiper 내부 화살표/페이지네이션 커스텀 */
  .swiper-button-next, .swiper-button-prev {
    color: #fff;
    width: 30px;
    &::after { 
      font-size: 20px; 
      font-weight: bold; 
    }
  }

  .swiper-pagination-fraction {
    width: auto;
    left: auto;
    right: 20px;
    bottom: 20px;
    background: rgba(0, 0, 0, 0.4);
    color: #fff;
    padding: 3px 12px;
    border-radius: 15px;
    font-size: 12px;
  }
`;

export const SlideWrapper = styled.div`
  width: 100%;
  height: 350px; /* 원하는 배너 높이 */
  position: relative;
  cursor: pointer;
`;

export const BannerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TextOverlay = styled.div`
  position: absolute;
  bottom: 50px;
  left: 40px;
  color: #fff;
  z-index: 10;
`;

export const BannerTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  line-height: 1.3;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  white-space: pre-line; /* \n 줄바꿈 적용 */
`;