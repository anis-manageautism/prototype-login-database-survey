import React from 'react';
import styled , { css } from 'styled-components';
import './page1.css';


export const ArialRegularNormalDodgerBlue17px = css`
  color: var(--dodger-blue);
  font-family: var(--font-family-arial-regular);
  font-size: 17px;
  font-weight: 400;
  font-style: normal;
`;

export const ArialRegularNormalWhite12px = css`
  color: var(--white);
  font-family: var(--font-family-arial-regular);
  font-size: var(--font-size-xxxs);
  font-weight: 400;
  font-style: normal;
`;

export const ArialBoldVulcan20px = css`
  color: var(--vulcan);
  font-family: var(--font-family-arial-bold);
  font-size: var(--font-size-m2);
  font-weight: 700;
  font-style: normal;
`;

export const ArialBoldWhite12px = css`
  color: var(--white);
  font-family: var(--font-family-arial-bold);
  font-size: var(--font-size-xxxs);
  font-weight: 700;
  font-style: normal;
`;

export const ArialRegularNormalWhite20px = css`
  color: var(--white);
  font-family: var(--font-family-arial-regular);
  font-size: var(--font-size-m2);
  font-weight: 400;
  font-style: normal;
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

// const FAQStyle = styled.div`
//   ${ArialBoldWhite12px}
//   position: absolute;
//   top: 7px;
//   left: 1412px;
//   letter-spacing: 0;
//   line-height: 36px;
//   white-space: nowrap;
// `;

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

const Text15 = styled.div`
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
      <Info1 data-id="7c898135-55de-474f-b21d-b29eaf9b5657">
        <Copyright data-id="ae1c2b44-009d-48f7-82a8-a3346f0d14cd">{text83}</Copyright>
        <Path3 data-id="a8a9ab89-2cdc-4fb8-82ac-fc778c67eb89" src={path3} />
        <Path2 data-id="cb9a6e86-19af-4a9a-ab0c-c99be69fcc6c" src={path2} />
        <Path1 data-id="a2c7803e-7559-402e-ba95-1d1847bc0263" src={path1} />
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

// const Path2Style = styled.img`
//   width: 14px;
//   height: 11px;
//   margin-left: 30px;
//   margin-bottom: 0.64px;
//   object-fit: cover;
// `;

// const Path1Style = styled.img`
//   width: 7px;
//   height: 14px;
//   margin-left: 30px;
//   object-fit: cover;
// `;


export const PoppinsRegularNormalShadowBlue13px = css`
  color: var(--shadow-blue);
  font-family: var(--font-family-poppins-regular);
  font-size: var(--font-size-xxs);
  font-weight: 400;
  font-style: normal;
`;

export const ArialRegularNormalWhite18px = css`
  color: var(--white);
  font-family: var(--font-family-arial-regular);
  font-size: var(--font-size-s2);
  font-weight: 400;
  font-style: normal;
`;

export const ArialBoldWhite16px = css`
  color: var(--white);
  font-family: var(--font-family-arial-bold);
  font-size: var(--font-size-xs2);
  font-weight: 700;
  font-style: normal;
`;

export const ArialBoldDodgerBlue20px = css`
  color: var(--dodger-blue);
  font-family: var(--font-family-arial-bold);
  font-size: var(--font-size-m2);
  font-weight: 700;
  font-style: normal;
`;

export const PoppinsRegularNormalShadowBlue21px = css`
  color: var(--shadow-blue);
  font-family: var(--font-family-poppins-regular);
  font-size: 21px;
  font-weight: 400;
  font-style: normal;
`;

export const ArialBoldDodgerBlue8px = css`
  color: var(--dodger-blue);
  font-family: var(--font-family-arial-bold);
  font-size: 8px;
  font-weight: 700;
  font-style: normal;
`;

export const ArialRegularNormalVulcan18px = css`
  color: var(--vulcan);
  font-family: var(--font-family-arial-regular);
  font-size: var(--font-size-s2);
  font-weight: 400;
  font-style: normal;
`;



export const PoppinsRegularNormalComet14px = css`
  color: var(--comet);
  font-family: var(--font-family-poppins-regular);
  font-size: var(--font-size-xxs2);
  font-weight: 400;
  font-style: normal;
`;

export const CircularstdBookNormalBlack23px = css`
  color: var(--black);
  font-family: var(--font-family-circularstd-book);
  font-size: 23px;
  font-weight: 400;
  font-style: normal;
`;

export const SegoeuiBoldDodgerBlue32px = css`
  color: var(--dodger-blue);
  font-family: var(--font-family-segoeui-bold);
  font-size: 32px;
  font-weight: 700;
  font-style: normal;
`;

export const ArialRegularNormalDodgerBlue14px = css`
  color: var(--dodger-blue);
  font-family: var(--font-family-arial-regular);
  font-size: var(--font-size-xxs2);
  font-weight: 400;
  font-style: normal;
`;

export const ArialBoldDodgerBlue12px = css`
  color: var(--dodger-blue);
  font-family: var(--font-family-arial-bold);
  font-size: var(--font-size-xxxs);
  font-weight: 700;
  font-style: normal;
`;

export const ArialBoldWhite20px = css`
  color: var(--white);
  font-family: var(--font-family-arial-bold);
  font-size: var(--font-size-m2);
  font-weight: 700;
  font-style: normal;
`;

export const ArialBoldCodGray14px = css`
  color: var(--cod-gray);
  font-family: var(--font-family-arial-bold);
  font-size: var(--font-size-xxs2);
  font-weight: 700;
  font-style: normal;
`;

export const ArialBoldBlack12px = css`
  color: var(--black);
  font-family: var(--font-family-arial-bold);
  font-size: var(--font-size-xxxs);
  font-weight: 700;
  font-style: normal;
`;

export const SegoeuiBoldDodgerBlue31px = css`
  color: var(--dodger-blue);
  font-family: var(--font-family-segoeui-bold);
  font-size: var(--font-size-xl);
  font-weight: 700;
  font-style: normal;
`;

export const PoppinsMediumWhite16px = css`
  color: var(--white);
  font-family: var(--font-family-poppins-medium);
  font-size: var(--font-size-xs2);
  font-weight: 500;
  font-style: normal;
`;

export const ArialNormalBlack18px = css`
  color: var(--black);
  font-family: var(--font-family-arial);
  font-size: var(--font-size-s2);
`;

export const ArialRegularNormalBlack18px = css`
  color: var(--black);
  font-family: var(--font-family-arial-regular);
  font-size: var(--font-size-s2);
  font-weight: 400;
  font-style: normal;
`;

export const ArialNarrowNormalWhite18px = css`
  color: var(--white);
  font-family: var(--font-family-arial-narrow);
  font-size: var(--font-size-s2);
  font-weight: 400;
  font-style: normal;
`;

export const ArialBoldBlack16px = css`
  color: var(--black);
  font-family: var(--font-family-arial-bold);
  font-size: var(--font-size-xs2);
  font-weight: 700;
  font-style: normal;
`;

export const PoppinsRegularNormalVulcan12px = css`
  color: var(--vulcan);
  font-family: var(--font-family-poppins-regular);
  font-size: var(--font-size-xxxs);
  font-weight: 400;
  font-style: normal;
`;

export const PoppinsRegularNormalShadowBlue12px = css`
  color: var(--shadow-blue);
  font-family: var(--font-family-poppins-regular);
  font-size: var(--font-size-xxxs);
  font-weight: 400;
  font-style: normal;
`;

export const PoppinsSemiBoldVulcan12px = css`
  color: var(--vulcan);
  font-family: var(--font-family-poppins-semibold);
  font-size: var(--font-size-xxxs);
  font-weight: 600;
  font-style: normal;
`;

export const Border2pxSail = css`
  border: 2px solid var(--sail);
`;

export const Border1pxDoveGray = css`
  border: 1px solid var(--dove-gray);
`;

export const Border1pxBlack = css`
  border: 1px solid var(--black);
`;
const component32Data = {
    place: "Home",
    logs: "Logs",
    links: "Links",
    faq: "FAQ",
};

const navBar73Data = {
    component3Props: component32Data,
};

const component42Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/path-3@1x.png",
};

const component5Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/path-2@1x.png",
};

const component6Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/path-1@1x.png",
};

const navBar63Data = {
    logs: "LOGS",
    diary: "DIARY",
    gp: "GP",
    refferals: "REFFERALS",
    schools: "SCHOOLS",
    councils: "COUNCILS",
    private: "PRIVATE",
    importantDocs: "IMPORTANT DOCS",
    spanText: "MESSAGES",
    spanText2: " 3",
    contacts: "CONTACTS",
    faq: "FAQ",
    help: "HELP",
    settings: "SETTINGS",
    logout: "LOGOUT",
    component4Props: component42Data,
    component5Props: component5Data,
    component6Props: component6Data,
};

const onlineData = {
    children: "Online",
};

const online2Data = {
    children: "Offline",
    className: "offline",
};

const legendData = {
    onlineProps: onlineData,
    online2Props: online2Data,
};

const infoData = {
    text83: "© Manage Autism Ltd 2021",
    path3: "https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/path-3@1x.png",
    path2: "https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/path-2@1x.png",
    path1: "https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/path-1@1x.png",
};

