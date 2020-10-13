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
  height: auto;
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
`;

function Landing() {
  return (
    <MainBlock>
      <IntroBlock className='row'>
        <ProfPic src='/images/me.jpg' className='col'></ProfPic>
        <Nav className='col'>
          <Lead className='major'>Adrian Lee</Lead>
          <SubLead className='secondary bold'>
            Head of Product, rapStudy
          </SubLead>
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
