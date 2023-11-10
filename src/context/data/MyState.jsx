import React, { useEffect } from 'react'
import AsmitContext from './AsmitContext'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { fireDB } from '../../firebase/FirebaseConfig';
import { Timestamp, addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore';

const MyState = (props) => {
  const [mode, setMode] = useState("light")

  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="black"
    }
    else{
      // setMode="light"
      document.body.style.backgroundColor="white"
    }
  }

  const [loading, setLoading] = useState(false)
   

  const [product, setproduct] = useState({
    title:null,
    price:null,
    imageUrl:null,
    category:null,
    description:null,
    time:Timestamp.now(),
    date:new Date().toLocaleDateString(
      "en-US",{
        month:"short",
        day:"2-digit",
        year:"numeric"
      }
    )
  })

  //add Product

  const addProduct=async()=>{
    if(product.title==null || product.category==null || product.price==null || product.description==null || product.imageUrl==null )
    {
      return toast.error("Please Fill all Fields")

    }
    const productref=collection(fireDB,"products")
    setLoading(true)

    try {
      await addDoc(productref,product)
      toast.success("Product Added Successfully")
      setTimeout(() => {
        window.location.href='/dashboard'
      }, 800);
      getProductData()
      closeModal()
      setLoading(false)
      
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
    setproduct("")
  }

//getProduct

  const [getProduct, setgetProduct] = useState([])
  const getProductData=async()=>{
    setLoading(true)

    try {
      const   q=query(
        collection(fireDB,"products"),
        orderBy("time"),
      );

      const data = onSnapshot(q, (QuerySnapshot) => {
        let productsArray = [];
        QuerySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setgetProduct(productsArray)
        setLoading(false);
      });
      return () => data;



    }
    
     catch (error) {
      console.log(error)
      setLoading(false)
      
    }
  }
useEffect(()=>{
  getProductData();
},[])

  return (
    
    <>
    <AsmitContext.Provider value={{mode,toggleMode,loading,setLoading,product,setproduct,addProduct,getProduct,setgetProduct}}>
      {props.children}
    </AsmitContext.Provider>
    {/* <Mycontext.Provider value={{mode,toggleMode,loading,setLoading}}>
      {props.children}
    </Mycontext.Provider> */}
    </>
  )
}

export default MyState