const footer33Data = {
    text84: "152-160 Kemp House, City Road, EC14 9PU",
    aboutUs: "ABOUT US",
    workWithUs: "Work with Us",
    contactUs: "CONTACT US",
    faq: "FAQ",
    feedback: "FEEDBACK",
    privacyPolicy: "Privacy Policy",
    text85: "Terms and Conditions",
    infoProps: infoData,
};
class Page1 extends React.Component {
  render() {
    return (
      <div className="container-center-horizontal">
        <div className="profile-1 screen" data-id="167f0175-6cf9-4dc6-b42c-8ca0495473fe">
          <FlexRow data-id="an|EBWpTgVY">
            <ManageAutismLogo
              data-id="f7937aad-8e57-41de-9edd-5fda39d14855"
              src="https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/manage-autism-logo-1@1x.png"
            />
            <OverlapGroup24 data-id="an|6lI93vtT">
              <Path83150
                data-id="21ec9eea-de7f-462b-8010-bbfe1a8a79cd"
                src="https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/path-83150@1x.png"
              />
              <NavBar73
                component3Props={navBar73Data.component3Props}
                data-id="598d720a-6617-4d80-9df4-807351e77b65:an-component-instance"
              />
            </OverlapGroup24>
            <OverlapGroup23 data-id="an|zCy6pdGd">
              <Bell
                path83086="https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/path-83086@1x.png"
                path83087="https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/path-83087@1x.png"
                data-id="a0d5d26e-4638-4b84-9733-a27c33328d8f:an-component-instance"
              />
              <MessageCircle data-id="578eaa0c-2caa-490a-b11b-ff045d89f4ce:an-component-instance" />
              <Number data-id="636a0c2c-bf0b-456c-a0b8-c2b61e8f9ef5">7</Number>
            </OverlapGroup23>
            <OverlapGroup20 data-id="an|0nzm7698">
              <Mail
                path83196="https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/path-83196@1x.png"
                path83197="https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/path-83197@1x.png"
                data-id="d62125d9-302f-4a10-b160-84daee185b6e:an-component-instance"
              />
              <MessageCircle
                className="message-circle-2"
                data-id="bca04655-c85a-4a7a-8ea2-cc051c357424:an-component-instance"
              />
              <Number1 data-id="4e0c23d0-4527-4b7f-b4a6-a9c3af508abd">3</Number1>
            </OverlapGroup20>
            <UsersAvatarPhoto2States data-id="edb8be3f-a3a3-481e-bb0c-66b3b9ccd10f:an-component-instance">
              AR
            </UsersAvatarPhoto2States>
          </FlexRow>
          <FlexRow1 data-id="an|yd8gIq6p">
            <OverlapGroup18 data-id="an|t4gMzoHv">
              <NavBar63 {...navBar63Data} data-id="00ef2964-66e0-482d-9cf4-c8c88fec9be5:an-component-instance" />
              <Profile
                src="https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/union-1@1x.png"
                data-id="04c4a23e-b462-4cb2-9743-79b21da88479:an-component-instance"
              />
              <AayanRahman data-id="0d4e2808-55c3-4ef5-9b1f-a7329e62cbcf">Aayan Rahman</AayanRahman>
              <X1602202165yrs data-id="96804139-94dc-4234-8e4e-29df73b8fd71">16-02-20216 (5yrs)</X1602202165yrs>
              <Text1 data-id="813dcfa9-ad72-40ce-b2b3-032c28e88f4b">
                Galliard School, <br />
                Reception
              </Text1>
              <Aayan374gmailcom data-id="f2890206-ca05-4727-91c9-d03f6f0c559f">aayan374@gmail.com</Aayan374gmailcom>
            </OverlapGroup18>
            <FlexCol data-id="an|d9khHgjx">
              <FlexCol1 data-id="an|uEWGA6Qy">
                <OverlapGroup13 data-id="an|L2FbnPKC">
                  <Rectangle147824 data-id="ec13178e-a439-4dd4-87fe-6ce13a660fad"></Rectangle147824>
                  <CTA7 data-id="f698a92d-c516-49e5-b3fd-320e0b67efea:an-component-instance">ASD</CTA7>
                  <Address data-id="adc84c50-31fe-4718-a123-9b2e10ddf846">
                    14 Latymer Raod, Edmonton,N9 9PU, London, UK
                  </Address>
                  <Diagnosis data-id="74bad1ae-7603-4a03-bc0f-70d7e2ce6e70">Diagnosis:</Diagnosis>
                  <CTA7 className="cta-1" data-id="d321c153-5a74-471a-a845-6237d2eb4fa2:an-component-instance">
                    Sensory Processing <br />
                    Disorder
                  </CTA7>
                  <CTA7 className="cta-2" data-id="72564a18-323e-4cb1-b77a-55025e99a1b6:an-component-instance">
                    ADHD
                  </CTA7>
                  <CTA7 className="cta-3" data-id="42396f61-c512-49be-b2bb-2d5e1b32f16f:an-component-instance">
                    Epilespy
                  </CTA7>
                  <Symptoms data-id="1952f83c-e854-4655-99c0-6c762c881e2b">Symptoms:</Symptoms>
                  <Address1 data-id="d99dfda8-b785-4a5a-8dd7-7b3273529cac">Address:</Address1>
                  <Text3 data-id="bfab7fc6-390c-4db7-b59f-ffde00185e33">
                    -Speech Delay
                    <br />
                    -Social Communication
                    <br />
                    difficulties
                  </Text3>
                  <Hyperactivity data-id="8a7fe072-1619-4558-b357-052fcd09c5d1">-Hyperactivity</Hyperactivity>
                  <Text4 data-id="b217628a-71c3-4567-967e-4deddd34143a">
                    -jumping, -putting things his mouth
                    <br />
                    -running, -over and under sensitive
                    <br />
                    -grinding teeth, -chewing clothes, <br />
                    -hot and cold, -sound blocking, -Sleep,
                    <br />
                    -Food, water,
                  </Text4>
                  <Text5 data-id="728a2892-8ecf-466d-9258-f8a872b1bfb7">-early stages of 2 episodes</Text5>
                  <CTA2 data-id="648fee67-75c7-4be3-8d86-85e82f419213:an-component-instance">Summary</CTA2>
                  <CTA2 className="cta-5" data-id="c6279ece-0128-4d67-ae0b-ed40b4042b1e:an-component-instance">
                    Invite
                  </CTA2>
                  <Text7 data-id="0dd2403b-fc27-4105-b052-c91bb04a5e4a">Home&gt; Profile Updates</Text7>
                  <Text13 data-id="d7c14975-d905-4824-9418-699094501562">14:10,Tuesday, 14 April 2021</Text13>
                </OverlapGroup13>
                <OverlapGroup2 data-id="an|r9rWlCrY">
                  <Bg data-id="a50631b5-8feb-41ff-9ada-3259a446d56b"></Bg>
                  <Chart data-id="71f5b2e9-1fc6-4bfe-9a94-2aa8972fd09e">
                    <Value data-id="510e9efc-5c22-4c2d-a8a9-052a99312471">
                      <X1k data-id="215759f0-c4cc-43e1-bd1d-13a46c134c80">
                        <X1k1 data-id="566d4abc-88f1-4173-bddc-a9c8ecc1fdd8">1000</X1k1>
                      </X1k>
                      <X800 data-id="4436f44a-f113-4658-ad4a-0463f1f15e16:an-component-instance">800</X800>
                      <X800 className="x600" data-id="68fc74b0-35bd-46d8-afcf-574193f4c7ee:an-component-instance">
                        600
                      </X800>
                      <X800 className="x400" data-id="f533e13f-dc9a-412e-a74f-591bd9874b6b:an-component-instance">
                        400
                      </X800>
                      <X200 data-id="9dc65a70-21e2-46fd-90ac-914cef25ad0e">
                        <X1k1 data-id="389eb3a7-8138-4ef2-bf7f-17ce0fa47800">200</X1k1>
                      </X200>
                      <X0 data-id="5300b122-5e8f-4928-869a-259338ec9efe">
                        <X1k1 data-id="0b077efc-8fb3-482a-ae10-849f5cb42661">0</X1k1>
                      </X0>
                    </Value>
                    <ScrollGroup data-id="2c49275b-a8e3-43d3-97e6-b22e217aa68d">
                      <OverlapGroup1 data-id="an|f9pCz7U4">
                        <Month data-id="1b53253b-0f19-4c5d-a3f7-f4f6de4033bc">
                          <WidgetsElementsChartGraphLineBar
                            name="Jan"
                            data-id="c2255598-dfca-4fe9-a0a9-cf3cdf00e97b:an-component-instance"
                          />
                          <WidgetsElementsChartGraphLineBar
                            name="Feb"
                            className="widgets--eleme-graph-line-bar-1"
                            data-id="aa9c3438-85b3-400d-aae1-b81c487f8fb5:an-component-instance"
                          />
                          <WidgetsElementsChartGraphLineBar
                            name="Mar"
                            className="widgets--eleme-graph-line-bar-2"
                            data-id="7fd892d8-1a63-42db-9028-0cf350c9bf7e:an-component-instance"
                          />
                          <WidgetsElementsChartGraphLineBar
                            name="Apr"
                            className="widgets--eleme-graph-line-bar-3"
                            data-id="280db61f-6cee-4db0-b526-22a267cc13f4:an-component-instance"
                          />
                          <WidgetsElementsChartGraphLineBar
                            name="May"
                            className="widgets--eleme-graph-line-bar-4"
                            data-id="88d55f47-cd57-4208-8491-e4191eb6ed71:an-component-instance"
                          />
                          <WidgetsElementsChartGraphLineBar
                            name="Jun"
                            className="widgets--eleme-graph-line-bar-5"
                            data-id="6791c634-8f8e-40a6-be70-f07a54339817:an-component-instance"
                          />
                          <WidgetsElementsChartGraphLineBar
                            name="Jul"
                            className="widgets--eleme-graph-line-bar-6"
                            data-id="c02a676a-6280-4b82-a043-e0dd8b869573:an-component-instance"
                          />
                          <WidgetsElementsChartGraphLineBar
                            name="Aug"
                            className="widgets--eleme-graph-line-bar-7"
                            data-id="7079a109-08dc-45fd-b9ee-c3eb197596bf:an-component-instance"
                          />
                          <WidgetsElementsChartGraphLineBar2
                            jan="Sep"
                            data-id="42a8d75e-c2c0-4b97-880d-a8f3c6c805dc:an-component-instance"
                          />
                          <WidgetsElementsChartGraphLineBar
                            name="Oct"
                            className="widgets--eleme-graph-line-bar-8"
                            data-id="8d56ddb2-1d30-41e3-9489-2c1bd9285af4:an-component-instance"
                          />
                          <WidgetsElementsChartGraphLineBar
                            name="Nov"
                            className="widgets--eleme-graph-line-bar-9"
                            data-id="b0ae2e10-0490-4921-ae47-ff795cdec48e:an-component-instance"
                          />
                          <WidgetsElementsChartGraphLineBar
                            name="Dec"
                            className="widgets--eleme-graph-line-bar-10"
                            data-id="f098588a-140f-4158-ada9-870963552dbf:an-component-instance"
                          />
                        </Month>
                        <Month1 data-id="94e39c8e-7d6b-4cd5-90f0-58f704fa1122">
                          <WidgetsElementsChartGraphLineBar
                            name="Feb"
                            data-id="45143530-45bb-4c8a-8ccc-f3e059535385:an-component-instance"
                          />
                          <WidgetsElementsChartGraphLineBar
                            name="Mar"
                            className="widgets--eleme-graph-line-bar-12"
                            data-id="65591a1c-7a4b-4aca-8805-d918b9725e3c:an-component-instance"
                          />
                          <WidgetsElementsChartGraphLineBar
                            name="Apr"
                            className="widgets--eleme-graph-line-bar-13"
                            data-id="c8484d98-8a1f-412d-9ee4-a314152621aa:an-component-instance"
                          />
                          <WidgetsElementsChartGraphLineBar
                            name="May"
                            className="widgets--eleme-graph-line-bar-14"
                            data-id="d677b6db-3590-4ca4-ae16-ac98c2b3eb0c:an-component-instance"
                          />
                          <WidgetsElementsChartGraphLineBar
                            name="Jun"
                            className="widgets--eleme-graph-line-bar-15"
                            data-id="aa67271a-5d40-4aec-acd2-dcdf05366365:an-component-instance"
                          />
                          <WidgetsElementsChartGraphLineBar
                            name="Jul"
                            className="widgets--eleme-graph-line-bar-16"
                            data-id="3843c457-d525-4f8f-9535-14b242fcc3fc:an-component-instance"
                          />
                          <WidgetsElementsChartGraphLineBar
                            name="Aug"
                            className="widgets--eleme-graph-line-bar-17"
                            data-id="031e1be0-9c52-4b32-b265-d035c762b786:an-component-instance"
                          />
                          <WidgetsElementsChartGraphLineBar
                            name="Sep"
                            className="widgets--eleme-graph-line-bar-18"
                            data-id="8e48aa1b-94b6-4c47-8e13-a6f1b6b5c6bf:an-component-instance"
                          />
                          <WidgetsElementsChartGraphLineBar
                            name="Oct"
                            className="widgets--eleme-graph-line-bar-19"
                            data-id="b18a9f05-f69d-48e2-b716-478c675683aa:an-component-instance"
                          />
                          <WidgetsElementsChartGraphLineBar
                            name="Nov"
                            className="widgets--eleme-graph-line-bar-20"
                            data-id="f836f61d-298e-4898-b198-974e40abe525:an-component-instance"
                          />
                          <WidgetsElementsChartGraphLineBar
                            name="Dec"
                            className="widgets--eleme-graph-line-bar-21"
                            data-id="95ce1bc9-b416-4762-b51a-5fce4c84e029:an-component-instance"
                          />
                        </Month1>
                        <Line
                          data-id="b8611b99-8300-4a7a-8239-a8e1c2085e7f"
                          src="https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/line@1x.png"
                        />
                        <Line1
                          data-id="dd80f149-0c42-4f57-b73d-02b03891e8b2"
                          src="https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/line-1@1x.png"
                        />
                        <Line2
                          data-id="37a1ddfb-d8fc-4146-8af3-a6cd5948d30b"
                          src="https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/line-2@1x.png"
                        />
                        <Line3
                          data-id="6254e818-22a3-42fc-a5d1-463183b787ee"
                          src="https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/line-3@1x.png"
                        />
                        <TooltipPointerDown
                          bg="https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/bg@1x.png"
                          x750="576"
                          onlineSales="Offline"
                          titlee="September, 2019"
                          data-id="ed219ced-a221-46af-9910-e12e2980168c:an-component-instance"
                        />
                        <Line4
                          data-id="54fa0e31-edb5-4246-b7d4-86ad4d3330d1"
                          src="https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/line-4@1x.png"
                        />
                        <Line5
                          data-id="2a504b93-25bc-4d4a-8749-e5448acf04e4"
                          src="https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/line-5@1x.png"
                        />
                        <Line6
                          data-id="06eb8a8b-7052-41e5-ab93-676c73c39282"
                          src="https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/line-6@1x.png"
                        />
                      </OverlapGroup1>
                    </ScrollGroup>
                  </Chart>
                  <Legend
                    onlineProps={legendData.onlineProps}
                    online2Props={legendData.online2Props}
                    data-id="839cae54-bd65-4d98-aafc-82773b38866b:an-component-instance"
                  />
                  <Dropdown data-id="6729f2cb-ead0-4997-9080-2a9ec2d4189d">
                    <Last12Months data-id="d2ced583-7f5c-4b75-ba59-e1ae8c73d55f">Last 3 Months</Last12Months>
                    <Icon data-id="659bd249-0e4b-4629-b3f2-b015214faf43">
                      <Color
                        data-id="c13af108-7ebc-42d5-8bcd-3a0dbb0eca01"
                        src="https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/color@1x.png"
                      />
                    </Icon>
                  </Dropdown>
                  <Title data-id="8fad3011-3af2-46ec-b875-d8bd8ec22b69">Your Child Development Logs</Title>
                </OverlapGroup2>
                <FlexRow2 data-id="an|vPbxRP7Z">
                  <Title1 data-id="7dd1e1b4-5ba6-43a8-933d-5b58dd4be769">Goals And Developement</Title1>
                  <Group1257 data-id="2a0f9c2f-cfd9-486f-bbd5-251b30e5b367">
                    <Group1238 data-id="0e818087-5a1d-412c-84e9-ea28d6b0ab72">
                      <Last6Months data-id="1805d06e-14e9-48c8-b504-9b001406ea5a">Last 6 months</Last6Months>
                      <Path1045
                        data-id="fff225db-0419-4015-9640-eeb0e55a8f78"
                        src="https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/path-1045@1x.png"
                      />
                    </Group1238>
                  </Group1257>
                </FlexRow2>
                <MESSAGES data-id="4e9a8a1e-1300-460b-9c1b-a4cea8c6dffa">MESSAGES</MESSAGES>
              </FlexCol1>
              <FlexRow3 data-id="an|dzw2lLWW">
                <FlexCol2 data-id="an|vB4l7625">
                  <TryNewFood data-id="b6890ad8-4665-4fce-ad67-2ecaa99174d4">Try new food</TryNewFood>
                  <TryNewActivities data-id="f58a9b1c-6265-4322-8546-a1d1e416a129">Try new Activities</TryNewActivities>
                  <NewWords data-id="5c959509-0d5e-42ec-a654-1afd260feb42">New words</NewWords>
                  <NewGestures data-id="4807b0a0-459d-4d95-99ff-43cc0f3c91a5">New Gestures</NewGestures>
                  <PottyTraining data-id="9744f4f7-d629-4990-a643-b4537ee180da">Potty Training</PottyTraining>
                </FlexCol2>
                <FlexCol3 data-id="an|zxpqm91u">
                  <OverlapGroup19 data-id="an|3vkjpQ2L">
                    <ProgressBar22 data-id="07b7fd40-2d9f-4371-937e-1c5cf4780154:an-component-instance" />
                    <ProgressBar22 data-id="9b785ab0-f20f-4f1e-9c8b-93ac7b921c2d:an-component-instance" />
                    <ProgressBar2 data-id="469b91b0-10f6-4b0e-be9d-a71881faf0ec">
                      <Rectangle621 data-id="a9f00fe0-0cb6-40c7-9711-dd8f11135e6c"></Rectangle621>
                    </ProgressBar2>
                    <OverlapGroup9 data-id="an|P1DdR5Nf">
                      <Percent data-id="f6d9e5a5-877a-4d89-b3e0-297542d7e50a">70%</Percent>
                    </OverlapGroup9>
                  </OverlapGroup19>
                  <OverlapGroup22 data-id="an|iu1GDcdB">
                    <ProgressBar22
                      className="progress-bar-2-2"
                      data-id="8e091144-2e46-46aa-bbc6-69243cc03d17:an-component-instance"
                    />
                    <OverlapGroup8 data-id="an|EjXg69OJ">
                      <Percent data-id="bc408a0e-611c-4ea1-9967-11ed286f0b20">60%</Percent>
                    </OverlapGroup8>
                  </OverlapGroup22>
                  <OverlapGroup21 data-id="an|xlr1tuuL">
                    <OverlapGroup7 data-id="an|u1QtcNrn">
                      <Percent data-id="7834f7f2-cd23-47e8-9b5f-76413540b867">27%</Percent>
                    </OverlapGroup7>
                    <ProgressBar21 data-id="9fa81f15-4376-4962-bfa8-e7e124331012">
                      <Rectangle6211 data-id="0e3254ef-1728-4318-b665-ab4d0ab2c1c0"></Rectangle6211>
                    </ProgressBar21>
                  </OverlapGroup21>
                  <OverlapGroup16 data-id="an|dfiT08BV">
                    <ProgressBar22
                      className="progress-bar-2-3"
                      data-id="42a1e017-9aea-4f72-bc57-12c60bf327fb:an-component-instance"
                    />
                    <OverlapGroup8 data-id="an|MvbQhRZb">
                      <Percent data-id="fd99a196-399a-40d7-9487-73837b71d913">60%</Percent>
                    </OverlapGroup8>
                    <OverlapGroup11 data-id="an|3jQ4woDA">
                      <Percent data-id="ba1719a5-138d-4986-84ea-41d3edd5a210">34%</Percent>
                    </OverlapGroup11>
                  </OverlapGroup16>
                  <ProgressBar22 data-id="ade26967-35e2-4cfd-91dc-fca52de7eec5">
                    <Rectangle6212 data-id="af4c431e-3333-4038-93e3-3e36203a0c3c"></Rectangle6212>
                  </ProgressBar22>
                </FlexCol3>
                <FlexCol4 data-id="an|rCc7w7yp">
                  <OverlapGroup15 data-id="an|kTjJP32h">
                    <PostPreview data-id="369d55cb-4d18-4c7c-9ee0-88337cd32577">
                      <OverlapGroup4 data-id="an|9MqT9FiT">
                        <GPSUZANA data-id="0ab294eb-5455-4ef5-bc2e-0b7cebbf6757">GP: SUZANA</GPSUZANA>
                        <Text6 data-id="11831545-4004-4f6e-a37d-c510ba97d6aa">
                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                          anim.
                        </Text6>
                      </OverlapGroup4>
                      <FlexRow4 data-id="an|HkBZuxCZ">
                        <Likes data-id="b794acb6-a270-40dd-8344-0ca3ad152bf7">
                          <Component707
                            src="https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/heart-1@1x.png"
                            data-id="7f417d32-db14-47b1-95d7-d8736855291e:an-component-instance"
                          />
                          <Number2 data-id="ec2ba450-fc37-43a4-97e7-0d9a86384e82">609</Number2>
                        </Likes>
                        <Comments data-id="e79fe031-d406-40cd-ab11-77613a06ae84">
                          <Component717
                            src="https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/chat-1@1x.png"
                            data-id="32ff1005-1cfc-468b-9aa5-5599d01fd8d1:an-component-instance"
                          />
                          <Number3 data-id="dd43eb3e-6e1f-4011-9d74-37ef4678bddc">120</Number3>
                        </Comments>
                      </FlexRow4>
                    </PostPreview>
                    <Text10 data-id="403f619b-2f2a-425d-a1e7-9f1e0fd6c0e5">10:20AM, TUES, 13. 04. 2021</Text10>
                  </OverlapGroup15>
                  <OverlapGroup14 data-id="an|9pVIMl3u">
                    <PostPreview data-id="8c018e0a-c4ff-42f0-b0be-ff6fe07d17b0">
                      <OverlapGroup4 data-id="an|6fbsCofg">
                        <OTEMMA data-id="b9cc7a22-80d1-4b44-b291-c918f520aff4">OT: EMMA</OTEMMA>
                        <Text6 data-id="1e2c8f57-58a2-410c-add1-0171b271883d">
                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                          anim.
                        </Text6>
                      </OverlapGroup4>
                      <FlexRow5 data-id="an|nseZA8CJ">
                        <Likes1 data-id="ed96f6fa-870b-4683-8e15-8886f3b2cede">
                          <Component707
                            src="https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/heart-1@1x.png"
                            data-id="5861e6d0-f11d-4229-beef-150115e71eeb:an-component-instance"
                          />
                          <Number4 data-id="244af4cb-db51-4e1e-beca-41ba0d3aea23">609</Number4>
                        </Likes1>
                        <Comments1 data-id="6c1b78e1-8706-4f61-aa56-8d020e357e73">
                          <Component717
                            src="https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/chat-1@1x.png"
                            className="component-71-8"
                            data-id="d39d2f07-6a02-4510-8bb8-121e32d89d57:an-component-instance"
                          />
                          <Number3 data-id="663843b3-c6a9-44e6-a54a-5d333c9384b0">120</Number3>
                        </Comments1>
                      </FlexRow5>
                    </PostPreview>
                    <Text11 data-id="76e94623-438f-4143-97ec-3aa8b720189c">9:30AM, TUES, 13. 04. 2021</Text11>
                  </OverlapGroup14>
                  <OverlapGroup17 data-id="an|kem7FVC7">
                    <PostPreview1 data-id="5020aadd-6b51-4297-93cd-b5b3ceee4f5e">
                      <OverlapGroup4 data-id="an|4kpKetJL">
                        <OTEMMA data-id="a88e5a3d-21e0-448a-a735-35d036d42255">DIETICIAN: SARA</OTEMMA>
                        <Text6 data-id="a01b44c1-f718-4dae-85af-1536575392f7">
                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                          anim.
                        </Text6>
                      </OverlapGroup4>
                      <FlexRow6 data-id="an|SBFDybjJ">
                        <Likes2 data-id="66924008-af9e-467c-a36c-d0ac1d9c6149">
                          <Component707
                            src="https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/heart-1@1x.png"
                            className="component-70-9"
                            data-id="5fb3521e-285b-405d-af89-bdcc6bd5c3fb:an-component-instance"
                          />
                          <Number5 data-id="bbb2f6f0-c493-4a07-a6d6-a15cbd14ac2b">609</Number5>
                        </Likes2>
                        <Comments2 data-id="db74b1a3-8b63-49b5-9e70-9fc0cad31dbd">
                          <Component717
                            src="https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/chat-1@1x.png"
                            data-id="0dd3fa3d-9069-4246-9ec2-bc9231dd3cee:an-component-instance"
                          />
                          <Number3 data-id="f9de0389-d3db-4bab-9a10-248fbe271323">120</Number3>
                        </Comments2>
                      </FlexRow6>
                    </PostPreview1>
                    <Text12 data-id="c98da928-bd12-43bd-86f2-d104126e106c">16:45PM, MON, 13. 04. 2021</Text12>
                  </OverlapGroup17>
                </FlexCol4>
              </FlexRow3>
              <FlexCol5 data-id="an|EzBV0gRx">
                <FlexRow7 data-id="an|9bYTF7yl">
                  <Path1229
                    data-id="e4f939ad-da3d-4ead-bd3f-bc715c4b3b05"
                    src="https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/path-1229@1x.png"
                  />
                  <ProductsSoldLabel data-id="86bfed0c-7d7e-488c-a834-6154f99c4bea">
                    <TargetsGoals data-id="defcc2ba-2a4f-4e34-949a-c35a5fe557c4">Targets Goals</TargetsGoals>
                  </ProductsSoldLabel>
                  <Ellipse359 data-id="e9107ab5-92bd-4d33-a2f9-8113bf9ceed1"></Ellipse359>
                  <ProductsSoldLabel1 data-id="0db86543-b60f-4ca0-8728-e7d38a27cf84">
                    <Achived data-id="f2bf7d47-e611-433d-979b-8ddc047e3b7e">Achived</Achived>
                  </ProductsSoldLabel1>
                </FlexRow7>
                <FlexRow8 data-id="an|sl5B2Lzp">
                  <CTA8
                    spanText="EDIT"
                    spanText2=""
                    data-id="cde64d18-0d42-4eb4-9c55-6941f8d8d636:an-component-instance"
                  />
                  <CTA9 data-id="6c467124-2a98-475b-acb7-34a3cfbefcf1:an-component-instance">NEW DAILY LOG</CTA9>
                </FlexRow8>
              </FlexCol5>
            </FlexCol>
          </FlexRow1>
          <Footer33 {...footer33Data} data-id="0bd70aad-1b63-4c64-83f8-a8ed69d90326:an-component-instance" />
        </div>
      </div>
    );
  }
}

