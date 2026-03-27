import React from 'react';
import { Link } from "react-router-dom";
import * as H from './Header.styles';

import logoImg from '../../../assets/images/common/Ohouse-Logo.png';

function Header () {
    return (
        <H.StyledHeader>
            <H.HeaderContainer>

                {/* 로고 영역 */}
                <H.HeaderLogo>
                    <Link to="/">
                        <img src={logoImg} alt="로고" />
                    </Link>
                </H.HeaderLogo>

                {/* 메인 네비게이션 */}
                <H.HeaderNav>
                    <Link to="/">커뮤니티</Link>
                    <Link to="/shopping">쇼핑</Link>
                </H.HeaderNav>

                {/* 검색창 영역 */}
                <H.HeaderSearch>
                    <H.SearchBar>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="통합검색" />
                    </H.SearchBar>
                </H.HeaderSearch>

                {/* 쇼핑카트 */}
                <H.CartIcon>
                    <i className="fa-solid fa-cart-shopping"></i>
                </H.CartIcon>

                {/* 유저 메뉴 (로그인, 회원가입 등) */}
                <H.HeaderUserName>
                    <Link to="/" className="user-menu">로그인</Link>
                    <Link to="/" className="user-menu">회원가입</Link>
                    <Link to="/" className="user-menu">고객센터</Link>
                </H.HeaderUserName>

                {/* 액션 버튼 */}
                <H.WriteBtn>
                        글쓰기
                        <i className="fa-solid fa-angle-down"></i>
                </H.WriteBtn>
            </H.HeaderContainer>
        </H.StyledHeader>
    );
}

export default Header;