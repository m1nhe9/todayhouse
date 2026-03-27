import React from 'react';
import * as S from './Recommend.styles';
import { recommendData } from "../../../data/ShoppingData/recommendData";

const Recommend = () => {
  return (
    <S.Container>
      <S.TitleSection>추천 상품</S.TitleSection>
      <S.GridContainer>
        {recommendData.map((item) => (
          <S.CardWrapper key={item.id} $isEvent={item.type === 'EVENT_CARD'}>
            {item.type === 'EVENT_CARD' ? (
              // 🚀 이벤트 카드 레이아웃
              <S.EventCard>
                <S.CardImage src={item.img} alt={item.title} />
                <S.EventOverlay>
                  <div className="text-box">
                    <span className="brand">{item.brand}</span>
                    <h4 className="title">{item.title}</h4>
                    <p className="desc">{item.eventDesc}</p>
                  </div>
                  <S.CircleArrow>
                    <i className="fa-solid fa-chevron-right"></i>
                  </S.CircleArrow>
                </S.EventOverlay>
              </S.EventCard>
            ) : (
              // 🚀 일반 상품 카드 레이아웃
              <S.ProductCard>
                <S.ImageArea>
                  <img src={item.img} alt={item.title} />
                  <S.BadgeWrapper>
                    {item.isOnly && <S.OnlyBadge>Only</S.OnlyBadge>}
                    {item.isPick && <S.PickBadge>오늘의집 <br /> P!ck</S.PickBadge>}
                  </S.BadgeWrapper>
                  <S.ScrapBtn><i className="fa-regular fa-bookmark"></i></S.ScrapBtn>
                </S.ImageArea>
                <S.InfoArea>
                  <span className="brand">{item.brand}</span>
                  <p className="title">{item.title}</p>
                  <div className="price-row">
                    <span className="discount">{item.discount}%</span>
                    <span className="price">{item.price?.toLocaleString()}</span>
                  </div>
                </S.InfoArea>
              </S.ProductCard>
            )}
          </S.CardWrapper>
        ))}
      </S.GridContainer>
    </S.Container>
  );
};

export default Recommend;