export default Page1;
const FlexRow = styled.div`
  position: relative;
  margin-right: 17px;
  display: flex;
  align-items: center;
  min-width: 1861px;
`;

const ManageAutismLogo = styled.img`
  width: 334px;
  height: 104px;
  object-fit: cover;
`;

const OverlapGroup24 = styled.div`
  width: 362px;
  height: 27px;
  position: relative;
  margin-left: 916px;
  margin-top: 7.01px;
`;

const Path83150 = styled.img`
  position: absolute;
  width: 91px;
  height: 27px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const OverlapGroup23 = styled.div`
  width: 33px;
  height: 35px;
  position: relative;
  margin-left: 100px;
  margin-bottom: 0.7px;
`;

const Number = styled.div`
  ${ArialBoldCodGray14px}
  position: absolute;
  top: 3px;
  left: 20px;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
`;

const OverlapGroup20 = styled.div`
  width: 48px;
  height: 32px;
  position: relative;
  margin-left: 13px;
  margin-bottom: 4px;
`;

const Number1 = styled.div`
  ${ArialBoldCodGray14px}
  position: absolute;
  top: 3px;
  left: 35px;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
`;

const FlexRow1 = styled.div`
  height: 2095px;
  margin-top: 15px;
  display: flex;
  align-items: flex-start;
  min-width: 1920px;
