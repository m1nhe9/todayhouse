import React, { useState, useEffect } from 'react';
import * as S from './MainBanner.styles';

const MainBanner = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // 왼쪽 큰 사진 (데이터의 첫 번째)
    const mainHero = data[0];
    // 오른쪽 슬라이드용 이벤트들 (두 번째 데이터부터 끝까지)
    const eventSlides = data.slice(1);

    const nextEvent = () => {
        setCurrentIndex((prev) => (prev === eventSlides.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const timer = setInterval(nextEvent, 3000); // 3초마다 이벤트 변경
        return () => clearInterval(timer);
    }, [currentIndex]);

    if (!data) return null;

    return (
        <S.BannerContainer>
            {/* 왼쪽: 고정 메인 이미지 */}
            <S.MainVisual>
                <img src={mainHero.img} alt={mainHero.title} />
                <S.MainText>
                    <h1>{mainHero.title}</h1>
                </S.MainText>
            </S.MainVisual>

            {/* 오른쪽: 이벤트 슬라이드 영역 */}
            <S.EventSection>
                <S.EventSlider $currentIndex={currentIndex}>
                    {eventSlides.map((event) => (
                        <S.EventItem key={event.id}>
                        <img src={event.img} alt={event.title} />
                        </S.EventItem>
                    ))}
                </S.EventSlider>

                {/* 인디케이터 (9/16 같은 표시) */}
                <S.PageBadge>
                    {currentIndex + 1} / {eventSlides.length} +
                </S.PageBadge>

            </S.EventSection>
        </S.BannerContainer>
    );
};

export default MainBanner;