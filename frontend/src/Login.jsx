import { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
    const [data, setData] = useState({
       email:"",
       password:""
    })
     const navigate = useNavigate()
    const [value, setValue] = useState([])

    const handleOnChange = (e)=>{
          const {name, value} = e.target
          setData(res=>({...res,[name]:value}))
    }
    const handleOnClick = async(e)=>{
        e.preventDefault()
        try {
            const response =await axios.post("http://localhost:3002/login",data)
            console.log(response)
            setValue(response.data)
            if(response.status === 200){
                navigate("/home")
            }
        } catch (error) {
            console.log(error)
        }

    }
  return (
    <div>
        <form>
        <input type="email" placeholder="Enter Your Email" name="email" onChange={(e)=>handleOnChange(e)} value={data.email}  />
        <input type="text" placeholder="Enter Your Password" name="password" onChange={(e)=>handleOnChange(e)} value={data.password} /><br />
        <button onClick={(e)=>handleOnClick(e)}>Login</button>
        <p>If you dont have id<Link to='/register'> Click here</Link></p>
        </form>

        <ul>{value}</ul>
     
    </div>
  )
}

export default Login
