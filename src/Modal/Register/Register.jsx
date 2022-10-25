import React from 'react'
import './Register.css'

import { useEffect,useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { BarLoader } from 'react-spinners'

const Login = () => {
  const [isloading, setisLoading] = useState(true)
  const [email,setEmail]=useState('')
  const[name,setName]=useState('')
  const[phone,setPhone]=useState('')
  const[password,setPassword]=useState('')
  const navigate = useNavigate()
  
 
  

   
 

  const addUser = async(e)=>{
    e.preventDefault();
    await axios.post('http://localhost:5000/aux/register',{
       email:email,
       username:name,
       phonenumber:phone,
      password:password
      }).then(response=>console.log(response))
    
      navigate('/login');

  }
 
 
const Loading = ()=>{
  return (
    <>
    <div className="login1">
    <p className='text-white'><BarLoader color='white'/></p>
    </div>
    </>
  )
}

useEffect(()=>{ 
  setTimeout(()=>{
   
    setisLoading(false)
  
  },3000)
},[isloading])



  return (
    <>
    {isloading?<Loading/>:
    <div className="login1">
      <div className="login2">
            <p className='text-center text-whtie mt-4 mb-5 text-primary'>[ Register ]</p>
            <form action="">
                <div className='text-center mb-4 mt-4' >
                <input type="text"   placeholder='example@gmail.com' onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='text-center mb-4'>
                <input type="text" placeholder='Username' onChange={(e)=>setName(e.target.value)}/>
               </div>
               <div className='text-center mb-4'>
                <input type="text" placeholder='+91 6379093708' onChange={(e)=>setPhone(e.target.value)}/>
               </div>
                <div className='text-center'>
                <input type="text" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
               </div>
               <div className="container mt-5">
               <div className="row">
                   <div className="col-7 text-center account"><Link to='/login'>[ Already You Have Account ? ]</Link></div>
                   <div className="col-5 text-center register text-success"onClick={addUser}>[ Register ]</div>
                </div>
             </div>   
            </form>
            
        </div>

    </div>
} 
    </>
  )
}

export default Login