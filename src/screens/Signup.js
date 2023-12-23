import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from "react";
export default function Signup() {
    const [credentials, setcredentials] = useState({name:"",email:"",password:"",geolocation:""})

    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createUser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation})
        });
        const json = await response.json();
        if(response.ok)
        {
            alert("User created successfully");
        }
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
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" name="email" aria-describedby="emailHelp" value={credentials.email} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" value={credentials.password} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="geolocation" className="form-label">Address</label>
                    <input type="text" className="form-control" name="geolocation" value={credentials.address} onChange={onChange}/>
                </div>

                <button type="submit" className="btn btn-success">Submit</button>
                <Link to='/login' className='m-3 btn btn-danger'>Already a user</Link>
            </form>
        </div>
        </>
    )
}
