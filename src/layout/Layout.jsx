import React from 'react';
import { Outlet } from "react-router-dom";
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';

function Layout () {
    return (
        <div>
            <Header />

            <main className="content">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}

export default Layout;

//    헤더(로고, 메뉴), 푸터(하단 정보)처럼 어느 페이지를 가도 똑같이 보이는 틀입니다.

//    "난 헤더랑 푸터를 그릴게. 자, 여기 빈 공간(<Outlet />)에 Home 들어와!"