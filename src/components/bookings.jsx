import React from "react";
import styled from 'styled-components'
// function Bookings({data}){
    function Bookings(){    
    let data = [
        {
            "id": 1,
            "title": "Doctor Strange in the Multiverse of Madness",
            "original_title": "Doctor Strange in the Multiverse of Madness",
            "overview": "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
            "poster_path": "https://image.tmdb.org/t/p/original/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
          },
          {
            "id": 2,
            "title": "Blasted",
            "original_title": "Blasted - Gutta vs. Aliens",
            "overview": "When a former childhood friend crashes Sebastian's bachelor party and makes it all about himself, only an alien invasion can make them put aside their bad blood and reunite as the kick-ass laser-tag duo they once were.",
            "poster_path": "https://image.tmdb.org/t/p/original/aEB9ogCBCUpSFTZVhD7NvTh44VW.jpg"
          }
    ]
    return(
        <>
            Bookings Page
            <>
            <table style={{
                borderCollapse:"collapse",
                border:"2px solid black"
            }}>
                <thead >
                    <th>Movie Name</th>
                    <th>Booked</th>
                    <th>Cancel</th>
                </thead>
                <tbody>
                    {
                        data.forEach((item)=>{
                            <tr key = {item.id}>
                                <td>{item.title}</td>
                                <td>True</td>
                                <td><button>Cancel Booking</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            </>
        </>
    )
}


export default Bookings;