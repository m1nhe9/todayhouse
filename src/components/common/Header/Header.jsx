import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import * as H from './Header.styles';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';

import logoImg from '../../../assets/images/common/Ohouse-Logo.png';

function Header() {
    const [activeMenu, setActiveMenu] = useState('community');
    const [activeSub, setActiveSub] = useState('홈');

    // --- 스크롤 제어 상태 추가 ---
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY <= 80) {
            setIsVisible(true);
        } 
        else if (Math.abs(currentScrollY - lastScrollY.current) > 20) {
            setIsVisible(currentScrollY < lastScrollY.current);
        }

        lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}, []);



    const handleMainMenuClick = (menu) => {
        setActiveMenu(menu);
        setActiveSub(menu === 'community' ? '홈' : '쇼핑홈');
    };

    return (
        <H.StyledHeader>
            <H.HeaderContainer>
                <H.HeaderLogo>
                    <Link to="/"><img src={logoImg} alt="로고" /></Link>
                </H.HeaderLogo>

                <H.HeaderNav>
                    <Link 
                        to="/" 
                        onClick={() => handleMainMenuClick('community')}
                        className={activeMenu === 'community' ? 'active' : ''}
                    >
                        커뮤니티
                    </Link>
                    <Link 
                        to="/shopping" 
                        onClick={() => handleMainMenuClick('shopping')}
                        className={activeMenu === 'shopping' ? 'active' : ''}
                    >
                        쇼핑
                    </Link>
                </H.HeaderNav>

                {/* 검색, 카트 등 UI */}
                <H.HeaderSearch>
                    <H.SearchBar>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="통합검색" />
                    </H.SearchBar>
                </H.HeaderSearch>
                <H.CartIcon><i className="fa-solid fa-cart-shopping"></i></H.CartIcon>
                <H.HeaderUserName>
                    <Link to="/" className="user-menu">로그인</Link>
                    <Link to="/" className="user-menu">회원가입</Link>
                </H.HeaderUserName>
                <H.WriteBtn>글쓰기 <i className="fa-solid fa-angle-down"></i></H.WriteBtn>
            </H.HeaderContainer>

            <H.LnbContainer className={isVisible ? '' : 'hide'}>
                <H.LnbContent>
                    <Swiper
                        modules={[FreeMode]}
                        slidesPerView={'auto'} 
                        spaceBetween={20}
                        freeMode={true}
                        className="mySwiper"
                    >
                        {(activeMenu === 'community' ? communityMenus : shoppingMenus).map((menu, idx) => (
                            <SwiperSlide key={idx} style={{ width: 'auto' }}>
                                <Link 
                                    to="/" 
                                    onClick={() => setActiveSub(menu)}
                                    className={activeSub === menu ? 'active' : ''}
                                >
                                    {menu}
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </H.LnbContent>
            </H.LnbContainer>
        </H.StyledHeader>
    );
}

const communityMenus = ["홈", "인기", "쇼핑수다", "집꾸미기", "오집소식", "취미/일상", "추천", "집들이", "집사진", "3D인테리어"];
const shoppingMenus = ["쇼핑홈", "카테고리", "베스트", "오늘의딜", "단독상품", "오마트", "원하는날도착", "오!쇼룸", "기획전"];

export default Header;