`;

const OverlapGroup18 = styled.div`
  width: 214px;
  height: 2077px;
  position: relative;
  align-self: flex-end;
`;

const AayanRahman = styled.div`
  ${ArialBoldWhite20px}
  position: absolute;
  top: 117px;
  left: 36px;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
`;

const X1602202165yrs = styled.div`
  ${ArialBoldWhite16px}
  position: absolute;
  top: 169px;
  left: 39px;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
`;

const Text1 = styled.div`
  ${ArialBoldWhite16px}
  position: absolute;
  top: 212px;
  left: 48px;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const Aayan374gmailcom = styled.div`
  ${ArialBoldWhite16px}
  position: absolute;
  top: 139px;
  left: 29px;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
`;

const FlexCol = styled.div`
  width: 1706px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 1627px;
`;

const FlexCol1 = styled.div`
  width: 1706px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 1068px;
`;

const OverlapGroup13 = styled.div`
  width: 1706px;
  height: 230px;
  position: relative;
`;

const Rectangle147824 = styled.div`
  ${Border1pxDoveGray}
  position: absolute;
  width: 1706px;
  height: 212px;
  top: 18px;
  left: 0;
  background-color: var(--malibu);
  opacity: 0.2;
`;

const Address = styled.div`
  ${ArialBoldVulcan20px}
  position: absolute;
  top: 25px;
  left: 281px;
  letter-spacing: 0;
  line-height: 14px;
  white-space: nowrap;
`;

const Diagnosis = styled.div`
  ${ArialBoldVulcan20px}
  position: absolute;
  top: 64px;
  left: 105px;
  letter-spacing: 0;
  line-height: 15px;
  white-space: nowrap;
`;

const Symptoms = styled.div`
  ${ArialBoldVulcan20px}
  position: absolute;
  top: 112px;
  left: 106px;
  letter-spacing: 0;
  line-height: 14px;
  white-space: nowrap;
`;

const Address1 = styled.div`
  ${ArialBoldVulcan20px}
  position: absolute;
  top: 24px;
  left: 105px;
  letter-spacing: 0;
  line-height: 15px;
  white-space: nowrap;
`;

const Text3 = styled.div`
  ${ArialRegularNormalVulcan18px}
  position: absolute;
  top: 111px;
  left: 281px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Hyperactivity = styled.div`
  ${ArialRegularNormalVulcan18px}
  position: absolute;
  top: 110px;
  left: 521px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Text4 = styled.div`
  ${ArialRegularNormalVulcan18px}
  position: absolute;
  top: 111px;
  left: 761px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Text5 = styled.div`
  ${ArialRegularNormalVulcan18px}
  position: absolute;
  top: 110px;
  left: 1078px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Text7 = styled.div`
  ${ArialBoldBlack16px}
  position: absolute;
  top: 0;
  left: 3px;
  text-align: center;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
`;

const Text13 = styled.div`
  ${ArialRegularNormalVulcan18px}
  position: absolute;
  top: 23px;
  left: 1249px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const OverlapGroup2 = styled.div`
  width: 1152px;
  height: 495px;
  position: relative;
  margin-top: 28px;
  margin-left: 73px;
`;

const Bg = styled.div`
  position: absolute;
  width: 591px;
  height: 326px;
  top: 6px;
  left: 0;
  background-color: var(--white);
  border-radius: 6px;
  box-shadow: 0px 1px 4px #15223214;
`;

const Chart = styled.div`
  position: absolute;
  height: 428px;
  top: 67px;
  left: 25px;
  display: flex;
  align-items: flex-end;
  min-width: 1127px;
`;

const Value = styled.div`
  ${PoppinsRegularNormalShadowBlue21px}
  ${PoppinsRegularNormalShadowBlue21px}
${PoppinsRegularNormalShadowBlue21px}
${PoppinsRegularNormalShadowBlue21px}
${PoppinsRegularNormalShadowBlue21px}
${PoppinsRegularNormalShadowBlue21px}
            width: 49px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 428px;
`;

const X1k = styled.div`
  width: 49px;
  height: 29px;
  margin-right: -0.07px;
  display: flex;
  align-items: flex-end;
`;

const X1k1 = styled.div`
  height: 31px;
  flex: 1;
  text-align: right;
  letter-spacing: 0.15px;
  line-height: 36px;
  white-space: nowrap;
`;

const X200 = styled.div`
  width: 41px;
  height: 29px;
  margin-top: 50px;
  margin-right: -1.45px;
  display: flex;
  align-items: flex-end;
`;

const X0 = styled.div`
  width: 15px;
  height: 29px;
  margin-top: 56px;
  margin-right: -2px;
  display: flex;
  align-items: flex-end;
`;

const ScrollGroup = styled.div`
  margin-left: 49px;
  margin-bottom: 3.99px;
  display: flex;
  align-items: flex-start;
  min-width: 1029px;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;

const OverlapGroup1 = styled.div`
  width: 2200px;
  height: 368px;
  position: relative;
  margin-left: -586px;
`;

const Month = styled.div`
  position: absolute;
  height: 368px;
  top: 0;
  left: 1087px;
  display: flex;
  align-items: flex-start;
  min-width: 1111px;
`;

const Month1 = styled.div`
  position: absolute;
  height: 368px;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 1012px;
`;

const Line = styled.img`
  position: absolute;
  width: 1110px;
  height: 136px;
  top: 140px;
  left: 1090px;
  object-fit: cover;
`;

const Line1 = styled.img`
  position: absolute;
  width: 1122px;
  height: 136px;
  top: 140px;
  left: 1px;
  object-fit: cover;
`;

const Line2 = styled.img`
  position: absolute;
  width: 1078px;
  height: 125px;
  top: 95px;
  left: 1107px;
  object-fit: cover;
`;

const Line3 = styled.img`
  position: absolute;
  width: 1093px;
  height: 121px;
  top: 95px;
  left: 16px;
  object-fit: cover;
`;

const Line4 = styled.img`
  position: absolute;
  width: 1321px;
  height: 116px;
  top: 56px;
  left: 879px;
  object-fit: cover;
`;

const Line5 = styled.img`
  position: absolute;
  width: 1321px;
  height: 95px;
  top: 255px;
  left: 879px;
  object-fit: cover;
`;

const Line6 = styled.img`
  position: absolute;
  width: 1321px;
  height: 92px;
  top: 174px;
  left: 879px;
  object-fit: cover;
`;

const Dropdown = styled.div`
  position: absolute;
  width: 123px;
  height: 24px;
  top: 36px;
  left: 446px;
  display: flex;
  justify-content: flex-end;
`;

const Last12Months = styled.div`
  ${PoppinsRegularNormalComet14px}
  margin-right: 2.0px;
  text-align: right;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Icon = styled.div`
  display: flex;
  padding: 8px 5.9px;
  align-items: flex-end;
  min-width: 24px;
  opacity: 0.9;
`;

const Color = styled.img`
  width: 12px;
  height: 7px;
  object-fit: cover;
`;

const Title = styled.div`
  position: absolute;
  top: 0;
  left: 30px;
  font-family: var(--font-family-poppins-semibold);
  font-weight: 600;
  color: var(--vulcan);
  font-size: var(--font-size-s2);
  letter-spacing: 0.11px;
  line-height: 18px;
  white-space: nowrap;
`;

const FlexRow2 = styled.div`
  height: 79px;
  margin-top: 189px;
  margin-left: 182.19px;
  display: flex;
  align-items: flex-start;
  min-width: 920px;
`;

const Title1 = styled.h1`
  min-height: 57px;
  min-width: 511px;
  font-family: var(--font-family-poppins-semibold);
  font-weight: 600;
  color: var(--vulcan);
  font-size: 39px;
  letter-spacing: 0.24px;
  line-height: 39px;
  white-space: nowrap;
`;

const Group1257 = styled.div`
  ${Border1pxBlack}
  height: 65px;
  align-self: flex-end;
  margin-left: 178px;
  display: flex;
  padding: 11.4px 19.3px;
  align-items: flex-start;
  min-width: 231px;
`;

const Group1238 = styled.div`
  height: 31px;
  display: flex;
  align-items: flex-end;
  min-width: 189px;
`;

const Last6Months = styled.div`
  ${CircularstdBookNormalBlack23px}
  min-height: 33px;
  margin-bottom: -1px;
  min-width: 144px;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const Path1045 = styled.img`
  width: 20px;
  height: 10px;
  margin-left: 26px;
  margin-bottom: 4.26px;
  object-fit: cover;
`;

const MESSAGES = styled.div`
  min-height: 28px;
  align-self: flex-end;
  margin-top: 19px;
  margin-right: 386px;
  min-width: 99px;
  font-family: var(--font-family-segoeui-bold);
  font-weight: 700;
  color: var(--vulcan);
  font-size: 19px;
  letter-spacing: 0;
  line-height: 19px;
  white-space: nowrap;
`;

const FlexRow3 = styled.div`
  height: 407px;
  align-self: center;
  margin-top: 4px;
  margin-left: 59.27px;
  display: flex;
  align-items: flex-start;
  min-width: 1587px;
`;

const FlexCol2 = styled.div`
  width: 277px;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 381px;
`;

const TryNewFood = styled.div`
  ${SegoeuiBoldDodgerBlue31px}
  min-height: 43px;
  min-width: 194px;
  letter-spacing: 0;
  line-height: 31px;
  white-space: nowrap;
`;

const TryNewActivities = styled.div`
  ${SegoeuiBoldDodgerBlue32px}
  min-height: 45px;
  align-self: flex-start;
  margin-top: 40px;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
`;

