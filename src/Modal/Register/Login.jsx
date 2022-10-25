import React from 'react'
import './Register.css'

import { useEffect,useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { BarLoader } from 'react-spinners'

import Cookies from 'universal-cookie'
const cookies = new Cookies();

const Login = () => {
  const [isloading, setisLoading] = useState(true)
  const [email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const navigate = useNavigate()
 
  

   

  const loginUser = async(e)=>{
    e.preventDefault();
    await axios.post('http://localhost:5000/aux/login',{
       email:email,
      password:password
    },
    {
      withCredentials:true,
    }
    ).then(res=>{
      if(res.data === "invaliduser"){
        alert('usermail error')
      }if(res.data ===  "invalidpassword"){
        alert('userpassword error')
        
      }if(cookies.get('jwt')){
        navigate('/')
      }else{
       console.log("something went worng");
      }
    })
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
      <div className="login2" style={{maxHeight:'320px'}}>
            <p className='text-center text-primary  mt-5 mb-5'>[ Login ]</p>
            <form action="">
                <div className='text-center mb-4 mt-4' id='input1'>
                <input type="text"   placeholder='example@gmail.com' onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className='text-center' id='input2'>
                <input type="text" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
               </div>
               <div className="container mt-5">
               <div className="row">
                   <div className="col-7 text-center account"><Link to='/register'>[ Create a New Account ? ]</Link></div>
                   <div className="col-5 text-center register "onClick={loginUser} id='button'>[ Submit ]</div>
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