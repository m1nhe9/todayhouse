import React from 'react';
import * as S from './QuickMenu.styles';


const QuickMenu = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <S.MenuSection>
      {data.map((item) => (
        // 3. 위에서 만든 '스타일 컴포넌트'를 태그처럼 사용
        <S.MenuItem key={item.id}>
          <S.MenuImage src={item.img} alt={item.title} />
          <p>{item.title}</p>
        </S.MenuItem>
      ))}
    </S.MenuSection>
  );
};

export default QuickMenu;