const NewWords = styled.div`
  ${SegoeuiBoldDodgerBlue32px}
  min-height: 45px;
  margin-top: 32px;
  margin-right: 6.21px;
  min-width: 170px;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
`;

const NewGestures = styled.div`
  ${SegoeuiBoldDodgerBlue31px}
  min-height: 43px;
  margin-top: 48px;
  margin-right: 1.89px;
  min-width: 202px;
  letter-spacing: 0;
  line-height: 31px;
  white-space: nowrap;
`;

const PottyTraining = styled.div`
  ${SegoeuiBoldDodgerBlue32px}
  min-height: 45px;
  margin-top: 40px;
  margin-right: 9.66px;
  min-width: 214px;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
`;

const FlexCol3 = styled.div`
  width: 603px;
  margin-left: 55px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 405px;
`;

const OverlapGroup19 = styled.div`
  width: 603px;
  height: 67px;
  position: relative;
`;

const ProgressBar2 = styled.div`
  ${Border2pxSail}
  position: absolute;
  width: 603px;
  height: 34px;
  top: 33px;
  left: 0;
  display: flex;
  background-color: var(--alice-blue);
  border-radius: 10px;
`;

const Rectangle621 = styled.div`
  margin-right: 162.1px;
  flex: 1;
  width: 440.87664794921875px;
  background-color: var(--dodger-blue);
  border-radius: 10px;
`;

const OverlapGroup9 = styled.div`
  position: absolute;
  height: 56px;
  top: -1px;
  left: 398px;
  display: flex;
  padding: 13px 23.1px;
  align-items: flex-start;
  min-width: 82px;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/union-26-1@1x.png);
  background-size: cover;
  background-position: 50% 50%;
`;

const Percent = styled.div`
  ${ArialRegularNormalDodgerBlue17px}
  min-height: 21px;
  letter-spacing: 0;
  line-height: 17px;
  white-space: nowrap;
`;

const OverlapGroup22 = styled.div`
  width: 603px;
  height: 81px;
  position: relative;
  margin-top: 4px;
`;

const OverlapGroup8 = styled.div`
  position: absolute;
  height: 56px;
  top: -1px;
  left: 311px;
  display: flex;
  padding: 13px 23.1px;
  align-items: flex-start;
  min-width: 82px;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/union-26-1@1x.png);
  background-size: cover;
  background-position: 50% 50%;
`;

const OverlapGroup21 = styled.div`
  width: 603px;
  height: 84px;
  position: relative;
  margin-top: 1px;
`;

const OverlapGroup7 = styled.div`
  position: absolute;
  height: 56px;
  top: -1px;
  left: 106px;
  display: flex;
  padding: 13.6px 22.4px;
  align-items: flex-start;
  min-width: 82px;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/union-26-1@1x.png);
  background-size: cover;
  background-position: 50% 50%;
`;

const ProgressBar21 = styled.div`
  ${Border2pxSail}
  position: absolute;
  width: 603px;
  height: 34px;
  top: 50px;
  left: 0;
  display: flex;
  background-color: var(--alice-blue);
  border-radius: 10px;
`;

const Rectangle6211 = styled.div`
  width: 160.13905334472656px;
  background-color: var(--dodger-blue);
  border-radius: 10px;
`;

const OverlapGroup16 = styled.div`
  width: 603px;
  height: 128px;
  position: relative;
  margin-top: 4px;
`;

const OverlapGroup11 = styled.div`
  position: absolute;
  height: 56px;
  top: 74px;
  left: 135px;
  display: flex;
  padding: 11.5px 22.7px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 82px;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/union-26-1@1x.png);
  background-size: cover;
  background-position: 50% 50%;
`;

const ProgressBar22 = styled.div`
  ${Border2pxSail}
  width: 603px;
  height: 34px;
  margin-top: 3px;
  display: flex;
  background-color: var(--alice-blue);
  border-radius: 10px;
`;

const Rectangle6212 = styled.div`
  width: 179.9093017578125px;
  background-color: var(--dodger-blue);
  border-radius: 10px;
`;

const FlexCol4 = styled.div`
  width: 490px;
  margin-left: 162px;
  margin-top: 5.89px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 382px;
`;

const OverlapGroup15 = styled.div`
  width: 490px;
  height: 114px;
  position: relative;
`;

const PostPreview = styled.div`
  position: absolute;
  width: 490px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 7px 33.3px;
  align-items: flex-start;
  min-height: 114px;
  background-color: var(--alice-blue);
`;

const OverlapGroup4 = styled.div`
  width: 411px;
  height: 70px;
  position: relative;
  margin-top: 1px;
  margin-left: 1.74px;
`;

const GPSUZANA = styled.div`
  ${ArialBoldDodgerBlue20px}
  position: absolute;
  width: 117px;
  height: 32px;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const Text6 = styled.p`
  ${ArialRegularNormalDodgerBlue14px}
  position: absolute;
  width: 411px;
  height: 44px;
  top: 26px;
  left: 0;
  letter-spacing: 0;
  line-height: 24px;
`;

const FlexRow4 = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: flex-end;
  min-width: 178px;
`;

const Likes = styled.div`
  height: 9px;
  position: relative;
  display: flex;
  align-items: flex-start;
  min-width: 48px;
`;

const Number2 = styled.div`
  ${ArialBoldDodgerBlue8px}
  min-height: 11px;
  margin-left: 14px;
  margin-top: -2.91px;
  letter-spacing: 0;
  line-height: 14px;
  white-space: nowrap;
`;

const Comments = styled.div`
  height: 9px;
  position: relative;
  margin-left: 84px;
  margin-bottom: 0;
  display: flex;
  align-items: flex-start;
  min-width: 46px;
`;

const Number3 = styled.div`
  ${ArialBoldDodgerBlue8px}
  min-height: 11px;
  margin-left: 12px;
  margin-top: -3px;
  letter-spacing: 0;
  line-height: 14px;
  white-space: nowrap;
`;

const Text10 = styled.p`
  ${ArialBoldDodgerBlue12px}
  position: absolute;
  width: 142px;
  height: 32px;
  top: 3px;
  left: 337px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const OverlapGroup14 = styled.div`
  width: 490px;
  height: 114px;
  position: relative;
  margin-top: 23px;
`;

const OTEMMA = styled.div`
  ${ArialBoldDodgerBlue20px}
  position: absolute;
  width: 411px;
  height: 32px;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const FlexRow5 = styled.div`
  margin-top: 19px;
  display: flex;
  align-items: flex-start;
  min-width: 178px;
`;

const Likes1 = styled.div`
  height: 10px;
  position: relative;
  display: flex;
  align-items: flex-start;
  min-width: 48px;
`;

const Number4 = styled.div`
  ${ArialBoldDodgerBlue8px}
  min-height: 11px;
  margin-left: 14px;
  margin-top: -2.41px;
  letter-spacing: 0;
  line-height: 14px;
  white-space: nowrap;
`;

const Comments1 = styled.div`
  height: 9px;
  position: relative;
  align-self: flex-end;
  margin-left: 84px;
  display: flex;
  align-items: flex-start;
  min-width: 46px;
`;

const Text11 = styled.p`
  ${ArialBoldDodgerBlue12px}
  position: absolute;
  width: 136px;
  height: 32px;
  top: 4px;
  left: 343px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const OverlapGroup17 = styled.div`
  width: 490px;
  height: 118px;
  position: relative;
  margin-top: 13px;
`;

const PostPreview1 = styled.div`
  position: absolute;
  width: 490px;
  top: 4px;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 7px 33.3px;
  align-items: flex-start;
  min-height: 114px;
  background-color: var(--alice-blue);
`;

const FlexRow6 = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
  min-width: 178px;
`;

const Likes2 = styled.div`
  height: 9px;
  position: relative;
  align-self: flex-end;
  display: flex;
  align-items: flex-start;
  min-width: 48px;
`;

const Number5 = styled.div`
  ${ArialBoldDodgerBlue8px}
  min-height: 11px;
  margin-left: 14px;
  margin-top: -3px;
  letter-spacing: 0;
  line-height: 14px;
  white-space: nowrap;
`;

const Comments2 = styled.div`
  height: 9px;
  position: relative;
  margin-left: 84px;
  display: flex;
  align-items: flex-start;
  min-width: 46px;
`;

const Text12 = styled.p`
  ${ArialBoldDodgerBlue12px}
  position: absolute;
  width: 142px;
  height: 32px;
  top: 0;
  left: 337px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const FlexCol5 = styled.div`
  width: 696px;
  margin-top: 32px;
  margin-left: 77.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 117px;
`;

const FlexRow7 = styled.div`
  height: 45px;
  display: flex;
  align-items: center;
  min-width: 549px;
`;

const Path1229 = styled.img`
  width: 40px;
  height: 40px;
  align-self: flex-start;
  object-fit: cover;
`;

const ProductsSoldLabel = styled.div`
  width: 137px;
  height: 31px;
  margin-left: 10px;
  margin-bottom: 0.31px;
  display: flex;
`;

const TargetsGoals = styled.div`
  ${CircularstdBookNormalBlack23px}
  margin-right: -2px;
  flex: 1;
  margin-bottom: -2px;
  width: 137px;
  letter-spacing: 0;
  line-height: 23px;
  white-space: nowrap;
`;

const Ellipse359 = styled.div`
  width: 42px;
  height: 43px;
  align-self: flex-end;
  margin-left: 187px;
  background-color: var(--sail-2);
  border-radius: 21.23px/21.34px;
`;

const ProductsSoldLabel1 = styled.div`
  width: 83px;
  height: 31px;
  margin-left: 50px;
  margin-bottom: 0.31px;
  display: flex;
`;

const Achived = styled.div`
  ${CircularstdBookNormalBlack23px}
  margin-right: -2px;
  flex: 1;
  margin-bottom: -2px;
  width: 83px;
  letter-spacing: 0;
  line-height: 23px;
  white-space: nowrap;
`;

const FlexRow8 = styled.div`
  height: 49px;
  position: relative;
  align-self: flex-end;
  margin-top: 23px;
  display: flex;
  align-items: flex-start;
  min-width: 681px;
`;


class NavBar73 extends React.Component {
  render() {
    const { component3Props } = this.props;

    return (
      <NavBar7 data-id="598d720a-6617-4d80-9df4-807351e77b65">
        <Component32
          place={component3Props.place}
          logs={component3Props.logs}
          links={component3Props.links}
          faq={component3Props.faq}
          data-id="48065de0-378f-4cee-9e84-2482ffa76ae7:an-component-instance"
        />
      </NavBar7>
    );
  }
}

const NavBar7 = styled.div`
  position: absolute;
  width: 347px;
  height: 22px;
  top: 2px;
  left: 16px;
  display: flex;
`;



class Component32 extends React.Component {
  render() {
    const { place, logs, links, faq } = this.props;

    return (
      <Component data-id="48065de0-378f-4cee-9e84-2482ffa76ae7">
        <Place data-id="6d9f4e61-6b37-4fea-b313-c03e56fc3340">{place}</Place>
        <Logs data-id="8321a598-a07f-4eae-a1a9-a412ffb25068">{logs}</Logs>
        <Links data-id="5a0504e9-6555-4064-8e40-d91349f975bc">{links}</Links>
        <FAQ data-id="01fc9485-a33e-4947-8f1b-e32cbcb0e0f1">{faq}</FAQ>
      </Component>
    );
  }
}

const Component = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  min-width: 348.9886474609375px;
`;

const Place = styled.div`
  ${ArialBoldWhite20px}
  min-height: 24px;
  margin-bottom: -6px;
  min-width: 58px;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
`;

const Logs = styled.div`
  ${ArialBoldDodgerBlue20px}
  min-height: 24px;
  margin-left: 48px;
  margin-bottom: -6px;
  min-width: 50px;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
`;

const Links = styled.div`
  ${ArialBoldDodgerBlue20px}
  min-height: 24px;
  margin-left: 48px;
  margin-bottom: -6px;
  min-width: 54px;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
`;

