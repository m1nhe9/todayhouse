// // 오늘의 딜, 베스트 상품처럼 '판매용 상품' 데이터

const shopImages = import.meta.glob('../../assets/images/Home/shop/**/*.{avif,png,jpg,jpeg,webp}', { eager: true });
const mainImages = import.meta.glob('../../assets/images/Home/main/**/*.{avif,png,jpg,jpeg,webp}', { eager: true });

// 2. 헬퍼 함수
const getImg = (imgMap, folderPath, fileName) => {
    const path = `${folderPath}${fileName}`;
    return imgMap[path]?.default || imgMap[path] || ''; 
};

const GLOBAL_DEADLINE = "2026-03-31T23:59:59";

// ✅ 기준 경로 (이 경로와 데이터의 경로가 합쳐져서 Vite glob와 일치하게 됩니다)
const SHOP_BASE = '../../assets/images/Home/shop/';

// 오늘의 딜
export const todaysDealData = [
  {
    id: "deal-1",
    brand: "서울우유",
    title: "서울우유 멸균우유 200mlx48개 외 골라담기",
    img: getImg(shopImages, `${SHOP_BASE}todays-deal/`, 'deal2.avif'),
    discount: "27%",
    price: 29420,
    specialPrice: false,
    deadline: GLOBAL_DEADLINE,
  },
  {
    id: "deal-2",
    brand: "도노도노",
    title: "[3/14 핫딜] 도노도노 기저귀갈이대/아기침대/블랭킷 모음전",
    img: getImg(shopImages, `${SHOP_BASE}todays-deal/`, 'deal1.avif'),
    discount: "29%",
    price: 159000,
    specialPrice: false,
    deadline: GLOBAL_DEADLINE,
  },
  {
    id: "deal-3",
    brand: "한샘",
    title: "한샘 키즈 BEST 단하루 특가 (침대/책장/옷장 등)",
    img: getImg(shopImages, `${SHOP_BASE}todays-deal/`, 'deal3.avif'),
    discount: "29%",
    price: 187000,
    specialPrice: false,
    deadline: GLOBAL_DEADLINE,
  },
  {
    id: "deal-4",
    brand: "원하는날도착",
    title: "실용만점 1인/2인/3인 소파 SALE",
    img: getImg(shopImages, `${SHOP_BASE}todays-deal/`, 'deal4.avif'),
    discount: "52%",
    price: 129000,
    specialPrice: true,
    deadline: GLOBAL_DEADLINE,
  },
];

// 베스트 데이터
export const bestData = [
  {
    id: "bestAll-1",
    brand: "헬로우슬립",
    title: "[최대20%쿠폰] NEW 카스테라 워싱 옥수수솜 간절기/사계절/한파 차렵이불세트-43컬러",
    img: getImg(shopImages, `${SHOP_BASE}best/all/`, 'best2.avif'),
    discount: "39%",
    price: 34900,
    specialPrice: true,
  },
  {
    id: "bestAll-2",
    brand: "수면밀도",
    title: "허리 디스크 환자가 만든 매트리스 S/SS/Q/K/LK 미디엄하드 S",
    img: getImg(shopImages, `${SHOP_BASE}best/all/`, 'best1.avif'),
    discount: "62%",
    price: 299000,
    specialPrice: true,
  },
  {
    id: "bestAll-3",
    brand: "아엠홈",
    title: "맞춤 비침없는 도톰 레이스/쉬폰커튼(나비주름/핀형/봉집)",
    img: getImg(shopImages, `${SHOP_BASE}best/all/`, 'best3.avif'),
    discount: "28%",
    price: 16800,
    specialPrice: true,
  },
  {
    id: "furniture-1",
    brand: "수면밀도",
    title: "허리 디스크 환자가 만든 매트리스 S/SS/Q/K/LK 미디엄하드 S",
    img: getImg(shopImages, `${SHOP_BASE}best/furniture/`, 'furniture1.avif'),
    discount: "62%",
    price: 299000,
    specialPrice: true,
  },
  {
    id: "furniture-2",
    brand: "데일리리빙",
    title: "[20%쿠폰] 드레스덴 정품 조야패브릭 호텔식 침대프레임 SS/Q/K/LK/CK(패널추가)",
    img: getImg(shopImages, `${SHOP_BASE}best/furniture/`, 'furniture2.avif'),
    discount: "50%",
    price: 199000,
    specialPrice: true,
  },
  {
    id: "furniture-3",
    brand: "보니애가구",
    title: "쿠폰가69.9만/크루저 블리넌패브릭 3세대 리클라이너 소파 슬라이딩 모션 쇼파 3인 4인용",
    img: getImg(shopImages, `${SHOP_BASE}best/furniture/`, 'furniture3.avif'),
    discount: "50%",
    price: 809000,
    specialPrice: true,
  },
  {
    id: "fabric-1",
    brand: "헬로우슬립",
    title: "[최대20%쿠폰] NEW 카스테라 워싱 옥수수솜 간절기/사계절/한파 차렵이불세트-43컬러",
    img: getImg(shopImages, `${SHOP_BASE}best/fabric/`, 'fabric1.avif'),
    discount: "39%",
    price: 34900,
    specialPrice: true,
  },
  {
    id: "fabric-2",
    brand: "아엠홈",
    title: "맞춤 비침없는 도톰 레이스/쉬폰커튼(나비주름/핀형/봉집)",
    img: getImg(shopImages, `${SHOP_BASE}best/fabric/`, 'fabric2.avif'),
    discount: "28%",
    price: 16800,
    specialPrice: true,
  },
  {
    id: "fabric-3",
    brand: "데코지오",
    title: "맞춤 브라우니 린넨 암막커튼 방한 겨울커튼 핀형/아일렛형/형상기억 49색상",
    img: getImg(shopImages, `${SHOP_BASE}best/fabric/`, 'fabric3.avif'),
    discount: "49%",
    price: 20200,
    specialPrice: true,
  }
];