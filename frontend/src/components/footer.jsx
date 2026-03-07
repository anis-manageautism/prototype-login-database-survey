import React from 'react';
import styled, { css } from 'styled-components';
import './footer.css';

export const ArialBoldWhite14px = css`
  color: var(--white);
  font-family: var(--font-family-arial-bold);
  font-size: var(--font-size-xxs);
  font-weight: 700;
  font-style: normal;
`;

export const ArialRegularNormalWhite12px = css`
  color: var(--white);
  font-family: var(--font-family-arial-regular);
  font-size: var(--font-size-xxxs);
  font-weight: 400;
  font-style: normal;
`;

export const ArialBoldWhite12px = css`
  color: var(--white);
  font-family: var(--font-family-arial-bold);
  font-size: var(--font-size-xxxs);
  font-weight: 700;
  font-style: normal;
`;

const infoData = {
    text83: "© Manage Autism Ltd 2021",
    path3: "https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/path-3@1x.png",
    path2: "https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/path-2@1x.png",
    path1: "https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/path-1@1x.png",
};

const footerPageData = {
    text86: "Subscribe to News and Updates",
    text88: "152-160 Kemp House, City Road, EC14 9PU",
    aboutUs: "ABOUT US",
    workWithUs: "Work with Us",
    contactUs: "CONTACT US",
    faq: "FAQ",
    feedback: "FEEDBACK",
    privacyPolicy: "Privacy Policy",
    text89: "Terms and Conditions",
    infoProps: infoData,
};
  
const ABOUTUS = styled.div`
  ${ArialBoldWhite12px}
  position: absolute;
  top: 7px;
  left: 1179px;
  letter-spacing: 0;
  line-height: 36px;
  white-space: nowrap;
`;


const Text3 = styled.p`
  ${ArialRegularNormalWhite12px}
  position: absolute;
  top: 12px;
  left: 222px;
  letter-spacing: 0;
  line-height: 26px;
  white-space: nowrap;
`;



const WorkWithUs = styled.div`
  ${ArialRegularNormalWhite12px}
  position: absolute;
  top: 12px;
  left: 624px;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
`;

const CONTACTUS = styled.div`
  ${ArialBoldWhite12px}
  position: absolute;
  top: 7px;
  left: 1286px;
  letter-spacing: 0;
  line-height: 36px;
  white-space: nowrap;
`;

const FAQ = styled.div`
  ${ArialBoldWhite12px}
  position: absolute;
  top: 7px;
  left: 1412px;
  letter-spacing: 0;
  line-height: 36px;
  white-space: nowrap;
`;

const FEEDBACK = styled.div`
  ${ArialBoldWhite12px}
  position: absolute;
  top: 8px;
  left: 1472px;
  letter-spacing: 0;
  line-height: 36px;
  white-space: nowrap;
`;

const PrivacyPolicy = styled.div`
  ${ArialRegularNormalWhite12px}
  position: absolute;
  top: 11px;
  left: 720px;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
`;

const Text4 = styled.div`
  ${ArialRegularNormalWhite12px}
  position: absolute;
  top: 11px;
  left: 820px;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
`;

class Info extends React.Component {
    render() {
      const { text83, path3, path2, path1 } = this.props;
  
      return (
        <Info1>
          <Text2>{text83}</Text2>
          <Path3 src={path3} />
          <Path2 src={path2} />
          <Path1 src={path1} />
        </Info1>
      );
    }
  }
  
  const Info1 = styled.div`
    position: absolute;
    height: 50px;
    top: 0;
    left: 0;
    display: flex;
    padding: 14px 47px;
    align-items: center;
    min-width: 1920px;
    background-color: var(--dodger-blue2);
  `;
  
  const Text2 = styled.p`
    ${ArialRegularNormalWhite12px}
    min-height: 16px;
    align-self: flex-start;
    min-width: 147px;
    text-align: right;
    letter-spacing: 0;
    line-height: 20px;
    white-space: nowrap;
  `;
  
  const Path3 = styled.img`
    width: 14px;
    height: 14px;
    margin-left: 1580px;
    object-fit: cover;
  `;
  
  const Path2 = styled.img`
    width: 14px;
    height: 11px;
    margin-left: 29px;
    margin-bottom: 0.64px;
    object-fit: cover;
  `;
  
  const Path1 = styled.img`
    width: 7px;
    height: 14px;
    margin-left: 30px;
    object-fit: cover;
  `;
  
class FooterComponent extends React.Component {
    render()  {
        return  <div>
                  <footer>
                    <Footer1 {...footerPageData} />
                  </footer>
                </div>;
    }
}

export default FooterComponent;

class Footer1 extends React.Component {
    render() {
      const {
        text88,
        aboutUs,
        workWithUs,
        contactUs,
        faq,
        feedback,
        privacyPolicy,
        text89,
        infoProps,
      } = this.props;
  
      return (
         <div>
             <Info text83={infoProps.text83} path3={infoProps.path3} path2={infoProps.path2} path1={infoProps.path1} />
             <Text3>{text88}</Text3>
             <ABOUTUS>{aboutUs}</ABOUTUS>
             <WorkWithUs>{workWithUs}</WorkWithUs>
             <CONTACTUS>{contactUs}</CONTACTUS>
             <FAQ>{faq}</FAQ>
             <FEEDBACK>{feedback}</FEEDBACK>
             <PrivacyPolicy>{privacyPolicy}</PrivacyPolicy>
             <Text4>{text89}</Text4>
         </div>
      );
    }
  }



