import React from 'react'
import { useEffect ,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {MdOutlineSettings} from 'react-icons/md'
import {BarLoader} from 'react-spinners'
import './Dashboard.css'
import Cookies from 'universal-cookie'
import jwtDecode from 'jwt-decode'
import axios from 'axios'

const Dashboard = () => {
    const [isloading, setisLoading] = useState(true)
    const[person,setPerson]=useState([''])
    
    const[menu,setMenu]=useState(true)
    const navigate = useNavigate()
    const cookies = new Cookies();
    useEffect(()=>{
   if(!!!cookies.get('jwt')){
       navigate('/login')
   }
   
    },[navigate])
    const Logout = async()=>{
        await cookies.remove(`jwt`)
        navigate('/login')
        
    }
    
      
       
  
      useEffect(()=>{
        const FectApi = async()=>{
          try{
            const value1 = cookies.get('jwt');
            const value2 = jwtDecode(value1);
            await axios.post('http://localhost:5000/aux/value',{
              jwttoken:value2,
            })
            .then(res=>setPerson(res.data))

            }catch(err){
              console.log(err.message);
            }

        }
        FectApi();
       
       },[person])
       

     
     
  

 
    
  
    
    
   
const Loading = ()=>{
    return <>
    <div className="login1"><BarLoader color='white' /></div>
    </>
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
         
        <div className="containers">
        <div className={menu?"menu":"menus"}>
          <ul className=''>
            <li>Edit</li>
            <li onClick={Logout}>Logout</li>
          </ul>
        </div>
         <section className='block1'>
          <div className='mx-5 '><MdOutlineSettings className={menu?"setting":"settings"}  size={25} onClick={()=>setMenu(!menu)}/></div>
          <div className='me-5'><span>J</span><span>W</span><span>T</span></div>
         </section>
         <section className='mt-5'>
          <p className='mx-3'><span style={{color:'#d63cff'}}>[ Welcome back</span><span style={{color:'#14bef2'}}> - {person.username} ]</span></p>
          <p className='text-center mt-5' style={{color:'white'}}><span style={{color:'#4bd7f2'}}>["Your" </span> : <span style={{color:'#e87d48'}}>"Details"]</span></p>
          <ul className='mt-5 mx-5 ' style={{color:'white'}}>
            <li><span style={{color:'#4bd7f2'}}>["Name"]</span> : <span style={{color:'#e87d48'}}>[ "{person.username}" ]</span></li>
            <li><span style={{color:'#4bd7f2'}}>["Email"]</span> : <span style={{color:'#e87d48'}}>[ "{person.email}" ]</span></li>
            <li><span style={{color:'#4bd7f2'}}>["Number"]</span> : <span style={{color:'#e87d48'}}>[ "{person.phonenumber}" ]</span></li>
          </ul>
         </section>
         <section className='block3 mt-5'>
          <p>@Gnanaprakash MERN Stack Developer.com</p>
         </section>
        
        </div>
        </div>
    
  }
    </>
  )
}

export default Dashboard