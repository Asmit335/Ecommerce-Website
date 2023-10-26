// import React from 'react'
import React, { useContext } from 'react';
import Layout from '../../components/layout/Layout'
import MyContext from '../../context/data/myContext'
import HeroSection from '../../components/heroSection/HeroSection';
import Filter from '../../components/filter/Filter';
import ProductCard from '../../components/productCard/ProductCard';
import Track from '../../components/track/Track';

const Home = () => {
  const context1 = useContext(MyContext)
  const {state,hobby}=context1;
  return (
    <>
    <Layout>
    <HeroSection/>
    <Filter></Filter>
    <ProductCard></ProductCard>
    <Track></Track>
    </Layout>
    </>
   
  )
}

export default Home