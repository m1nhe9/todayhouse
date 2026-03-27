import React from 'react';
import * as S from './TodayHousewarming.styles';
import FeedCard from '../../common/FeedCard/FeedCard';
import { recommendationData } from '../../../data/HomeData/postsData';

const TodayHousewarming = () => {
  const housewarmingData = recommendationData.filter(post => post.type === 'housewarming');

  return (
    <S.Section>
      <S.SectionTitle>오늘의 추천 집들이 구경해보세요🧐</S.SectionTitle>
      <S.FeedGrid $columns={4}>
        {housewarmingData.map((post) => (
          <FeedCard key={post.id} data={post} />
        ))}
      </S.FeedGrid>
    </S.Section>
  );
};

export default TodayHousewarming;