const recommendImages = import.meta.glob('../../assets/images/Shopping/RecommendList/*.{avif,png,jpg,jpeg,webp}', { eager: true });

const getImg = (imgMap, folderPath, fileName) => {
  const path = `${folderPath}${fileName}`;
  return imgMap[path]?.default || ''; 
};

export  const recommendData = [
    {
        id: "recommend-1",
        type: "",
        brand: "타카타카",
        title: "new30컬러 유아KC인증 스탠다드/항균 WP워터쉴드 방수매트리스커버",
        discount: 71,
        price: 6900,
        img: getImg(recommendImages, '../../assets/images/Shopping/RecommendList/', 'RecommendList10.avif'),
        // 🚀 핵심: 뱃지 유무를 데이터로 정의
        isOnly: false,
        isPick: false,
    },
// ======================================================================================
    {
        id: "recommend-event-1",
        type: "EVENT_CARD",
        brand: "지누스",
        title: "오늘의집 LIVE",
        eventDesc: "푹신한 침대 매트리스 특가! 지누스 3월24일(화) 저녁 8시 라이브",
        img: getImg(recommendImages, '../../assets/images/Shopping/RecommendList/', 'RecommendList-event2.jpg')
    },
// ======================================================================================
    {
        id: "recommend-2",
        type: "",
        brand: "코튼리빙",
        title: "누적리뷰 11만!! 40수 호텔컬렉션 200g 호텔수건/타월 10장",
        discount: 60,
        price: 31900,
        img: getImg(recommendImages, '../../assets/images/Shopping/RecommendList/', 'RecommendList8.avif'),
        // 🚀 핵심: 뱃지 유무를 데이터로 정의
        isOnly: true,
        isPick: true,
    },
    {
        id: "recommend-3",
        type: "",
        brand: "스타일링홈",
        title: "[1+1]100% 완벽 빛차단 간편설치 창문/거실/안방 아일렛/핀형/형상기억 암막커튼",
        discount: 60,
        price: 31900,
        img: getImg(recommendImages, '../../assets/images/Shopping/RecommendList/', 'RecommendList7.avif'),
        // 🚀 핵심: 뱃지 유무를 데이터로 정의
        isOnly: true,
        isPick: false,
    },
    {
        id: "recommend-4",
        type: "",
        brand: "헬로우슬립",
        title: "[최대15%쿠폰]NEW 카스테라 워싱 옥수수솜 간절기/사계절/한파 차렵이불세트-43컬러",
        discount: 39,
        price: 34900,
        img: getImg(recommendImages, '../../assets/images/Shopping/RecommendList/', 'RecommendList6.avif'),
        // 🚀 핵심: 뱃지 유무를 데이터로 정의
        isOnly: false,
        isPick: true,
    },
    {
        id: "recommend-5",
        type: "",
        brand: "한빛카페트",
        title: "헤링본 워셔블 사이잘룩 사계절 러그 카페트 9size 8colors",
        discount: 40,
        price: 8900,
        img: getImg(recommendImages, '../../assets/images/Shopping/RecommendList/', 'RecommendList5.avif'),
        // 🚀 핵심: 뱃지 유무를 데이터로 정의
        isOnly: false,
        isPick: false,
    },
    {
        id: "recommend-6",
        type: "",
        brand: "아엠홈",
        title: "맞춤 비침없는 도톰 레이스/쉬폰커튼(나비주름/핀형/봉집)",
        discount: 28,
        price: 16800,
        img: getImg(recommendImages, '../../assets/images/Shopping/RecommendList/', 'RecommendList4.avif'),
        // 🚀 핵심: 뱃지 유무를 데이터로 정의
        isOnly: false,
        isPick: false,
    },
    {
        id: "recommend-7",
        type: "",
        brand: "베이직톤",
        title: "고밀도 순면60수 사각사각 호텔침구 클린코튼 사계절/간절기/여름 냉감 옥수수솜 차렵이불세트",
        discount: 40,
        price: 67700,
        img: getImg(recommendImages, '../../assets/images/Shopping/RecommendList/', 'RecommendList3.avif'),
        // 🚀 핵심: 뱃지 유무를 데이터로 정의
        isOnly: true,
        isPick: false,
    },
    {
        id: "recommend-8",
        type: "",
        brand: "픽켄드",
        title: "두부처럼 몽글몽글한 두부이불 사계절 차렵이불세트 22컬러",
        discount: 26,
        price: 39900,
        img: getImg(recommendImages, '../../assets/images/Shopping/RecommendList/', 'RecommendList2.avif'),
        // 🚀 핵심: 뱃지 유무를 데이터로 정의
        isOnly: true,
        isPick: false,
    },
    // ======================================================================================
    {
        id: "recommend-event-2",
        type: "EVENT_CARD",
        brand: "쿠쿠",
        title: "오늘의집 LIVE",
        eventDesc: "쿠쿠 IH압력밥솥 최저가! 3월 26일(목) 저녁 8시 라이브",
        img: getImg(recommendImages, '../../assets/images/Shopping/RecommendList/', 'RecommendList-event1.avif'),
    },
// ======================================================================================
    {
        id: "recommend-9",
        type: "",
        brand: "데코지오",
        title: "맞춤 브라우니 린넨 암막커튼 방한 겨울커튼 핀형/아일렛형/형상기억 49색상",
        discount: 49,
        price: 20200,
        img: getImg(recommendImages, '../../assets/images/Shopping/RecommendList/', 'RecommendList1.avif'),
        // 🚀 핵심: 뱃지 유무를 데이터로 정의
        isOnly: false,
        isPick: false,
    },
    {
        id: "recommend-10",
        type: "",
        brand: "뿌리앨르",
        title: "높은 재구매율 퐁신퐁신 16컬러 사계절/여름용 유어메이트 워싱 차렵이불 풀세트",
        discount: 32,
        price: 26900,
        img: getImg(recommendImages, '../../assets/images/Shopping/RecommendList/', 'RecommendList9.avif'),
        // 🚀 핵심: 뱃지 유무를 데이터로 정의
        isOnly: false,
        isPick: false,
    },
];