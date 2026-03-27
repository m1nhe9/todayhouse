import React from 'react';
import * as S from './InteriorFeed.styles';
import FeedCard from '../../common/FeedCard/FeedCard';
import { recommendationData } from '../../../data/HomeData/postsData';

const InteriorFeed = () => {
  // 데이터 가공 (비즈니스 로직을 섹션 내부로 이동)
  const contentData = recommendationData.filter(post => post.type === 'content');

  return (
    <S.Section>
      <S.SectionTitle>이런 사진 찾고 있나요?</S.SectionTitle>
      <S.SectionP>좋아하실 만한 인테리어 콘텐츠를 추천해드려요</S.SectionP>
      <S.FeedGrid $columns={6}>
        {contentData.map((post) => (
          <FeedCard key={post.id} data={post} />
        ))}
      </S.FeedGrid>
    </S.Section>
  );
};

export default InteriorFeed;