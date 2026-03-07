import React from 'react';
import {styled, css}  from 'styled-components';


class Front extends React.Component {
  render() {
    return <Footer34 {...footer34Data} data-id="5c89b4c6-bc52-47ed-951f-fcd71018dbbe:an-component-instance" />;
  }
}

export default Front;


class Footer34 extends React.Component {
  render() {
    const {
      text86,
      text88,
      aboutUs,
      workWithUs,
      contactUs,
      faq,
      feedback,
      privacyPolicy,
      text89,
      component7Props,
      infoProps,
    } = this.props;

    return (
      <Footer3 data-id="5c89b4c6-bc52-47ed-951f-fcd71018dbbe">
        <Subscribe data-id="32c61aef-14f6-4200-ad31-93dfae07c1d6">
          <Text1 data-id="4b7ac908-43d8-4d4c-80a5-8766dba953b2">{text86}</Text1>
          <Component7 data-id="0dd7b896-1d8d-49e4-b989-44854abacad3:an-component-instance">
            {component7Props.children}
          </Component7>
        </Subscribe>
        <OverlapGroup data-id="an|DYE6wLct">
          <Info
            text83={infoProps.text83}
            path3={infoProps.path3}
            path2={infoProps.path2}
            path1={infoProps.path1}
            data-id="748ec8ec-9bab-47a0-875c-aa08fe17533f:an-component-instance"
          />
          <Text2 data-id="e2e5b523-0eb2-49c8-a949-bbbe4e40ff4a">{text88}</Text2>
          <ABOUTUS data-id="31c50853-7057-43b2-abbc-f75a468aa3cb">{aboutUs}</ABOUTUS>
          <WorkWithUs data-id="08fb5ff5-0cb7-4cd4-ab48-df4a89fae46f">{workWithUs}</WorkWithUs>
          <CONTACTUS data-id="219e2584-f1e5-4299-86b7-2a621f75581c">{contactUs}</CONTACTUS>
          <FAQ data-id="19b37710-81cc-49b4-a15a-7eea06c2cee4">{faq}</FAQ>
          <FEEDBACK data-id="3a602826-0c71-4a1c-b313-f84ac6dfdc22">{feedback}</FEEDBACK>
          <PrivacyPolicy data-id="d128ecdc-5614-4d1d-98f2-4e182f6ec59c">{privacyPolicy}</PrivacyPolicy>
          <Text3 data-id="9e53b579-7b07-4f59-b021-0db5253ccfa6">{text89}</Text3>
        </OverlapGroup>
      </Footer3>
    );
  }
}

const Footer3 = styled.div`
  width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 365px;
`;

const Subscribe = styled.div`
  width: 215px;
  position: relative;
  margin-left: 236px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 68px;
`;

const Text1 = styled.p`
  min-height: 18px;
  font-family: var(--font-family-arial-bold);
  font-weight: 700;
  color: var(--dodger-blue);
  font-size: var(--font-size-xxs);
  letter-spacing: 0;
  line-height: 14px;
  white-space: nowrap;
`;

const OverlapGroup = styled.div`
  width: 1920px;
  height: 50px;
  position: relative;
  margin-top: 247px;
`;

const Text2 = styled.p`
  ${ArialRegularNormalWhite12px}
  position: absolute;
  top: 12px;
  left: 222px;
  letter-spacing: 0;
  line-height: 26px;
  white-space: nowrap;
`;

const ABOUTUS = styled.div`
  ${ArialBoldWhite12px}
  position: absolute;
  top: 7px;
  left: 1179px;
  letter-spacing: 0;
  line-height: 36px;
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

const Text3 = styled.div`
  ${ArialRegularNormalWhite12px}
  position: absolute;
  top: 11px;
  left: 820px;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
`;



class Component7 extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <Component data-id="0dd7b896-1d8d-49e4-b989-44854abacad3">
        <SUBSCRIBE data-id="08186231-7483-4028-8874-0b11b8c96568">{children}</SUBSCRIBE>
      </Component>
    );
  }
}

const Component = styled.div`
  height: 40px;
  margin-top: 10px;
  display: flex;
  padding: 10px 17px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 120px;
  background-color: var(--dodger-blue);
  border-radius: 4px;
`;

const SUBSCRIBE = styled.div`
  ${ArialBoldWhite14px}
  min-height: 18px;
  min-width: 84px;
  text-align: center;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
`;



class Info extends React.Component {
  render() {
    const { text83, path3, path2, path1 } = this.props;

    return (
      <Info1 data-id="748ec8ec-9bab-47a0-875c-aa08fe17533f">
        <Copyright data-id="1fc3581f-b866-4e2e-819d-7d0bc4b52c6e">{text83}</Copyright>
        <Path3 data-id="b279588f-5da9-4dd6-984e-1f9c7c01eeb1" src={path3} />
        <Path2 data-id="a94a58bf-7f1f-47cc-979e-d7218677dcf8" src={path2} />
        <Path1 data-id="f9663a3a-d1e1-4491-92e3-2adaeac06cfd" src={path1} />
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
  background-color: var(--dodger-blue);
`;

const Copyright = styled.p`
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
  margin-left: 30px;
  margin-bottom: 0.64px;
  object-fit: cover;
`;

const Path1 = styled.img`
  width: 7px;
  height: 14px;
  margin-left: 30px;
  object-fit: cover;
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

export const ArialBoldWhite14px = css`
  color: var(--white);
  font-family: var(--font-family-arial-bold);
  font-size: var(--font-size-xxs);
  font-weight: 700;
  font-style: normal;
`;
const component7Data = {
    children: "SUBSCRIBE",
};

const infoData = {
    text83: "© Manage Autism Ltd 2021",
    path3: "https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/path-3@1x.png",
    path2: "https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/path-2@1x.png",
    path1: "https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/path-1@1x.png",
};

const footer34Data = {
    text86: "Subscribe to News and Updates",
    text88: "152-160 Kemp House, City Road, EC14 9PU",
    aboutUs: "ABOUT US",
    workWithUs: "Work with Us",
    contactUs: "CONTACT US",
    faq: "FAQ",
    feedback: "FEEDBACK",
    privacyPolicy: "Privacy Policy",
    text89: "Terms and Conditions",
    component7Props: component7Data,
    infoProps: infoData,
};

