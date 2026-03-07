import React from 'react';
import styled, { css } from 'styled-components';
import './landingpage.css';
import { Link } from 'react-router-dom';


export const ArialBoldWhite14px = css`
  color: var(--white);
  font-family: var(--font-family-arial-bold);
  font-size: var(--font-size-xxs);
  font-weight: 700;
  font-style: normal;
`;

  
const SUBSCRIBE = styled.div`
${ArialBoldWhite14px}
min-height: 18px;
min-width: 84px;
text-align: center;
letter-spacing: 0;
line-height: 12px;
white-space: nowrap;
color: white;
background-color: #1C86EE;
`;



const Text5 = styled.h1`
  width: 897px;
  height: 301px;
  min-height: 301px;
  align-self: flex-end;
  margin-top: 62px;
  min-width: 897px;
  font-family: var(--font-family-segoe_ui);
  color: var(--dodger-blue-22);
  font-size: var(--font-size-m);
  letter-spacing: 0;
  line-height: 40px;
  font-weight: 700;
`;

const FlexRow = styled.div`
  height: 626px;
  display: flex;
  align-items: flex-start;
  min-width: 1767px;
  margin-left: 21px;
`;

const Span1 = styled.span`
  font-family: var(--font-family-segoeui-bold);
  font-size: var(--font-size-xl);  
  color: #1C86EE;
  font-size: 40px;
`;

const FlexRow1 = styled.div`
  height: 40px;
  display: flex;
  align-items: flex-start;
  min-width: 290px;
  position: relative;
  align-self: center;
  margin-top: 60px;
  margin-right: 394px;
`;

const Component4 = styled.div`
  height: 40px;
  margin-left: 50px;
  display: flex;
  padding: 6px 30px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 120px;
  background-size: cover;
  background-position: 50% 50%;
`;
const SignUP = styled.div`
  min-height: 21px;
  min-width: 68px;
  font-family: var(--font-family-arial-bold);
  font-weight: 700;
  color: var(--white);
  font-size: var(--font-size-xs);
  text-align: center;
  letter-spacing: 0;
  line-height: 13px;
  white-space: nowrap;
`;

const SignIn = styled.div`
  min-height: 21px;
  min-width: 58px;
  font-family: var(--font-family-arial-bold);
  font-weight: 700;
  color: #008aff;
  font-size: var(--font-size-xs);
  text-align: center;
  letter-spacing: 0;
  line-height: 13px;
  white-space: nowrap;
`;



const Component3 = styled.div`
  height: 40px;
  display: flex;
  padding: 5px 25px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 120px;
  background-color: var(--dodger-blue2);
  border-radius: 4px;
`;

const component7Data = {
  children: "SUBSCRIBE",
};

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
  color:  #1C86EE;
  font-size: var(--font-size-xxs);
  letter-spacing: 0;
  line-height: 14px;
  white-space: nowrap;
`;


const component32Data = {
  children: "Sign UP",
};


class Component7 extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <Button>
        <SUBSCRIBE>{children}</SUBSCRIBE>
      </Button>
    );
  }
}


const Button = styled.button`
  background-color: #1C86EE;
  color: white;
  font-size: 14px;
  font-weight: bold;
  border-radius: 2px;
  margin: 10px 10px;
  cursor: pointer;
  width: 100px;   
  height: 30px
`;

const ButtonSignIn = styled.button`
  background-color: white;
  font-weight: bold;
  color: #1C86EE;
  font-size: 14px;
  border-radius: 2px;
  margin: 10px 10px;
  cursor: pointer;
  width: 100px;   
  height: 30px
`;


class Component32 extends React.Component {
    render() {
      const { children } = this.props;
  
      return (
        <Component3>
          <SignUP>
             <Button><Link style={{ textDecoration: 'none' }} to='/register'>{children}</Link></Button>
          </SignUP>
        </Component3>
      );
    }
  }

const component42Data = {
    component4: "https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/path-83146@1x.png",
    signIn: "Sign In",
};

const OverlapGroup = styled.div`
  width: 1920px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 33px 0;
  align-items: flex-start;
  min-height: 1280px;
  background-size: cover;
  background-position: 50% 50%;
