import React from 'react';
import * as S from './Exhibition.styles';

const Exhibition = ({ data }) => {
  if (!data) return null;

  return (
    <S.Section>
      <S.SectionHeader>
        <S.SectionTitle>오늘의 기획전</S.SectionTitle>
      </S.SectionHeader>

      <S.ExhibitionWrapper>
        <S.ExhibitionGrid $columns={4}>
          {data.map((item) => (
            <S.ExhibitionCard key={item.id}>
              <S.ExhibitionImgBox>
                <img src={item.img} alt={item.title} />
              </S.ExhibitionImgBox>
              <S.ExhibitionTitle>{item.title}</S.ExhibitionTitle>
            </S.ExhibitionCard>
          ))}
        </S.ExhibitionGrid>
      </S.ExhibitionWrapper>
    </S.Section>
  );
};

export default Exhibition;