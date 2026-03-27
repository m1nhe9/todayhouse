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
    display: flex;
    gap: 30px;
    a {
        font-weight: bold;
        font-size: 18px;
        color: #222527;
        &:hover {
            color: #3aa1fa;
        }
    }
`;

export const HeaderSearch = styled.div `
    display: flex;
    justify-content: center;
    margin: 0 75px;
`;

export const SearchBar = styled.div `
    position: relative;

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