const bannerImages = import.meta.glob('../../assets/images/Home/main/main-banner/*.{avif,png,jpg,jpeg,webp}', { eager: true });
const exhibitionImages = import.meta.glob('../../assets/images/Home/main/exhibitions/*.{avif,png,jpg,jpeg,webp}', { eager: true });
const iconImages = import.meta.glob('../../assets/images/Home/main/icons/*.{avif,png,jpg,jpeg,webp}', { eager: true });

/**
* 이미지 매칭 헬퍼 함수
* @param {Object} imgMap - 위에서 선언한 glob 객체
* @param {string} folderPath - 해당 폴더의 상대 경로
* @param {string} fileName - 데이터에 적힌 파일명
*/
const getImg = (imgMap, folderPath, fileName) => {
  const path = `${folderPath}${fileName}`;
  return imgMap[path]?.default || ''; 
};

// 메인 배너 / 이벤트
export const mainbannerData = [
  {
    id: "banner-1",
    title: "33평 뉴트럴톤 아파트",
    img: getImg(bannerImages, '../../assets/images/Home/main/main-banner/', 'Hero-main-image.avif')
  },
  {
    id: "banner-2",
    title: "포인트 무조건 지급!",
    img: getImg(bannerImages, '../../assets/images/Home/main/main-banner/', 'Hero-event1.avif')
  },
  {
    id: "banner-3",
    title: "인기 식물 공짜로 득템하기",
    img: getImg(bannerImages, '../../assets/images/Home/main/main-banner/', 'Hero-event2.avif')
  },
  {
    id: "banner-4",
    title: "오늘의집 키친",
    img: getImg(bannerImages, '../../assets/images/Home/main/main-banner/', 'Hero-event3.avif')
  },
  {
    id: "banner-5",
    title: "오늘의집 스텐다드",
    img: getImg(bannerImages, '../../assets/images/Home/main/main-banner/', 'Hero-event4.avif')
  },
  {
    id: "banner-6",
    title: "30초 무료견적 신청",
    img: getImg(bannerImages, '../../assets/images/Home/main/main-banner/', 'Hero-event5.avif')
  },
  {
    id: "banner-7",
    title: "3월 결제 혜택 모아보기",
    img: getImg(bannerImages, '../../assets/images/Home/main/main-banner/', 'Hero-event6.avif')
  },
  {
    id: "banner-8",
    title: "포인트 혜택 받아가세요",
    img: getImg(bannerImages, '../../assets/images/Home/main/main-banner/', 'Hero-event3.avif')
  },
];

// 퀵메뉴
export const QuickMenu = [
  {
    id: "quick-1",
    title: "오세일",
    img: getImg(iconImages, '../../assets/images/Home/main/icons/', 'quick1.png'),
    path: "/"
  },
  {
    id: "quick-2",
    title: "오늘의딜",
    img: getImg(iconImages, '../../assets/images/Home/main/icons/', 'quick2.png'),
    path: "/"
  },
  {
    id: "quick-3",
    title: "집들이",
    img: getImg(iconImages, '../../assets/images/Home/main/icons/', 'quick3.png'),
    path: "/"
  },
  {
    id: "quick-4",
    title: "행운출첵",
    img: getImg(iconImages, '../../assets/images/Home/main/icons/', 'quick4.png'),
    path: "/"
  },
  {
    id: "quick-5",
    title: "패키지할인",
    img: getImg(iconImages, '../../assets/images/Home/main/icons/', 'quick5.png'),
    path: "/"
  },
  {
    id: "quick-6",
    title: "챌린지참여",
    img: getImg(iconImages, '../../assets/images/Home/main/icons/', 'quick6.webp'),
    path: "/"
  },
  {
    id: "quick-7",
    title: "오마트",
    img: getImg(iconImages, '../../assets/images/Home/main/icons/', 'quick7.png'),
    path: "/"
  },
  {
    id: "quick-8",
    title: "원하는날도착",
    img: getImg(iconImages, '../../assets/images/Home/main/icons/', 'quick8.png'),
    path: "/"
  },
  {
    id: "quick-9",
    title: "쉬운이사",
    img: getImg(iconImages, '../../assets/images/Home/main/icons/', 'quick9.png'),
    path: "/"
  },
  {
    id: "quick-10",
    title: "입주청소",
    img: getImg(iconImages, '../../assets/images/Home/main/icons/', 'quick10.png'),
    path: "/"
  }
];