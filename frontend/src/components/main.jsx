import React from 'react';
//import styled, { css } from 'styled-components';
import './login.css';
import LandingPage from './landingpage';
import Footer from './footer';
class MainPage extends React.Component {
    render()  {
        return (
            <div>
              <LandingPage/> 
             <Footer/>
            </div>
        );
    }
};


export default MainPage;