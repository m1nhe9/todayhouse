const shoppingBannerImages = import.meta.glob('../../assets/images/Shopping/Banner/*.{avif,png,jpg,jpeg,webp}', { eager: true });

const getImg = (imgMap, folderPath, fileName) => {
  const path = `${folderPath}${fileName}`;
  return imgMap[path]?.default || ''; 
};

const SHOPPING_BANNER_BASE = '../../assets/images/Shopping/Banner/';


export const bannerData = [
    {
        id: "banner-1",
        title: "우리집 털동생을 위한 취향저격 선물",
        img: getImg(shoppingBannerImages, '../../assets/images/Shopping/Banner/', 'Banner1.avif')
    },
    {
        id: "banner-2",
        title: "봄을 담은 식탁, 이달의 키친웨어",
        img: getImg(shoppingBannerImages, '../../assets/images/Shopping/Banner/', 'Banner2.avif')
    },
    {
        id: "banner-3",
        title: "하루종일 편안하게 에싸 특가",
        img: getImg(shoppingBannerImages, '../../assets/images/Shopping/Banner/', 'Banner3.avif')
    },
    {
        id: "banner-4",
        title: "공간 한 칸의 변화 일상을 완성하는 순간",
        img: getImg(shoppingBannerImages, '../../assets/images/Shopping/Banner/', 'Banner4.avif')
    },
    {
        id: "banner-5",
        title: "3월 이사왔어요! 입주템 특가",
        img: getImg(shoppingBannerImages, '../../assets/images/Shopping/Banner/', 'Banner5.avif')
    },
    {
        id: "banner-6",
        title: "린클 음식물처리기 오늘 저녁 8시 방송",
        img: getImg(shoppingBannerImages, '../../assets/images/Shopping/Banner/', 'Banner6.avif')
    },
];