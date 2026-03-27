import React, { useState } from 'react'; // useState 추가됨
import { Link } from "react-router-dom";
import * as F from './Footer.styles';

import ismsIcon from '../../../assets/images/common/isms-icon.png';
import isoIcon from '../../../assets/images/common/iso27001-icon.png';
import pcrIcon from '../../../assets/images/common/pcr-icon.png';

const commonImages = import.meta.glob('../../../assets/images/common/*.{png,jpg,jpeg,svg}', { eager: true });

const getCommonImg = (oldPath) => {
    // /images/를 ../../../assets/images/ 로 정확히 변경
    const newPath = oldPath.replace('/images/', '../../../assets/images/');
    return commonImages[newPath]?.default || oldPath;
};


// 개별 SNS 아이콘 컴포넌트 (Footer 함수 밖에 작성)
const SnsIcon = ({ defaultSrc, hoverSrc, alt }) => {
    const [isHover, setIsHover] = useState(false);
    return (
        <Link 
            to="/" 
            onMouseEnter={() => setIsHover(true)} 
            onMouseLeave={() => setIsHover(false)}
            style={{ display: 'inline-block', lineHeight: 0 }}
        >
            <img 
                src={isHover ? hoverSrc : defaultSrc} 
                alt={alt} 
                style={{ width: '33px', height: '33px' }} 
            />
        </Link>
    );
};

function Footer() {
    return (
        <F.StyleFooter>
            <F.FooterContainer>
                
                {/* 1. 상단: 고객센터 정보 영역 */}
                <F.FooterService>
                    <F.FooterTitle to="/">
                        <span>고객센터</span> 
                        <i className="fa-solid fa-angle-right"></i>
                    </F.FooterTitle>

                    <F.ContactNumber to="/">
                        <span className="footer__phone">1670-0876</span> 09:00~16:00
                    </F.ContactNumber>

                    <F.NoticeDays>
                        <p>· 평일: 전체 문의 상담</p>
                        <p>· 토요일, 공휴일: 오늘의집 직접배송 주문건 상담</p>
                        <p>· 일요일: 휴무</p>
                    </F.NoticeDays>

                    <F.ContactLinks>
                        <F.FooterBtn to="/">카톡 상담(평일 09:00~18:00)</F.FooterBtn>
                        <F.FooterBtn to="/">이메일 문의</F.FooterBtn>
                    </F.ContactLinks>
                </F.FooterService>

                {/* 2. 중단: 회사 정보 및 링크 리스트 */}
                <F.FooterNav>
                    <F.FooterNavGroup>
                        <Link to="/">회사소개</Link>
                        <Link to="/">제품정보</Link>
                        <Link to="/">이용약관</Link>
                        <Link to="/" className="footer__link--bold">개인정보 처리방침</Link>
                        <Link to="/">공지사항</Link>
                        <Link to="/">권리보호센터</Link>
                        <Link to="/">입점신청</Link>
                    </F.FooterNavGroup>
                    <F.FooterNavGroup>
                        <Link to="/">제휴/광고 문의</Link>
                        <Link to="/">시공파트너 안내</Link>
                        <Link to="/" className="footer__link--bold">파트너 개인정보 처리방침</Link>
                        <Link to="/">상품광고 소개</Link>
                        <Link to="/">고객의 소리</Link>
                        <Link to="/">결제대행 위탁사</Link>
                    </F.FooterNavGroup>
                </F.FooterNav>

                {/* 3. 하단: 사업자 정보 및 법적 고지 */}
                <F.FooterInfo>
                    <F.FooterCompany>
                        <p>(주)버킷플레이스 | 대표이사 이승재 | 서울 서초구 서초대로74길 4 삼성생명서초타워 25층, 27층</p>
                        <F.FooterBusiness>
                            <F.BusinessFlex>
                                <Link to="/" className="footer__link-underline-span">contact@bucketplace.net</Link>
                                <span className="divider">|</span>
                                <span> 사업자등록번호 119-86-91245</span>
                                <Link to="/" className="footer__link-underline">사업자정보확인</Link>
                            </F.BusinessFlex>
                            <span>통신판매업신고번호 제2018-서울서초-0580호</span>
                        </F.FooterBusiness>
                    </F.FooterCompany>

                    <F.FooterEscrow>
                        고객님이 현금결제한 금액에 대해 우리은행과 채무지급보증 계약을 체결하여 안전거래를 보장하고 있습니다. 
                        <Link to="/" className="footer__link-underline">서비스가입사실확인</Link>
                    </F.FooterEscrow>

                    {/* 인증 마크 & SNS */}
                    <F.FooterBottomRow>
                        <F.FooterCertifications>
                            <F.CertItem>
                                <img src={ismsIcon} alt="isms" />
                                <div className="footer__cert-text">
                                    <p>오늘의집 서비스 운영</p>
                                    <p>2024.09.08 ~ 2027.09.07</p>
                                </div>
                            </F.CertItem>

                            <F.CertImageOnly>
                                <img src={isoIcon} alt="iso27001" />
                            </F.CertImageOnly>

                            <F.CertImageOnly>
                                <img src={pcrIcon} alt="pcr" />
                            </F.CertImageOnly>
                        </F.FooterCertifications>

                        <F.FooterDisclaimer>
                            (주)버킷플레이스는 통신판매중개자로 거래 당사자가 아니므로, 판매자가 등록한 상품정보 및 거래 등에 대해 책임을 지지 않습니다. 
                            단, (주)버킷플레이스가 판매자로 등록 판매한 상품은 판매자로서 책임을 부담합니다.
                        </F.FooterDisclaimer>

                        {/* SNS 영역 */}
                        <F.FooterSns>
                            <SnsIcon 
                                defaultSrc={getCommonImg("/images/common/Toneup-youtube.png")} 
                                hoverSrc={getCommonImg("/images/common/Tonedown-youtube.png")} 
                                alt="유튜브" 
                            />
                            <SnsIcon 
                                defaultSrc={getCommonImg("/images/common/Toneup-Instagram.png")} 
                                hoverSrc={getCommonImg("/images/common/Tonedown-Instagram.png")} 
                                alt="인스타그램" 
                            />
                            <SnsIcon 
                                defaultSrc={getCommonImg("/images/common/Toneup-Facebook.png")} 
                                hoverSrc={getCommonImg("/images/common/Tonedown-Facebook.png")} 
                                alt="페이스북" 
                            />
                            <SnsIcon 
                                defaultSrc={getCommonImg("/images/common/Toneup-Naver.png")} 
                                hoverSrc={getCommonImg("/images/common/Tonedown-Naver.png")} 
                                alt="네이버포스트" 
                            />
                        </F.FooterSns>
                    </F.FooterBottomRow>

                    <F.FooterCopyright>Copyright 2014. bucketplace, Co., Ltd. All rights reserved.</F.FooterCopyright>
                </F.FooterInfo>
            </F.FooterContainer>
        </F.StyleFooter>
    );
}

export default Footer;