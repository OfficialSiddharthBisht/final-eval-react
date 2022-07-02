import React from "react";
import styled from 'styled-components'
import {useParams} from "react-router-dom";
import {Spinner,Box,Image,Button, useDisclosure,Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton} from "@chakra-ui/react"

function MovieDetails(){
    const{id}=useParams();
    const [movieDetail,setMovieDetail]=React.useState([]);
    const [isLoading,setIsLoading]=React.useState(false);
    const [isError,setIsError]=React.useState(false);
    const {isOpen, onOpen, onClose}=useDisclosure()

    React.useEffect(()=>
    {
        setIsLoading(true);
        fetch(`http://localhost:8080/movies/${id}`)
        .then((res)=>res.json())
        .then((res)=>{
            setIsError(false);
            setMovieDetail(res);
            console.log(res);
        })
        .catch((error)=>
        {
            setIsError(true);
            console.log(error);
        })
        .finally(()=>setIsLoading(false));
    },[id]);
    if(isLoading)
    {
        return (
            <Box textAlign="center" marginTop="250px">
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
                textAlign="center"
            />
            </Box>
        );
    }
    if(isError)
    {
        return (
            <h1>Error...</h1>
        )
    }
    const {title, image ,description} = movieDetail;
    console.log(movieDetail);
    return(
        <Box textAlign="center" width="200px" margin="auto" boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
        <Image textAlign="center" boxSize="200px" src={image} borderRadius='full'  />
        <h3>{title}</h3>
        <Button onClick={onOpen}>Description</Button>
        <Box width="400px" mt="150px">
            <Modal size="sm" isCentered isOpen={isOpen} onClose={onClose}>
              
                <ModalContent>
                    <ModalHeader>Description</ModalHeader>
                <ModalCloseButton/>
                    <ModalBody>
                    {description}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    </Box>
    )
}


export default MovieDetails;