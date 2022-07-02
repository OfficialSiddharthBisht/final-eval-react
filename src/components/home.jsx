import React from "react";

function Home(){
    React.useInsertionEffect(()=>{
        fetch("http://localhost:8080/movies")
        .then((response)=>{
            return response.json();
        })
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[])
    return(
        <>
            Home Page
        </>
    )
}


export default Home;