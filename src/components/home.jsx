import React from "react";
import styled from 'styled-components'
function Home(){
const [movie , setMovie] = React.useState([]);
    React.useEffect(()=>{
        fetch("http://localhost:8080/movies")
        .then((response)=>{
            return response.json();
        })
        .then((response)=>{
            setMovie(response);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[])
    console.log(movie);
    return(
        <Container>
             {
                movie?.map((product)=>
                (
                    <div key ={product.id}>
                    <>{product.title}</>
                    <>{product.image}</>
                    {/* <><Link to={`/products/${product.id}`}>More Details</Link></> */}
                    </div>
 
                ))
            }
        </Container>
    )
}


export default Home;
let Container = styled.div`
    display : grid;
    grid-template-column: repeat(3,1fr);
`