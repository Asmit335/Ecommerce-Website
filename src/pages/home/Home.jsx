// import React from 'react'
import React, { useContext } from 'react';
import Layout from '../../components/layout/Layout'
import MyContext from '../../context/data/myContext'

const Home = () => {
  const context1 = useContext(MyContext)
  const {state,hobby}=context1;
  return (
    <>
    <Layout>
    Home
    </Layout>
    </>
   
  )
}

export default Home