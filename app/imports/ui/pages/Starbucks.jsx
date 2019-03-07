import React from 'react';
import TopMenu from '../components/TopMenu';
import MainBanner from '../components/MainBanner';
import BlackBanner from '../components/BlackBanner';
import WhiteBanner from '../components/WhiteBanner';
import GreenBanner from '../components/GreenBanner';
import Footer from '../components/Footer';


export default class Starbucks extends React.Component {

  render() {
    return (
        <div>
          <div className="top_green_bar"/>
          <TopMenu/>
          <MainBanner/>
          <BlackBanner/>
          <WhiteBanner/>
          <GreenBanner/>
          <Footer/>
        </div>
    );
  }
}
