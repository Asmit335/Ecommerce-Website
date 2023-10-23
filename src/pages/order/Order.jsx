import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import Mycontext from '../../context/data/MyContext'

const Order = () => {

  const context=useContext(Mycontext)
  

  return (
    <Layout>Order my boy ak</Layout>
  )
}

export default Order