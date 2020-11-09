import React from 'react';
import About from './../About/About';
import Footer from './../Footer/Footer';
import Home from './../Home/Home';
import Portfolio from './../Portfolio/Portfolio';
import Profile from './../Profile/Profile';
import Work from './../Work/Work';
import SocialMedia from './../SocialMedia/SocialMedia';
const Index = () => {
  return (
    <div>
     <Home/>
     <Work/>
     <Portfolio/>
     <Profile/>
     <About/>
     <SocialMedia/>
     <Footer/>
    </div>
  );
}

export default Index;
