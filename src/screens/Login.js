import React,{useState} from 'react';
import { Link,useNavigate } from 'react-router-dom'

export default function Login()
{
    const [credentials, setcredentials] = useState({email:"",password:""})
    let navigate = useNavigate();
    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/loginuser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({email:credentials.email,password:credentials.password})
        });
        const json = await response.json();
        if(json.errors==="Invalid credentials")
        {
            alert("invalid credentials");
        }
        if(json.success)
        {
            localStorage.setItem("userEmail",credentials.email);
            localStorage.setItem("authToken",json.authToken);
            console.log(localStorage.getItem("authToken"));
            navigate("/");
        }
        navigate("/");
        console.log(json);           
        
    }
    const onChange=(e)=>{
        setcredentials({...credentials,[e.target.name]:e.target.value})
    }
    return (
        <>
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" name="email" aria-describedby="emailHelp" value={credentials.email} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" value={credentials.password} onChange={onChange}/>
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
                <Link to='/signup' className='m-3 btn btn-danger'>I'm a new user</Link>
            </form>
        </div>
        </>
    )
}