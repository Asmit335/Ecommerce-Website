import React, { useContext } from 'react'
import AsmitContext from '../../../../context/data/AsmitContext'

function AddProduct() {

    const context=useContext(AsmitContext)
    const {product,setproduct,addProduct}=context

  

    return (
        <div>
            <div className=' flex justify-center items-center h-screen'>
                <div className=' bg-indigo-800 px-10 py-10 rounded-xl '>
                    <div className="">
                        <h1 className='text-center text-white text-xl mb-4 font-bold'>Add Product</h1>
                    </div>
                    <div>
                        <input type="text"
                        value={product.title}
                        onChange={(e)=> setproduct({...product,title:e.target.value})}
                            name='title'
                            className=' bg-green-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product title'
                        />
                    </div>
                    <div>
                        <input type="text"
                        value={product.price}
                        onChange={(e)=> setproduct({...product,price:e.target.value})}
                            name='price'
                            className=' bg-green-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product price'
                        />
                    </div>
                    <div>
                        <input type="text"
                        value={product.imageUrl}
                        onChange={(e)=> setproduct({...product,imageUrl:e.target.value})}
                            name='imageurl'
                            className=' bg-green-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product imageUrl'
                        />
                    </div>
                    <div>
                        <input type="text"
                        value={product.category}
                        onChange={(e)=> setproduct({...product,category:e.target.value})}
                            name='category'
                            className=' bg-green-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product category'
                        />
                    </div>
                    <div>
                       <textarea cols="10" rows="5" name='title'
                            value={product.description}
                            onChange={(e)=> setproduct({...product,description:e.target.value})}
                            className=' bg-green-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product description'>

                       </textarea>
                    </div>
                    <div className=' flex justify-center mb-3'>
                        <button 
                            onClick={addProduct}
                            className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                            Add Product
                        </button>
                    </div>
                 
                </div>
            </div>
        </div>
    )
}

export default AddProduct