const FAQ = styled.div`
  ${ArialBoldDodgerBlue20px}
  min-height: 24px;
  margin-left: 48px;
  margin-bottom: -6px;
  min-width: 43px;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
`;



class Bell extends React.Component {
  render() {
    const { path83086, path83087 } = this.props;

    return (
      <Bell1 data-id="a0d5d26e-4638-4b84-9733-a27c33328d8f">
        <Path83086 data-id="5ac6a946-2030-4f02-ab75-ef8f6df7d620" src={path83086} />
        <Path83087 data-id="75e221f6-3d84-44b3-8d9d-95855cfb8119" src={path83087} />
      </Bell1>
    );
  }
}

const Bell1 = styled.div`
  position: absolute;
  width: 23px;
  top: 10px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 25px;
`;

const Path83086 = styled.img`
  width: 25px;
  height: 22px;
  margin-top: -1px;
  object-fit: cover;
`;

const Path83087 = styled.img`
  width: 6px;
  height: 3px;
  margin-top: 2px;
  margin-right: 0;
  object-fit: cover;
`;



class MessageCircle extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <MessageCircle1 className={`message-circle ${className || ""}`} data-id="578eaa0c-2caa-490a-b11b-ff045d89f4ce">
        <MessageCircle2
          className="message-circle-1"
          data-id="276d56c8-4bca-43ee-a551-29d0a9dd2cbe"
          src="https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/message-circle-1@1x.png"
        />
      </MessageCircle1>
    );
  }
}

const MessageCircle1 = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  left: 13px;
  display: flex;

  &.message-circle.message-circle-2 {
    left: 28px;
  }
`;

const MessageCircle2 = styled.img`
  margin-top: -1px;
  margin-left: -1px;
  margin-right: -1px;
  flex: 1;
  margin-bottom: -1px;
  width: 22.000030517578125px;
  object-fit: cover;
`;



class Mail extends React.Component {
  render() {
    const { path83196, path83197 } = this.props;

    return (
      <Mail1 data-id="d62125d9-302f-4a10-b160-84daee185b6e">
        <OverlapGroup3 data-id="an|ichWlnHM">
          <Path83196 data-id="c042b87a-1b19-4c92-abc0-8a5abef45c41" src={path83196} />
          <Path83197 data-id="0f08041d-7166-4d24-8ebe-30c778b0366d" src={path83197} />
        </OverlapGroup3>
      </Mail1>
    );
  }
}

const Mail1 = styled.div`
  position: absolute;
  height: 22px;
  top: 10px;
  left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 33px;
`;

const OverlapGroup3 = styled.div`
  width: 36px;
  height: 24px;
  position: relative;
  margin-left: -1px;
  margin-top: -1px;
`;

const Path83196 = styled.img`
  position: absolute;
  width: 35px;
  height: 24px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const Path83197 = styled.img`
  position: absolute;
  width: 36px;
  height: 9px;
  top: 2px;
  left: 0;
  object-fit: cover;
`;



class UsersAvatarPhoto2States extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <UsersAvatarPhoto2States1 data-id="edb8be3f-a3a3-481e-bb0c-66b3b9ccd10f">
        <AA data-id="fcc73276-bc70-42c3-8436-8a619702687f">{children}</AA>
      </UsersAvatarPhoto2States1>
    );
  }
}

const UsersAvatarPhoto2States1 = styled.div`
  height: 42px;
  margin-left: 13px;
  display: flex;
  padding: 7px 7.5px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 42px;
  background-color: var(--blue-jeans);
  border-radius: 21px;
`;

const AA = styled.div`
  ${PoppinsMediumWhite16px}
  min-height: 25px;
  min-width: 24px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;



class NavBar63 extends React.Component {
  render() {
    const {
      logs,
      diary,
      gp,
      refferals,
      schools,
      councils,
      private1,
      importantDocs,
      spanText,
      spanText2,
      contacts,
      faq,
      help,
      settings,
      logout,
      component4Props,
      component5Props,
      component6Props,
    } = this.props;

    return (
      <NavBar6 data-id="00ef2964-66e0-482d-9cf4-c8c88fec9be5">
        <LOGS data-id="36cfb0b4-f8b6-4eef-b8a8-d2fc377686f4">{logs}</LOGS>
        <DIARY data-id="f4b4c972-c688-4d99-bbcf-0ba42c6b62be">{diary}</DIARY>
        <GP data-id="6b48ccfe-139c-469e-81fa-ea31f6b7af1c">{gp}</GP>
        <REFFERALS data-id="adbded2f-03da-4024-8331-ea338f1b72c0">{refferals}</REFFERALS>
        <SCHOOLS data-id="8aa50191-3e95-428a-bbaf-51fa0cec7faa">{schools}</SCHOOLS>
        <COUNCILS data-id="a59528f6-1005-4707-a80d-c28632912bb6">{councils}</COUNCILS>
        <PRIVATE data-id="5274a06d-1542-41ab-a883-573c6f214f2c">{private1}</PRIVATE>
        <IMPORTANTDOCS data-id="e5342e49-f023-453b-9ba4-d2a01cf90d1b">{importantDocs}</IMPORTANTDOCS>
        <MESSAGES3 data-id="98caede3-5cd0-4c73-8a06-780527beff8a">
          <span className="arial-regular-normal-white-18px">{spanText}</span>
          <span className="arial-regular-normal-black-18px">{spanText2}</span>
        </MESSAGES3>
        <CONTACTS data-id="574dc024-59e0-446a-aee9-dd1fe4a9fa58">{contacts}</CONTACTS>
        <FAQ1 data-id="437fc7a8-ea00-4ee0-87fc-bc4eeca04ab0">{faq}</FAQ1>
        <HELP data-id="2f5c5a5b-fb41-4356-b05c-5e1ad054fad9">{help}</HELP>
        <SETTINGS data-id="557ea799-57bb-456a-977a-898e3e715960">{settings}</SETTINGS>
        <LOGOUT data-id="8bfe5ba5-d666-4866-ad0c-8b16533882f8">{logout}</LOGOUT>
        <Social data-id="5e35a922-0117-4d69-97f5-524658faee53">
          <Component42 src={component4Props.src} data-id="0c2d6e89-ddbc-49b3-b945-77c4dc670a02:an-component-instance" />
          <Component5 src={component5Props.src} data-id="37cfa55d-ed9b-48d2-a83e-0fafd96ff2dd:an-component-instance" />
          <Component6 src={component6Props.src} data-id="17a920bb-89b2-4a95-96dd-66d93030afd8:an-component-instance" />
        </Social>
      </NavBar6>
    );
  }
}

const NavBar6 = styled.div`
  position: absolute;
  width: 214px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 40px 12px;
  align-items: flex-start;
  min-height: 2077px;
  background-color: var(--dodger-blue);
`;

const LOGS = styled.div`
  ${ArialRegularNormalWhite20px}
  min-height: 24px;
  margin-top: 277px;
  margin-left: 26px;
  text-shadow: 0px 3px 6px #00000029;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
`;

const DIARY = styled.div`
  ${ArialRegularNormalWhite20px}
  min-height: 24px;
  margin-top: 8px;
  margin-left: 26px;
  text-shadow: 0px 3px 6px #00000029;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
`;

const GP = styled.div`
  ${ArialRegularNormalWhite20px}
  min-height: 24px;
  margin-top: 7px;
  margin-left: 27px;
  text-shadow: 0px 3px 6px #00000029;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
`;

const REFFERALS = styled.div`
  ${ArialRegularNormalWhite18px}
  min-height: 22px;
  align-self: center;
  margin-top: 6px;
  margin-right: 28px;
  min-width: 108px;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
`;

const SCHOOLS = styled.div`
  ${ArialRegularNormalWhite18px}
  min-height: 22px;
  align-self: center;
  margin-top: 7px;
  margin-right: 48px;
  min-width: 90px;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
`;

const COUNCILS = styled.div`
  ${ArialRegularNormalWhite18px}
  min-height: 22px;
  align-self: center;
  margin-top: 7px;
  margin-right: 43px;
  min-width: 95px;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
`;

const PRIVATE = styled.div`
  ${ArialRegularNormalWhite18px}
  min-height: 22px;
  margin-top: 7px;
  margin-left: 27px;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
`;

const IMPORTANTDOCS = styled.div`
  ${ArialRegularNormalWhite18px}
  min-height: 22px;
  align-self: flex-end;
  margin-top: 8px;
  min-width: 163px;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
`;

const MESSAGES3 = styled.div`
  ${ArialNormalBlack18px}
  min-height: 22px;
  align-self: center;
  margin-top: 8px;
  margin-right: 18px;
  min-width: 118px;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
`;

const CONTACTS = styled.div`
  ${ArialRegularNormalWhite18px}
  min-height: 22px;
  align-self: center;
  margin-top: 8px;
  margin-right: 36px;
  min-width: 100px;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
`;

const FAQ1 = styled.div`
  ${ArialRegularNormalWhite18px}
  min-height: 22px;
  margin-top: 36px;
  margin-left: 28px;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
`;

const HELP = styled.div`
  ${ArialRegularNormalWhite18px}
  min-height: 22px;
  margin-top: 8px;
  margin-left: 29px;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
`;

const SETTINGS = styled.div`
  ${ArialRegularNormalWhite18px}
  min-height: 22px;
  align-self: center;
  margin-top: 8px;
  margin-right: 42px;
  min-width: 92px;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
`;

const LOGOUT = styled.div`
  ${ArialNarrowNormalWhite18px}
  min-height: 23px;
  margin-top: 7px;
  margin-left: 28px;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
`;

const Social = styled.div`
  height: 16px;
  position: relative;
  align-self: center;
  margin-top: 1264px;
  margin-right: 50px;
  display: flex;
  align-items: flex-start;
  min-width: 88px;
`;



class Component42 extends React.Component {
  render() {
    const { src } = this.props;

    return (
      <Component1 style={{ backgroundImage: `url(${src})` }} data-id="0c2d6e89-ddbc-49b3-b945-77c4dc670a02"></Component1>
    );
  }
}

const Component1 = styled.div`
  width: 16px;
  height: 16px;
  background-size: cover;
  background-position: 50% 50%;
`;



class Component5 extends React.Component {
  render() {
    const { src } = this.props;

    return (
      <Component data-id="37cfa55d-ed9b-48d2-a83e-0fafd96ff2dd">
        <Path2 data-id="1384aac9-bada-446f-9b7b-de143679c651" src={src} />
      </Component>
    );
  }
}

// const Component2 = styled.div`
//   width: 16px;
//   height: 16px;
//   margin-left: 20px;
//   display: flex;
// `;

const Path2 = styled.img`
  margin-top: 2px;
  margin-left: 0;
  margin-right: 0;
  flex: 1;
  margin-bottom: 1px;
  width: 16px;
  object-fit: cover;
`;



class Component6 extends React.Component {
  render() {
    const { src } = this.props;

    return (
      <Component data-id="17a920bb-89b2-4a95-96dd-66d93030afd8">
        <Path1 data-id="a994105c-eecb-44fd-b3f1-c09a256409ff" src={src} />
      </Component>
    );
  }
}

// const Component3 = styled.div`
//   margin-left: 20px;
//   display: flex;
//   padding: 0 3.6px;
//   justify-content: flex-end;
//   align-items: flex-end;
//   min-width: 16px;
// `;

const Path1 = styled.img`
  width: 8px;
  height: 16px;
  margin-bottom: 0;
  object-fit: cover;
`;



class Profile extends React.Component {
  render() {
    const { src } = this.props;

    return (
      <Profile1 style={{ backgroundImage: `url(${src})` }} data-id="04c4a23e-b462-4cb2-9743-79b21da88479"></Profile1>
    );
  }
}

const Profile1 = styled.div`
  position: absolute;
  width: 83px;
  height: 83px;
  top: 25px;
  left: 65px;
  background-size: cover;
  background-position: 50% 50%;
`;



