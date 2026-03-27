import styled from 'styled-components';

// 1. 전체 컨테이너
export const CardContainer = styled.div`
    width: 100%;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 10px; /* 이미지와 하단 정보 사이 간격 추가 */
    transition: opacity 0.2s ease;
`;

// 2. 이미지 영역
export const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    border-radius: 4px;
    overflow: hidden;
    background-color: #f5f5f5;

    aspect-ratio: ${props => {
        if (props.$type === 'content') return '3 / 4';
        if (props.$type === 'housewarming') return '1.5 / 1';
        return '1 / 1'; // 기본값
    }};

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.2s ease;
    }

    ${CardContainer}:hover & img {
        transform: scale(1.04);
    }
`;

// 3. 사진 위 유저 정보 (SNS형)
export const UserBadge = styled.div`
    position: absolute;
    bottom: 10px;
    left: 10px;
    display: flex;
    align-items: center;
    gap: 6px;
    color: white;
    z-index: 2;

    span {
        font-size: 13px;
        font-weight: 700;
        text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
    }
`;

// 4. 북마크 아이콘
export const ScrapIcon = styled.div`
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: white;
    font-size: 20px;
    filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.4));
    z-index: 2;
`;

// 5. 집들이용 하단 텍스트 정보
export const HouseInfo = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const Title = styled.h3`
    font-size: 15px;
    font-weight: 400;
    color: #2f3438;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

// 6. 상품용 하단 정보 (RecommendList에서 주로 사용)
export const ProductInfo = styled.div`
    margin-top: 0; /* Container의 gap으로 조절하므로 제거 */
    display: flex;
    flex-direction: column;
    gap: 2px; /* 텍스트 간격은 더 좁게 */
`;

export const Brand = styled.span`
    font-size: 11px;
    color: #828c94;
`;

export const PriceRow = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    font-weight: 700;
`;

export const Discount = styled.span`
    color: #35c5f0;
    font-size: 17px;
`;

export const Price = styled.span`
    color: #2f3438;
    font-size: 17px;
`;

// 7. 배지 스타일 (Only, 오늘의집 픽)
export const BadgeWrapper = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    display: flex;
    gap: 4px;
    z-index: 2;
`;

const BaseBadge = styled.span`
    padding: 2px 6px;
    border-radius: 3px;
    font-size: 10px;
    font-weight: 700;
    color: white;
`;

export const OnlyBadge = styled(BaseBadge)`
    background-color: #ff7777;
`;

export const PickBadge = styled(BaseBadge)`
    background-color: #35c5f0;
`;

// FeedCard.styles.js 하단에 추가

export const EventOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(61, 52, 44, 0.85); 
    display: flex;
    /* 시안처럼 내용물들을 가로로 배치하고 수직 중앙 정렬 */
    flex-direction: row; 
    justify-content: space-between; 
    align-items: center; 
    color: white;
    padding: 20px;

    .text-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
    }
`;

export const PlayIcon = styled.div`
    /* 절대 위치 제거 */
    font-size: 32px; 
    color: rgba(255, 255, 255, 0.9);
    margin-left: 10px;
`;