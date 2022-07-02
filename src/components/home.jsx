import React from "react";
import styled from 'styled-components'
import {Link} from 'react-router-dom';
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
    return(
        <Container>
             {
                movie?.map((mov)=>
                (
                    <div key ={mov.id}>
                    <>{mov.title}</>
                    <><img src = {`${mov.image}`}/></>
                    {/* <><Link to={`/movies/${mov.id}`}>More Details</Link></> */}
                    <><Link to={`/movies/`}>More Details</Link></>
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