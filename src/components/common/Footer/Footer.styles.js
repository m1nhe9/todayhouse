import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const StyleFooter = styled.footer `
    width: 100%;
    min-height: 300px;
    background-color: #f4f5f6;
`;

export const FooterContainer = styled.div `
    max-width: 1150px;
    margin: 0 auto;
    padding: 45px;
    display: flex; 
`;

export const FooterService = styled.section`
    color: #2f3438;
    width: 550px;
`;

export const FooterTitle = styled(Link)`
    font-size: 18px;
    font-weight: 700;
    color: #2f3438;
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    span {
        border-bottom: 1px solid transparent;
    }
    span:hover {
        border-bottom: 1px solid #2f3438;
    }
    i {
        font-size: 14px;
        margin-top: 3px;
    }
`;

export const ContactNumber = styled(Link)`
    font-size: 14px;
    color: #2f3438;
    font-weight: 400;

    .footer__phone {
        font-size: 16px;
        font-weight: 700;
        margin-right: 8px;
    }
`;

export const NoticeDays = styled.div`
    margin: 8px 15px 15px 10px;

    p {
        font-size: 11px;
        line-height: 20px;
        color: #222527;
    }
`;

export const ContactLinks = styled.div`
    font-size: 14px;
    font-weight: 400;
`;

export const FooterBtn = styled(Link)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 26px;
    padding: 0 12px;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    background-color: #fff;
    color: #2f3438;
    margin-bottom: 10px;

    &:hover {
        background-color: #f7f9fa;
    }
`;

export const FooterNav = styled.nav `
    display: flex;
    border-left: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
    width: 520px;
    padding: 0 25px;

    a {
        font-size: 12px;
        color: #2f3438;
        text-decoration: none;
        margin-bottom: 18px;
    }
    .footer__link--bold {
        font-weight: 700;
    }
`;

export const FooterNavGroup = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const FooterInfo = styled.section `
    width: 100%;
    font-size: 11px;
    margin-left: 25px;
`;

export const FooterCompany = styled.div `
    color: #222527a4;
`;

export const FooterBusiness = styled.div `
    
`;

export const BusinessFlex = styled.div `
    display: flex;
    align-items: center;
    gap: 3px;
    margin: 3px 0;
    .footer__link-underline {
        color: #2f3438c1;
        font-weight: 700;
        border-bottom: 1px solid transparent;
        &:hover {
            border-bottom: 1px solid #2f3438c1;
        }a {
        color: #222527a4;
        }
    }
    .footer__link-underline-span {
        color: #222527a4;
        border-bottom: 1px solid transparent;
        &:hover {
            border-bottom: 1px solid #2f3438c1;
        }
    }
`;

export const FooterEscrow = styled.p `
    margin-top: 18px;
    margin-bottom: 5px;
    font-size: 10px;
    letter-spacing: -0.3px;
    color: #222527a4;
    a {
        color: #2f3438c1;
        font-weight: 700;
    }
    .footer__link-underline {
        border-bottom: 1px solid transparent;
        &:hover {
            border-bottom: 1px solid #2f3438c1;
        }
    }
`;

export const FooterBottomRow = styled.div `
    color: #2f3438c1;
    justify-content: space-between;
    align-items: center;
`;

export const FooterCertifications = styled.div `
    display: flex;
    gap: 10px;
`;

export const CertItem = styled.div`
    border: 1px solid #2f34381b;
    padding: 4px 10px;
    display: flex;
    align-items: center;
    gap: 6px;
    img {
        width: 32px;
        height: 32px;
        object-fit: contain;
    }

    .footer__cert-text {
        p {
        font-size: 10px;
        line-height: 1.2;
        color: #828c94;
        margin: 0;
        }
    }
`;

export const CertImageOnly = styled(CertItem)`
    justify-content: center;
    width: 80px;
`;

export const FooterDisclaimer = styled.p `
    font-size: 10px;
    margin-top: 10px;
`;

export const FooterSns = styled.div `
    display: flex;
    gap: 6px;
    margin: 5px 0;
`;

export const FooterCopyright = styled.p `
    font-size: 10px;
    color: #828c94;
`;