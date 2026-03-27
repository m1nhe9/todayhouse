import styled from 'styled-components';


export const StyledHeader = styled.header`
    width: 100%;
    border-bottom: 1px solid #eaedef;
    background-color: #fff;
    position: sticky;
    top: 0;
    z-index: 1000;
`;

export const HeaderContainer = styled.div`
    height: 80px;
    display: flex;
    align-items: center;
    max-width: 1150px;
    margin: 0 auto;
    padding: 0 16px;
`;

export const HeaderLogo = styled.div`
    margin-right: 40px;
    img {
        height: 60px;
        display: block;
    }
`;

export const HeaderNav = styled.nav`
margin-left: 20px;
  display: flex;
  gap: 30px;
  a {
    font-weight: bold;
    font-size: 18px;
    color: #222527;
    transition: color 0.2s;
    
    /* 고정된 상태 또는 마우스 올렸을 때 색상 */
    &.active, &:hover {
      color: #3aa1fa;
    }
  }
`;

export const HeaderSearch = styled.div `
    display: flex;
    justify-content: center;
    margin: 0 80px;
`;

export const SearchBar = styled.div `
    position: relative;
    margin-left: 30px;
    i {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        color: #828c94;
    }

    input {
        width: 100%;
        height: 40px;
        background-color: #f4f4f4;
        border: 1px solid #f4f4f4;
        border-radius: 4px;
        padding: 0px 12px 0px 40px;
        font-size: 15px;
        &:focus {
            background-color: #fff;
            border-color: #3aa1fa;
            outline: none;
        }
    }
`;

export const CartIcon = styled.div`
    font-size: 20px;
    color: #222527;
    margin-right: 20px;
    margin-left: 30px;
    cursor: pointer;
    &:hover {
        color: #3aa1fa;
    }
`;

export const HeaderUserName = styled.div`
    max-width: 220px;
    display: flex;
    gap: 12px;

    a {
        color: #222527d8;
        font-size: 14px;
        position: relative;
    }
    a:not(:last-child)::after {
        content: "|";
        margin-left: 12px;
        color: #222527d8;
    }
`;

export const WriteBtn = styled.button`
    background-color: #3aa1fa;
    color: #fff;
    width: 95px;
    height: 40px;
    border-radius: 4px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-left: auto;
    
    &:hover {
        background-color: #2b88d9;
    }
`;


export const LnbContainer = styled.div`
  width: 100%;
  background-color: #fff;
  border-top: 1px solid #eaedef;
  display: flex;
  justify-content: center;
  
  /* 핵심: 높이 제어 */
  max-height: 50px; /* LNB의 실제 높이 */
  overflow: hidden;
  
    transition: all 0.1s ease-in-out;
    transform: translateY(0);

  &.hide {
    max-height: 0;
    opacity: 0;
    transform: translateY(-100%);
    pointer-events: none;
  }
`;

export const LnbContent = styled.nav`
  width: 100%;
  max-width: 1136px;
  height: 50px;
  display: flex;
  align-items: center;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    width: auto;
  }

  a {
    font-size: 15px;
    font-weight: 700;
    color: #2f3438;
    white-space: nowrap;
    position: relative;
    padding: 10px 0;
    
    &.active, &:hover {
      color: #3aa1fa;
    }

    &.active::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #3aa1fa;
    }
  }
`;