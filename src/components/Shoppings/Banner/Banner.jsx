import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import * as S from './Banner.styles';

import { bannerData } from '../../../data/ShoppingData/bannerData'; 

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Banner = () => {
  return (
    <S.BannerContainer>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ type: 'fraction' }}
        navigation={true}
      >
        {bannerData.map((item) => (
          <SwiperSlide key={item.id}>
            <S.SlideWrapper>
              <S.BannerImg src={item.img} alt={item.Title} />
              <S.TextOverlay>
                <S.BannerTitle>{item.Title}</S.BannerTitle>
              </S.TextOverlay>
            </S.SlideWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.BannerContainer>
  );
};

export default Banner;