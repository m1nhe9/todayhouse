// 1. Vite 이미지 로드 설정 (Home.jsx 기준 상대 경로)
const mainImages = import.meta.glob('../../assets/images/Home/main/**/*.{avif,png,jpg,jpeg,webp}', { eager: true });
const shopImages = import.meta.glob('../../assets/images/Home/shop/**/*.{avif,png,jpg,jpeg,webp}', { eager: true });
const exhibitionImages = import.meta.glob('../../assets/images/Home/main/exhibitions/*.{avif,jpg,jpeg,png}', { eager: true });

// 2. 헬퍼 함수
const getImg = (imgMap, folderPath, fileName) => {
    const path = `${folderPath}${fileName}`;
    return imgMap[path]?.default || '';
};



// 추천/리뷰 데이터 (recommendationData)
export const recommendationData = [
{
    id: "rec-1",
    type: "content", 
    title: "null",
    author: "땅콩마미야",
    img: getImg(mainImages, '../../assets/images/Home/main/recommendations/', 'recommend-interior1.avif')
},
{
    id: "rec-2",
    type: "content",
    title: "null",
    author: "임투리",
    img: getImg(mainImages, '../../assets/images/Home/main/recommendations/', 'recommend-interior2.avif')
},
{
    id: "rec-3",
    type: "content",
    title: "null",
    author: "inspirez.moi",
    img: getImg(mainImages, '../../assets/images/Home/main/recommendations/', 'recommend-interior3.avif')
},
{
    id: "rec-4",
    type: "content",
    title: "null",
    author: "_밖",
    img: getImg(mainImages, '../../assets/images/Home/main/recommendations/', 'recommend-interior4.avif')
},
{
    id: "rec-5",
    type: "content",
    title: "null",
    author: "시윤이와삼냥이",
    img: getImg(mainImages, '../../assets/images/Home/main/recommendations/', 'recommend-interior5.avif')
},
{
    id: "rec-6",
    type: "content",
    title: "null",
    author: "sund_home",
    img: getImg(mainImages, '../../assets/images/Home/main/recommendations/', 'recommend-interior6.avif')
},

// 오늘의 추천 집들이
{
    id: "hou-1",
    type: "housewarming",
    title: "레트로 취향과 취미로 방을 정복한, 집순이의 4평 맥시멀룸",
    author: "또띠의취미정복",
    img: getImg(mainImages, '../../assets/images/Home/main/recommendations/', 'recommend-house4.avif')
},
{
    id: "hou-2",
    type: "housewarming",
    title: "8평 원룸을 깔끔하고 깊이 있게 연출",
    author: "GINAHAE",
    img: getImg(mainImages, '../../assets/images/Home/main/recommendations/', 'recommend-house3.avif')
},
{
    id: "hou-3",
    type: "housewarming",
    title: "작지만 아주 알찬 12평 신혼집의 다양한 무드",
    author: "코지무드홈",
    img: getImg(mainImages, '../../assets/images/Home/main/recommendations/', 'recommend-house2.avif')
},
{
    id: "hou-4",
    type: "housewarming",
    title: "일러스트 작가의 싱글 홈, 빈티지+플랜테리어",
    author: "2_sosoon",
    img: getImg(mainImages, '../../assets/images/Home/main/recommendations/', 'recommend-house1.avif')
},
];

// 유저들의 인테리어 시공 리뷰
export const constructionReviewData = [
{
    id: "review-1",
    img: getImg(mainImages, '../../assets/images/Home/main/reviews/', 'interior-review2.avif'),
    title: "코드디자인인테리어",
    desc: "제가 여러 업체 실측&상담을 한 끝에 디자인 코드를 선택했습니다 모든면에서 다 좋았지만! 정해진 예산에 최대한으로 맞춰 도와주셨구 무엇보다..."
},
{
    id: "review-2",
    img: getImg(mainImages, '../../assets/images/Home/main/reviews/', 'interior-review1.avif'),
    title: "요즘인테리어",
    desc: "저희는 구축 아파트를 계약해서 무조건 올수리 인테리어를 생각했던 예비 신혼 부부입니다 여러 업체를 상담했지만 인테리어는 처음이라 판단이 잘 안섰는데 현실적으로 실현..."
},
{
    id: "review-3",
    img: getImg(mainImages, '../../assets/images/Home/main/reviews/', 'interior-review3.avif'),
    title: "ABLY_design",
    desc: "구○빈 팀장님께서 소통도 원할히 잘 해주시고 젊은 감각으로 이런저런 부자재들을 트렌디한 것으로 잘 추천해주셨습니다. 첫 미팅때부터 3D 도면 준비해서 설명해주시니 이해도 잘..."
},
];

// 오늘의 기획전
export const exhibitionData = [
  {
    id: "ex-1",
    title: "오늘의집 라이브 모아보기",
    img: getImg(exhibitionImages, '../../assets/images/Home/main/exhibitions/', 'exhibitions1.avif')
  },
  {
    id: "ex-2",
    title: "오직,오늘의 집에서",
    img: getImg(exhibitionImages, '../../assets/images/Home/main/exhibitions/', 'exhibitions2.avif')
  },
  {
    id: "ex-3",
    title: "가구 배송/설치 서비스",
    img: getImg(exhibitionImages, '../../assets/images/Home/main/exhibitions/', 'exhibitions3.avif')
  },
  {
    id: "ex-4",
    title: "최저가 보상제",
    img: getImg(exhibitionImages, '../../assets/images/Home/main/exhibitions/', 'exhibitions4.avif')
  }
];
