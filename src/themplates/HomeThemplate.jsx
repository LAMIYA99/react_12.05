import React from 'react'
import BannerSection from '../sections/BannerSection'
import HeroSection from '../sections/HeroSection'
import TitleSection from '../sections/TitleSection'
import TextSection from '../sections/TextSection'
import VideoSection from '../sections/VideoSection'
import HigestSection from '../sections/HigestSection'
import ProductSection from '../sections/ProductSection'
import SliderSection from '../sections/SliderSection'
import CardsSection from '../sections/CardsSection'
import CustomerSection from '../sections/CustomerSection'

const HomeThemplate = () => {
  return (
    <>
      < BannerSection />
      <HeroSection />
      <TitleSection />
      <TextSection />
      <VideoSection />
      <ProductSection />
      <HigestSection />
      <SliderSection />
      <CardsSection/>
      <CustomerSection/>
    </>

  )
}

export default HomeThemplate