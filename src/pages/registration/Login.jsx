import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Mycontext from '../../context/data/myContext'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'
import Loader from '../../components/loader/Loader'
import { auth } from '../../firebase/FirebaseConfig'
// import './App.css'
function Login() {

    const [email, setemail] = useState("")
    const [pass, setpass] = useState("")

    const context=useContext(Mycontext)
    const{loading,setLoading}=context

    const navigate=useNavigate()

    const login= async()=>{
        setLoading(true)
  

    try {
        const result=await signInWithEmailAndPassword(auth,email,pass)
        localStorage.setItem('user',JSON.stringify(result))
       navigate("/")
        toast.success("Login Successfully")
        setLoading(false)
        
    } catch (error) {
        toast.error("Login Unsuccessfull")
        console.log(error);
        setLoading(false)
    }
    }
    

   
    return (
        <div className='loginContainer flex justify-center items-center h-screen'>
           {loading && <Loader></Loader>}
            <div className=' bg-indigo-800 px-10 py-10 rounded-xl '>
              
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Login</h1>
                </div>
                <div>
                    <input type="email"
                    value={email}
                    onChange={(e)=> setemail(e.target.value)}
                        name='email'
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                    value={pass}
                    onChange={(e)=> setpass(e.target.value)}
                        type="password"
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                    />
                </div>
                <div className=' flex justify-center mb-3'>
                    <button
                    onClick={login}
                        className=' bg-blue-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                        Login
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Don't have an account ! <Link className=' text-yellow-500 font-bold' to={'/signup'}>Signup</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Login