class CTA7 extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <CTA className={`cta ${className || ""}`} data-id="f698a92d-c516-49e5-b3fd-320e0b67efea">
        <ASD className="asd" data-id="8ffe6457-1fbd-4bca-9e51-7d3fa120eb16">
          {children}
        </ASD>
      </CTA>
    );
  }
}

const CTA = styled.div`
  position: absolute;
  height: 32px;
  top: 53px;
  left: 280px;
  display: flex;
  padding: 3.6px 37.4px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 111px;
  background-color: var(--dodger-blue);
  border-radius: 4px;

  &.cta.cta-1 {
    height: 46px;
    left: 757px;
    padding: 3px 19.5px;
    align-items: flex-start;
    min-width: 201px;
  }

  &.cta.cta-2 {
    left: 521px;
    padding: 1.5px 44px;
    min-width: 138px;
  }

  &.cta.cta-3 {
    left: 1078px;
    padding: 1.1px 34.5px;
    min-width: 139px;
  }
`;

const ASD = styled.div`
  ${ArialBoldWhite16px}
  min-height: 19px;
  min-width: 36px;
  text-align: center;
  letter-spacing: 0;
  line-height: 9px;
  white-space: nowrap;
`;

// const Text2 = styled.div`
//   ${ArialBoldWhite16px}

//   .cta.cta-1  & {
//     min-height: 39px;
//     min-width: 160px;
//     line-height: 20px;
//   }
// `;

// const ADHD = styled.div`
//   ${ArialBoldWhite16px}

//   .cta.cta-2  & {
//     min-width: 48px;
//   }
// `;

// const Epilespy = styled.div`
//   ${ArialBoldWhite16px}

//   .cta.cta-3  & {
//     min-width: 68px;
//   }
// `;



class CTA2 extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <CTA className={`cta-4 ${className || ""}`} data-id="648fee67-75c7-4be3-8d86-85e82f419213">
        <Summary className="summary" data-id="7e83cbd7-9ef1-4d4c-9383-57378bb05635">
          {children}
        </Summary>
      </CTA>
    );
  }
}

// const CTA1 = styled.div`
//   position: absolute;
//   height: 36px;
//   top: 53px;
//   left: 1523px;
//   display: flex;
//   padding: 4.9px 40px;
//   justify-content: flex-end;
//   align-items: flex-end;
//   min-width: 138px;
//   background-color: var(--spindle);
//   border-radius: 4px;

//   &.cta-4.cta-5 {
//     top: 93px;
//     padding: 4.9px 51px;
//   }
// `;

const Summary = styled.div`
  ${ArialBoldBlack12px}
  min-height: 16px;
  min-width: 56px;
  text-align: center;
  letter-spacing: 0;
  line-height: 9px;
  white-space: nowrap;
`;

// const Invite = styled.div`
//   ${ArialBoldBlack12px}

//   .cta-4.cta-5  & {
//     min-width: 34px;
//   }
// `;



class X800 extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <X8001 className={`x800 ${className || ""}`} data-id="4436f44a-f113-4658-ad4a-0463f1f15e16">
        <Number className="number" data-id="d2a76226-ffbc-4fc8-aced-751c0b9f5ed4">
          {children}
        </Number>
      </X8001>
    );
  }
}

const X8001 = styled.div`
  width: 42px;
  height: 29px;
  margin-top: 49px;
  margin-right: -0.88px;
  display: flex;
  align-items: flex-end;

  &.x800.x600 {
    margin-top: 50px;
  }

  &.x800.x400 {
    margin-top: 48px;
  }
`;

// const Number100 = styled.div`
//   height: 31px;
//   flex: 1;
//   text-align: right;
//   letter-spacing: 0.15px;
//   line-height: 36px;
//   white-space: nowrap;
// `;



// class WidgetsElementsChartGraphLineBar3 extends React.Component {
//   render() {
//     const { name, className } = this.props;

//     return (
//       <WidgetsElementsChartGraphLineBar1
//         className={`widgets--eleme-graph-line-bar ${className || ""}`}
//         data-id="c2255598-dfca-4fe9-a0a9-cf3cdf00e97b"
//       >
//         <Shape
//           className="shape"
//           data-id="9c1193bd-a5bf-41c4-a5c7-edcb57c17d72"
//           src="https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/shape-10@1x.png"
//         />
//         <Name className="name" data-id="f1d3e365-306d-4cb1-9625-6484fa0640f7">
//           {name}
//         </Name>
//       </WidgetsElementsChartGraphLineBar1>
//     );
//   }
// }

// const WidgetsElementsChartGraphLineBar1 = styled.div`
//   width: 26px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   min-height: 368px;

//   &.widgets--eleme-graph-line-bar.widgets--eleme-graph-line-bar-1 {
//     margin-left: 73px;
//   }

//   &.widgets--eleme-graph-line-bar.widgets--eleme-graph-line-bar-2 {
//     margin-left: 73px;
//   }

//   &.widgets--eleme-graph-line-bar.widgets--eleme-graph-line-bar-3 {
//     width: 24px;
//     margin-left: 73px;
//   }

//   &.widgets--eleme-graph-line-bar.widgets--eleme-graph-line-bar-4 {
//     width: 30px;
//     margin-left: 73px;
//   }

//   &.widgets--eleme-graph-line-bar.widgets--eleme-graph-line-bar-5 {
//     margin-left: 73px;
//   }

//   &.widgets--eleme-graph-line-bar.widgets--eleme-graph-line-bar-6 {
//     width: 20px;
//     margin-left: 73px;
//   }

//   &.widgets--eleme-graph-line-bar.widgets--eleme-graph-line-bar-7 {
//     width: 28px;
//     margin-left: 73px;
//   }

//   &.widgets--eleme-graph-line-bar.widgets--eleme-graph-line-bar-8 {
//     width: 24px;
//     margin-left: 73px;
//   }

//   &.widgets--eleme-graph-line-bar.widgets--eleme-graph-line-bar-9 {
//     margin-left: 73px;
//   }

//   &.widgets--eleme-graph-line-bar.widgets--eleme-graph-line-bar-10 {
//     width: 28px;
//     margin-left: 73px;
//   }

//   &.widgets--eleme-graph-line-bar.widgets--eleme-graph-line-bar-12 {
//     margin-left: 73px;
//   }

//   &.widgets--eleme-graph-line-bar.widgets--eleme-graph-line-bar-13 {
//     width: 24px;
//     margin-left: 73px;
//   }

//   &.widgets--eleme-graph-line-bar.widgets--eleme-graph-line-bar-14 {
//     width: 30px;
//     margin-left: 73px;
//   }

//   &.widgets--eleme-graph-line-bar.widgets--eleme-graph-line-bar-15 {
//     margin-left: 73px;
//   }

//   &.widgets--eleme-graph-line-bar.widgets--eleme-graph-line-bar-16 {
//     width: 20px;
//     margin-left: 73px;
//   }

//   &.widgets--eleme-graph-line-bar.widgets--eleme-graph-line-bar-17 {
//     width: 28px;
//     margin-left: 73px;
//   }

//   &.widgets--eleme-graph-line-bar.widgets--eleme-graph-line-bar-18 {
//     margin-left: 73px;
//   }

//   &.widgets--eleme-graph-line-bar.widgets--eleme-graph-line-bar-19 {
//     width: 24px;
//     margin-left: 73px;
//   }

//   &.widgets--eleme-graph-line-bar.widgets--eleme-graph-line-bar-20 {
//     margin-left: 73px;
//   }

//   &.widgets--eleme-graph-line-bar.widgets--eleme-graph-line-bar-21 {
//     width: 28px;
//     margin-left: 73px;
//   }
// `;

// const Shape1 = styled.img`
//   width: 1px;
//   height: 336px;
//   margin-left: 0;
//   object-fit: cover;
// `;

// const Name = styled.div`
//   ${PoppinsRegularNormalShadowBlue13px}
//   margin-bottom: -3px;
//   min-height: 21px;
//   margin-top: 8px;
//   min-width: 26px;
//   text-align: center;
//   letter-spacing: 0;
//   line-height: 24px;
//   white-space: nowrap;
// `;
// const JanStyle = styled.div`
//   margin-bottom: -3px;
//   min-height: 21px;
//   margin-top: 8px;
//   min-width: 26px;
//   font-family: var(--font-family-poppins-bold);
//   font-weight: 700;
//   color: var(--vulcan);
//   font-size: var(--font-size-xxs);
//   text-align: center;
//   letter-spacing: 0;
//   line-height: 24px;
//   white-space: nowrap;
// `;
const Jan = styled.div`
  ${PoppinsRegularNormalShadowBlue13px}

  .widgets--eleme-graph-line-bar.widgets--eleme-graph-line-bar-3  & {
    min-width: 24px;
  }
`;

// const Jan1 = styled.div`
//   ${PoppinsRegularNormalShadowBlue13px}

//   .widgets--eleme-graph-line-bar.widgets--eleme-graph-line-bar-4  & {
//     min-width: 30px;
//   }
// `;

// const Jan2 = styled.div`
//   ${PoppinsRegularNormalShadowBlue13px}

//   .widgets--eleme-graph-line-bar.widgets--eleme-graph-line-bar-6  & {
//     min-width: 20px;
//   }
// `;

// const Jan3 = styled.div`
//   ${PoppinsRegularNormalShadowBlue13px}

//   .widgets--eleme-graph-line-bar.widgets--eleme-graph-line-bar-7  & {
//     min-width: 28px;
//   }
// `;

// const Jan4 = styled.div`
//   ${PoppinsRegularNormalShadowBlue13px}

//   .widgets--eleme-graph-line-bar.widgets--eleme-graph-line-bar-8  & {
//     min-width: 24px;
//   }
// `;

// const Jan5 = styled.div`
//   ${PoppinsRegularNormalShadowBlue13px}

//   .widgets--eleme-graph-line-bar.widgets--eleme-graph-line-bar-10  & {
//     min-width: 28px;
//   }
// `;

// const Jan6 = styled.div`
//   ${PoppinsRegularNormalShadowBlue13px}

//   .widgets--eleme-graph-line-bar.widgets--eleme-graph-line-bar-13  & {
//     min-width: 24px;
//   }
// `;

// const Jan7 = styled.div`
//   ${PoppinsRegularNormalShadowBlue13px}

//   .widgets--eleme-graph-line-bar.widgets--eleme-graph-line-bar-14  & {
//     min-width: 30px;
//   }
// `;

// const Jan8 = styled.div`
//   ${PoppinsRegularNormalShadowBlue13px}

//   .widgets--eleme-graph-line-bar.widgets--eleme-graph-line-bar-16  & {
//     min-width: 20px;
//   }
// `;

// const Jan9 = styled.div`
//   ${PoppinsRegularNormalShadowBlue13px}

//   .widgets--eleme-graph-line-bar.widgets--eleme-graph-line-bar-17  & {
//     min-width: 28px;
//   }
// `;

// const Jan10 = styled.div`
//   ${PoppinsRegularNormalShadowBlue13px}

//   .widgets--eleme-graph-line-bar.widgets--eleme-graph-line-bar-19  & {
//     min-width: 24px;
//   }
// `;

// const Jan11 = styled.div`
//   ${PoppinsRegularNormalShadowBlue13px}

//   .widgets--eleme-graph-line-bar.widgets--eleme-graph-line-bar-21  & {
//     min-width: 28px;
//   }
// `;



class WidgetsElementsChartGraphLineBar2 extends React.Component {
  render() {
    const { jan } = this.props;

    return (
      <WidgetsElementsChartGraphLineBar data-id="42a8d75e-c2c0-4b97-880d-a8f3c6c805dc">
        <Shape
          data-id="64acf40e-9e88-475b-b63a-47723aadc331"
          src="https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/shape-3@1x.png"
        />
        <Jan data-id="e0bb4c3b-5ea7-482d-b7d4-7a4c5b18e9a4">{jan}</Jan>
      </WidgetsElementsChartGraphLineBar>
    );
  }
}

