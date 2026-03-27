import React from 'react';
import * as S from './ConstructionReview.styles';
import { constructionReviewData } from '../../../data/HomeData/postsData';

const ConstructionReview = () => {
  return (
    <S.Section>
      <S.SectionHeader>
        <S.SectionTitle>유저들의 인테리어 시공 리뷰</S.SectionTitle>
      </S.SectionHeader>
      
      <S.ReviewGrid $columns={3}>
        {constructionReviewData.map((review) => (
          <S.ReviewCard key={review.id}>
            <S.ReviewImageWrapper>
              <img src={review.img} alt={review.title} loading="lazy" />
            </S.ReviewImageWrapper>
            <S.ReviewInfo>
              <S.ReviewTitle>{review.title}</S.ReviewTitle>
              <S.ReviewDesc>{review.desc}</S.ReviewDesc>
            </S.ReviewInfo>
          </S.ReviewCard>
        ))}
      </S.ReviewGrid>
    </S.Section>
  );
};

export default ConstructionReview;