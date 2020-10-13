import React from 'react';
import styled from 'styled-components';

const MainBlock = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IntroBlock = styled.div``;

const ProfPic = styled.img`
  height: 400px;
  width: auto;
  border-radius: 4%;
  padding: 0;
`;

const Lead = styled.div`
  font-size: 48px;
  margin-bottom: 2px;
  line-height: 48px;
`;

const SubLead = styled.div`
  font-size: 18px;
`;

const Sub = styled.a`
  font-size: 24px;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  padding-right: 10px;
`;

function Landing() {
  return (
    <MainBlock>
      <IntroBlock className='row'>
        <div
          className='col-sm-auto justify-content-center'
          style={{ display: 'flex' }}
        >
          <ProfPic src='/images/me.jpg'></ProfPic>
        </div>
        <Nav className='col'>
          <Lead className='major'>Hi! I'm Adrian</Lead>
          <SubLead className='secondary bold'>
            Head of Product, rapStudy
          </SubLead>
          <SubLead className='bold'>
            I love making things and growing them.
          </SubLead>
          <br />
          <Sub className='simple-link'>rapStudy</Sub>
          <Sub className='simple-link'>Bowtie</Sub>
          <Sub className='simple-link'>Cornell Hedge Fund</Sub>
          <Sub className='simple-link'>Photo</Sub>
        </Nav>
      </IntroBlock>
    </MainBlock>
  );
}

export default Landing;
