import styled from 'styled-components'; // 1. 라이브러리 불러오기


export const MenuSection = styled.section`
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    width: 100%;
    margin: 0 auto;
`;

export const MenuItem = styled.div`
    text-align: center;
    cursor: pointer;
    
    p {
        font-size: 15px;
        margin-top: 8px;
        color: #2f3438;
    }
`;

export const MenuImage = styled.img`
    width: 85px;
    height: 85px;
    object-fit: contain;
`;