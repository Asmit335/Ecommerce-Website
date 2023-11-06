import { Link } from 'react-router-dom'
// import './App.css'
function Login() {
   
    return (
        <div className='loginContainer flex justify-center items-center h-screen'>
           
            <div className=' bg-teal-800 px-10 py-10 rounded-xl '>
              
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>SignUp</h1>
                </div>

                <div>
                    <input type="text"
                        name='name'
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Name'
                    />
                </div>
                <div>
                    <input type="email"
                        name='email'
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                        type="password"
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                    />
                </div>
                <div className=' flex justify-center mb-3'>
                    <button
                        className=' bg-blue-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                        Signup
                    </button>
                </div>
                <div>
                    <h2 className='text-white'> Already have an account <Link className=' text-yellow-500 font-bold' to={'/login'}>Login</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Login