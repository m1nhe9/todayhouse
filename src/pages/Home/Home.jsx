import React from 'react';
import * as S from './Home.styles';

import { QuickMenu as QuickData, mainbannerData } from '../../data/HomeData/mainData'; 
import { todaysDealData, bestData } from '../../data/HomeData/productData';
import { exhibitionData } from '../../data/HomeData/postsData';

import MainBanner from '../../components/home/MainBanner/MainBanner';
import QuickMenuComponent from '../../components/home/QuickMenu/QuickMenu';
import TodaysDealComponent from '../../components/home/TodaysDeal/TodaysDeal';
import Exhibition from '../../components/home/Exhibition/Exhibition';
import CategoryBest from '../../components/home/CategoryBest/CategoryBest';
import InteriorFeed from '../../components/home/InteriorFeed/InteriorFeed';
import TodayHousewarming from '../../components/home/TodayHousewarming/TodayHousewarming';
import ConstructionReview from '../../components/home/ConstructionReview/ConstructionReview';

const Home = () => {
  return (
    <S.HomeContainer>

      <MainBanner data={mainbannerData} />

      <QuickMenuComponent data={QuickData} />

      <InteriorFeed />

      <TodayHousewarming />

      <TodaysDealComponent data={todaysDealData} />

      <ConstructionReview />

      <Exhibition data={exhibitionData} />

      <CategoryBest data={bestData} />
      
    </S.HomeContainer>
  );
};

export default Home;