const WidgetsElementsChartGraphLineBar = styled.div`
  width: 26px;
  margin-left: 73px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 368px;
`;

const Shape = styled.img`
  width: 1px;
  height: 336px;
  margin-left: 0;
  object-fit: cover;
`;





class TooltipPointerDown extends React.Component {
  render() {
    const { bg, x750, onlineSales, titlee } = this.props;

    return (
      <TooltipPointerDown1 data-id="ed219ced-a221-46af-9910-e12e2980168c">
        <OverlapGroup data-id="an|D2n4A33C">
          <TooltipBG data-id="7ac6c8f4-4c00-4547-8bee-44a1c89aa5fb">
            <BG data-id="a5f42ff8-5c83-495d-ac7b-83205047e5a1" src={bg} />
          </TooltipBG>
          <DataKey data-id="9cc74c1c-8124-4202-aaa4-2b0b0fa4210c">
            <Data data-id="6c8ba27e-2bbd-4eec-9c91-0705066c0e04">
              <Sales data-id="590019d2-ebff-442c-917c-660b688831ca"></Sales>
              <X750 data-id="dc214a3d-4d08-4d95-b881-00433b1c9d0f">{x750}</X750>
              <OnlineSales data-id="70d31821-e455-4086-b3ec-42dc62d1d3f0">{onlineSales}</OnlineSales>
            </Data>
          </DataKey>
          <Titlee data-id="5af4bc30-eac6-4605-91cd-ebb4aa467fc3">{titlee}</Titlee>
        </OverlapGroup>
      </TooltipPointerDown1>
    );
  }
}

const TooltipPointerDown1 = styled.div`
  position: absolute;
  height: 65px;
  top: 90px;
  left: 1829px;
  display: flex;
  padding: 0px 0;
  align-items: flex-start;
  min-width: 120px;
`;

const OverlapGroup = styled.div`
  width: 121px;
  height: 65px;
  position: relative;
`;

const TooltipBG = styled.div`
  position: absolute;
  width: 121px;
  height: 65px;
  top: 0;
  left: 0;
  display: flex;
`;

const BG = styled.img`
  margin-top: -17.5px;
  margin-left: -22.5px;
  margin-right: -22.5px;
  flex: 1;
  margin-bottom: -27.5px;
  width: 165.50009155273438px;
  object-fit: cover;
`;

const DataKey = styled.div`
  position: absolute;
  width: 82px;
  height: 17px;
  top: 33px;
  left: 10px;
  display: flex;
`;

const Data = styled.div`
  height: 17px;
  display: flex;
  align-items: flex-end;
  min-width: 84px;
`;

const Sales = styled.div`
  width: 8px;
  height: 8px;
  align-self: center;
  margin-top: 1px;
  background-color: var(--blue-ribbon);
  border-radius: 6px;
`;

const X750 = styled.div`
  ${PoppinsRegularNormalVulcan12px}
  min-height: 19px;
  margin-left: 4px;
  margin-bottom: -2px;
  min-width: 24px;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
`;

const OnlineSales = styled.div`
  ${PoppinsRegularNormalShadowBlue12px}
  min-height: 19px;
  margin-left: 8px;
  margin-bottom: -2px;
  min-width: 40px;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
`;

const Titlee = styled.div`
  ${PoppinsSemiBoldVulcan12px}
  position: absolute;
  top: 10px;
  left: 10px;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
`;



class Legend extends React.Component {
  render() {
    const { onlineProps, online2Props } = this.props;

    return (
      <Legend1 data-id="839cae54-bd65-4d98-aafc-82773b38866b">
        <Online data-id="ea063527-8583-453b-9469-fe4dc3378b46:an-component-instance">{onlineProps.children}</Online>
        <Online className={online2Props.className} data-id="c1edc64f-de18-414a-bfac-b4cc96f6592b:an-component-instance">
          {online2Props.children}
        </Online>
      </Legend1>
    );
  }
}

const Legend1 = styled.div`
  position: absolute;
  height: 20px;
  top: 58px;
  left: 217px;
  display: flex;
  align-items: flex-start;
  min-width: 166px;
`;



class Online extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <Online1 className={`online ${className || ""}`} data-id="ea063527-8583-453b-9469-fe4dc3378b46">
        <Shape className="shape-2" data-id="fd7f7bdd-7b6a-4434-9d58-a4e84470e6ae"></Shape>
        <MarketingSales className="marketing-sales" data-id="ab89bc5f-b3a8-442e-9d69-78e2b5886932">
          {children}
        </MarketingSales>
      </Online1>
    );
  }
}

const Online1 = styled.div`
  height: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 65px;

  &.online.offline {
    margin-left: 38px;
  }
`;

// const ShapeStyle = styled.div`
//   width: 10px;
//   height: 10px;
//   align-self: center;
//   background-color: var(--caribbean-green);
//   border-radius: 6px;
// `;

const MarketingSales = styled.div`
  ${PoppinsRegularNormalComet14px}
  min-height: 22px;
  margin-left: 8px;
  margin-top: -5px;
  letter-spacing: 0.1px;
  line-height: 24px;
  white-space: nowrap;
`;

// const ShapeStyle1 = styled.div`
//   .online.offline & {
//     background-color: var(--blue-ribbon-2);
//   }
// `;



// class ProgressBar22Comp extends React.Component {
//   render() {
//     const { className } = this.props;

//     return (
//       <ProgressBar2 className={`progress-bar-2 ${className || ""}`} data-id="07b7fd40-2d9f-4371-937e-1c5cf4780154">
//         <Rectangle621 className="rectangle-621" data-id="3a4c47a6-cc5e-47f3-b513-2f18be3562c1"></Rectangle621>
//       </ProgressBar2>
//     );
//   }
// }

// const ProgressBar2Style = styled.div`
//   ${Border2pxSail}
//   position: absolute;
//   width: 603px;
//   height: 34px;
//   top: 33px;
//   left: 0;
//   display: flex;
//   background-color: var(--alice-blue);
//   border-radius: 10px;

//   &.progress-bar-2.progress-bar-2-2 {
//     top: 47px;
//   }

//   &.progress-bar-2.progress-bar-2-3 {
//     top: 46px;
//   }
// `;

// const Rectangle621Style = styled.div`
//   width: 351.9104919433594px;
//   background-color: var(--dodger-blue);
//   border-radius: 10px;
// `;



class Component707 extends React.Component {
  render() {
    const { src, className } = this.props;

    return (
      <Component7071 className={`component-70-7 ${className || ""}`} data-id="7f417d32-db14-47b1-95d7-d8736855291e">
        <Heart className="heart" data-id="9539a760-fe5c-4e3a-b319-0dc8588d7728" src={src} />
      </Component7071>
    );
  }
}

const Component7071 = styled.div`
  width: 19px;
  height: 9px;
  display: flex;

  &.component-70-7.component-70-9 {
    align-self: center;
    margin-bottom: 0.17px;
  }
`;

const Heart = styled.img`
  margin-top: 0;
  margin-left: 0;
  margin-right: 9px;
  flex: 1;
  margin-bottom: 0;
  width: 9.771240234375px;
  object-fit: cover;
`;



class Component717 extends React.Component {
  render() {
    const { src, className } = this.props;

    return (
      <Component7171 className={`component-71-7 ${className || ""}`} data-id="32ff1005-1cfc-468b-9aa5-5599d01fd8d1">
        <Chat className="chat" data-id="00abf5e1-8abd-4c29-8d3b-7541abd98ba1" src={src} />
      </Component7171>
    );
  }
}

const Component7171 = styled.div`
  width: 19px;
  height: 9px;
  display: flex;

  &.component-71-7.component-71-8 {
    align-self: flex-end;
  }
`;

const Chat = styled.img`
  margin-top: 0;
  margin-left: 0;
  margin-right: 0.2px;
  flex: 1;
  margin-bottom: -0.8px;
  width: 18.820236206054688px;
  object-fit: cover;
`;



class CTA8 extends React.Component {
  render() {
    const { spanText, spanText2 } = this.props;

    return (
      <CTA data-id="cde64d18-0d42-4eb4-9c55-6941f8d8d636">
        <EDIT data-id="e1caa24f-0a71-4b6c-89e7-52e09f58fd60">
          <Span01>{spanText}</Span01>
          <Span11>{spanText2}</Span11>
        </EDIT>
      </CTA>
    );
  }
}

// const CTA11 = styled.div`
//   height: 49px;
//   display: flex;
//   padding: 0 66.3px;
//   justify-content: flex-end;
//   align-items: flex-end;
//   min-width: 217px;
//   background-color: var(--dodger-blue);
//   border-radius: 4px;
// `;

const EDIT = styled.div`
  min-height: 45px;
  margin-bottom: -7.01px;
  min-width: 84px;
  font-family: var(--font-family-arial);
  color: var(--white);
  font-size: var(--font-size-xl);
  text-align: center;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
  font-weight: 700;
`;

const Span01 = styled.span`
  font-family: var(--font-family-arial-bold);
`;

const Span11 = styled.span`
  font-family: var(--font-family-arial-bold);
  font-size: 39px;
`;



class CTA9 extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <CTA data-id="6c467124-2a98-475b-acb7-34a3cfbefcf1">
        <NEWDAILYLOG data-id="0adaab9a-3b3b-4b12-938b-68822447092c">{children}</NEWDAILYLOG>
      </CTA>
    );
  }
}

// const CTAStyle = styled.div`
//   height: 49px;
//   margin-left: 141px;
//   display: flex;
//   padding: 0 34.6px;
//   align-items: flex-end;
//   min-width: 322px;
//   background-color: var(--dodger-blue);
//   border-radius: 4px;
// `;

const NEWDAILYLOG = styled.div`
  min-height: 35px;
  margin-bottom: -2.06px;
  min-width: 240px;
  font-family: var(--font-family-arial-bold);
  font-weight: 700;
  color: var(--white);
  font-size: 30px;
  text-align: center;
  letter-spacing: 0;
  line-height: 17px;
  white-space: nowrap;
`;



class Footer33 extends React.Component {
  render() {
    const { text84, aboutUs, workWithUs, contactUs, faq, feedback, privacyPolicy, text85, infoProps } = this.props;

    return (
      <Footer3 data-id="0bd70aad-1b63-4c64-83f8-a8ed69d90326">
        <OverlapGroup12 data-id="an|urqf5hEA">
          <Info
            text83={infoProps.text83}
            path3={infoProps.path3}
            path2={infoProps.path2}
            path1={infoProps.path1}
            data-id="7c898135-55de-474f-b21d-b29eaf9b5657:an-component-instance"
          />
          <Text14 data-id="f85edc92-816d-4b54-8378-95372479291b">{text84}</Text14>
          <ABOUTUS data-id="0bad6a66-1aa5-4145-b95b-36a77e574879">{aboutUs}</ABOUTUS>
          <WorkWithUs data-id="a14ef40d-f4b2-4569-8890-30161afd6410">{workWithUs}</WorkWithUs>
          <CONTACTUS data-id="e5cd5aa3-874a-4421-aa83-6e11358a9649">{contactUs}</CONTACTUS>
          <FAQ1 data-id="d8950ae1-178d-4759-87ad-a5643516b1a5">{faq}</FAQ1>
          <FEEDBACK data-id="a774e6b6-29ef-4ba9-ab4f-fdec2ecb91d1">{feedback}</FEEDBACK>
          <PrivacyPolicy data-id="dcffb320-b3db-4c1d-8810-db240b313f38">{privacyPolicy}</PrivacyPolicy>
          <Text15 data-id="31d54077-d9bb-4155-aed3-d523d618da3c">{text85}</Text15>
        </OverlapGroup12>
      </Footer3>
    );
  }
}

const Footer3 = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 1920px;
`;

const OverlapGroup12 = styled.div`
  width: 1920px;
  height: 50px;
  position: relative;
`;

const Text14 = styled.p`
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



