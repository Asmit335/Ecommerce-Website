// import React from 'react'
import React, { useContext } from 'react';
import Layout from '../../components/layout/Layout'
import MyContext from '../../context/data/myContext'
import HeroSection from '../../components/heroSection/HeroSection';
import Filter from '../../components/filter/Filter';
import ProductCard from '../../components/productCard/ProductCard';
import Track from '../../components/track/Track';
import Testimonial from '../../components/testimonial/Testimonial';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const context1 = useContext(MyContext)
  const {state,hobby}=context1;

  const dispatch=useDispatch();
  const cartItem=useSelector((state)=> state.cart)

  return (
    <>
    <Layout>
    <HeroSection/>
    <Filter></Filter>
    <ProductCard></ProductCard>
    <Track></Track>
    <Testimonial></Testimonial>
    
    </Layout>
    </>
   
  )
}

export default Home