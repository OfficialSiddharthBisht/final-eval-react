import React from "react";
import styled from 'styled-components'

function Login({getData}){
    const[formData,setFormdata]=React.useState({
        email:"",
        password:""
     })
     const handleChange=(e)=>
    {
        let{email,password}=e.target;
        setFormdata({...formData});
    }
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        console.log(formData);
        fetch(`https://reqres.in/api/register`,
        {
            method:"POST",
            body:JSON.stringify(formData),
            headers:{"Content-type":"Application/json"}
        })
        getData();
        setFormdata({
            email:"",
            password:"",
        })
    }
    const {email , password} = formData;
    return(
        <>
             <form onSubmit={handleSubmit} style={{
                    textAlign:"center"
                }}>

                <label htmlFor="email">Email: </label>
                <input 
                type="text"
                name="email"
                value={email} 
                onChange={handleChange}
                style={{
                    marginLeft:"43px"
                }} />
                <br />
                <label htmlFor="password">Password:  </label>
                <input 
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                style={{
                    marginLeft:"57px"
                }} />
                <br/>
                 <input type="submit" 
                style={{
                   width:"150px",
                   height:"30px",
                   fontWeight:"bold",
                   marginTop:"10px"
                }}/>
                
                </form>
        </>
    )
}


export default Login;