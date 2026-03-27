import styled from 'styled-components';

export const BannerContainer = styled.div`
    display: flex;
    gap: 20px;
    max-height: 500px;
    margin: 0 auto;
    padding: 20px 0;
    cursor: pointer;
`;

export const MainVisual = styled.div`
    flex: 2; /* 왼쪽을 더 크게 */
    position: relative;
    border-radius: 3px;
    overflow: hidden;
    img {
        width: 100%; 
        height: 100%; 
        object-fit: cover; 
        transition: transform 0.2s ease;
    }

    &:hover img {
        transform: scale(1.03); /* 5% 정도 커짐 */
    }
`;

export const EventSection = styled.div`
    flex: 0.6;
    position: relative;
    border-radius: 3px;
    overflow: hidden;
`;

export const EventSlider = styled.div`
    display: flex;
    height: 100%;
    transition: transform 0.5s ease;
    /* 인덱스에 따라 가로로 이동 */
    transform: translateX(${props => props.currentIndex * -100}%);

    & > div { 
        min-width: 100%; 
    } /* 각 아이템이 부모 너비를 다 차지하게 */
`;

export const EventItem = styled.div`
    img { 
        width: 100%; 
        height: 100%; 
        object-fit: cover;
        transition: transform 0.2s ease;
    }

    &:hover img {
        transform: scale(1.03); /* 5% 정도 커짐 */
    }
`;

export const PageBadge = styled.div`
    position: absolute;
    bottom: 15px;
    right: 15px;
    background: rgba(0,0,0,0.5);
    color: white;
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 800;
`;

export const MainText = styled.div`
    position: absolute;
    bottom: 30px;
    left: 30px;
    color: white;
    z-index: 2;

    h1 {
        font-size: 32px;
        font-weight: bold;
        line-height: 1.3;
        margin-bottom: 10px;
    }
`;