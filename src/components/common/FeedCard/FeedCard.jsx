import React from 'react';
import * as S from './FeedCard.styles';


const FeedCard = ({ data, $isShopping }) => {
    if (!data) return null;

    // 1. 유저 인테리어 사진 (SNS형: content)
    if (data.type === 'content') {
        return (
            <S.CardContainer>
                <S.ImageWrapper $type={data.type} $isShopping={$isShopping}>
                    <img src={data.img} alt={data.author} />
                    <S.UserBadge>
                        <span>{data.author}</span>
                    </S.UserBadge>
                    <S.ScrapIcon><i className="fa-regular fa-bookmark"></i></S.ScrapIcon>
                </S.ImageWrapper>
            </S.CardContainer>
        );
    }

    // 2. 오늘의 추천 집들이 (매거진형: housewarming)
    if (data.type === 'housewarming') {
        return (
            <S.CardContainer>
                <S.ImageWrapper $type={data.type} $isShopping={$isShopping}>
                    <img src={data.img} alt={data.title} />
                    <S.ScrapIcon><i className="fa-regular fa-bookmark"></i></S.ScrapIcon>
                </S.ImageWrapper>
                <S.HouseInfo>
                    <S.Title>{data.title}</S.Title>
                </S.HouseInfo>
            </S.CardContainer>
        );
    }

    // 🚀 3. 오늘의집 LIVE (이벤트형: EVENT_CARD) 추가
    if (data.type === 'EVENT_CARD') {
        return (
            <S.CardContainer>
                <S.ImageWrapper $type="event" $isShopping={$isShopping}>
                    <img src={data.img} alt={data.title} />
                    <S.EventOverlay>
                        <span className="live-badge">{data.title}</span>
                        <p className="event-desc">{data.eventDesc}</p>
                    </S.EventOverlay>
                    {/* 재생 아이콘도 이미지 영역 안에서 중앙 정렬되도록 이동 */}
                    <S.PlayIcon><i className="fa-solid fa-circle-play"></i></S.PlayIcon>
                </S.ImageWrapper>
            </S.CardContainer>
        );
    }

    // 🚀 4. 일반 추천 상품 (상품형: "" 또는 기본값) 추가
    // type이 비어있거나 특정되지 않은 모든 경우는 상품으로 처리
    return (
        <S.CardContainer>
            <S.ImageWrapper $type="product" $isShopping={$isShopping}>
                <img src={data.img} alt={data.title} />
                <S.BadgeWrapper>
                    {data.isOnly && <S.OnlyBadge>Only</S.OnlyBadge>}
                    {data.isPick && <S.PickBadge>오늘의집 픽</S.PickBadge>}
                </S.BadgeWrapper>
                <S.ScrapIcon><i className="fa-regular fa-bookmark"></i></S.ScrapIcon>
            </S.ImageWrapper>

            <S.ProductInfo>
                <S.Brand>{data.brand}</S.Brand>
                <S.Title>{data.title}</S.Title>
                <S.PriceRow>
                    <S.Discount>{data.discount}%</S.Discount>
                    {data.price && <S.Price>{data.price.toLocaleString()}</S.Price>}
                </S.PriceRow>
                {/* 별점이나 리뷰는 나중에 데이터 추가되면 넣으면 돼! */}
            </S.ProductInfo>
        </S.CardContainer>
    );
};

export default FeedCard;