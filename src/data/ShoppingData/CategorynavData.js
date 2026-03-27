const CategoryNavImages = import.meta.glob('../../assets/images/Shopping/CategoryNav/*.{avif,png,jpg,jpeg,webp}', { eager: true });

const getImg = (imgMap, folderPath, fileName) => {
  const path = `${folderPath}${fileName}`;
  return imgMap[path]?.default || ''; 
};

export const CategorynavData = [
    {
        id: "nav-1",
        title: "가구",
        img: getImg(CategoryNavImages, '../../assets/images/Shopping/CategoryNav/', 'CategoryNav1.avif')
    },
    {
        id: "nav-2",
        title: "패트릭",
        img: getImg(CategoryNavImages, '../../assets/images/Shopping/CategoryNav/', 'CategoryNav2.avif')
    },
    {
        id: "nav-3",
        title: "가전·디지털",
        img: getImg(CategoryNavImages, '../../assets/images/Shopping/CategoryNav/', 'CategoryNav3.avif')
    },
    {
        id: "nav-4",
        title: "주방용품",
        img: getImg(CategoryNavImages, '../../assets/images/Shopping/CategoryNav/', 'CategoryNav4.avif')
    },
    {
        id: "nav-5",
        title: "식품",
        img: getImg(CategoryNavImages, '../../assets/images/Shopping/CategoryNav/', 'CategoryNav5.avif')
    },
    {
        id: "nav-6",
        title: "데코·식물",
        img: getImg(CategoryNavImages, '../../assets/images/Shopping/CategoryNav/', 'CategoryNav6.avif')
    },
    {
        id: "nav-7",
        title: "조명",
        img: getImg(CategoryNavImages, '../../assets/images/Shopping/CategoryNav/', 'CategoryNav7.avif')
    },
    {
        id: "nav-8",
        title: "수납정리",
        img: getImg(CategoryNavImages, '../../assets/images/Shopping/CategoryNav/', 'CategoryNav8.avif')
    }
];