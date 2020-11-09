import React from 'react';
import {HomeInformation,HomeInfo,HomeBtn,HomeDesc,HomeSection,HomeTitle,Span}  from './style.js'
const Home = () => {
  return (
    <HomeSection>
      <div className="container">
        <HomeInformation>
          <HomeTitle>Ahmed Abo OUf</HomeTitle>
          <HomeInfo>Creative Director</HomeInfo>
          <HomeDesc>
            Iam a professional <Span>React Developer</Span> and Laravel Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you.
                    </HomeDesc>
          <HomeBtn>Let's Begin</HomeBtn>
        </HomeInformation>
      </div>
    </HomeSection>
  );
}

export default Home;