`;

const FlexCol = styled.div`
  width: 1110px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 567px;
`;

const OverlapGroup1 = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 334px;
  background-size: cover;
  background-position: 50% 50%;
`;

const ManageAutismLogo = styled.img`
  width: 334px;
  height: 104px;
  object-fit: cover;
`;


const Column = styled.div`
  align-self: flex-end;
  margin-left: 59px;
  display: flex;
  align-items: flex-start;
  min-width: 598px;
`;

const OverlapGroup3 = styled.div`
  height: 460px;
  display: flex;
  padding: 131px 233px;
  align-items: flex-end;
  min-width: 598px;
  border-radius: 6px;
  background-size: cover;
  background-position: 50% 50%;
`;




class Component42 extends React.Component {
    render() {
      const { signIn } = this.props;
  
      return (
        <Component4>
          <SignIn>
            <ButtonSignIn><Link style={{ textDecoration: 'none' }} to='/login'>{signIn}</Link></ButtonSignIn>
          </SignIn>
        </Component4>
      );
    }
  }

  const Playbutton = styled.div`
  height: 130px;
  display: flex;
  padding: 49.7px 53.2px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 130px;
  border-radius: 25px;
  border: 2px solid var(--white);
`;

const Icon = styled.img`
  width: 21px;
  height: 26px;
  object-fit: cover;
`;

const landingPage1Data = {
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/caleb-woods-ecruhwpiw7c-unsplash@1x.png",
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/manage-autism-logo-1@1x.png",
    manageAutismLogo: "https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/manage-autism-logo-1@1x.png",
    spanText: <>Take control of your Childs healthcare.<br /><br /></>,
    spanText2: "Record your childs daily behaviour Securely share your with healthcare professionals for much faster feedback and diagnosis.",
    spanText3: "",
    overlapGroup3: "https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/image@1x.png",
    icon: "https://anima-uploads.s3.amazonaws.com/projects/60ea0de256f5e8ac1defc161/releases/60ea0e2e1496d403ced45fe6/img/icon@1x.png",
    component32Props: component32Data,
    component42Props: component42Data,
    component7Props: component7Data,
    text86: "Subscribe to News and Updates",
};

class LandingPage extends React.Component {
  
    render()  {
        return <LandingPage1 {...landingPage1Data} />;
    }
}

export default LandingPage;

class LandingPage1 extends React.Component {
    render() {
      const {
        overlapGroup1,
        manageAutismLogo,
        spanText,
        spanText2,
        spanText3,
        overlapGroup3,
        icon,
        component32Props,
        component42Props,
        component7Props,
        text86,
      } = this.props;
  
      return (
        <div className="landing-page-1">
          <OverlapGroup >
            <FlexRow>
              <FlexCol>
                <OverlapGroup1 style={{ backgroundImage: `url(${overlapGroup1})` }}>
                  <ManageAutismLogo src={manageAutismLogo} />
                </OverlapGroup1>
                <Text5>
                  <span className="segoeuiBoldDodgerBlue40px">{spanText}</span>
                  <Span1>{spanText2}</Span1>
                  <span className="segoeuiBoldDodgerBlue40px">{spanText3}</span>
                </Text5>
                <FlexRow1>
                  <Component32>{component32Props.children}</Component32>
                  <Component42 component4={component42Props.component4} signIn={component42Props.signIn} />
                </FlexRow1>
    
              </FlexCol>
              <Column>
                <OverlapGroup3 style={{ backgroundImage: `url(${overlapGroup3})` }}>
                  <Playbutton>
                    <Icon src={icon} />
                  </Playbutton>
                </OverlapGroup3>
              </Column>
            </FlexRow>
            <Subscribe>
              <Text1>{text86}</Text1>
              <Component7>{component7Props.children}</Component7>
            </Subscribe>
          </OverlapGroup>
        </div> 
      );
    }
  }



