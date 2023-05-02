import React, { useContext, useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import {BsArrowLeftRight} from "react-icons/bs";
import toast from "react-hot-toast";
import { Await, useNavigate } from "react-router-dom";
import BusContext from "./BusContext";

const SearchBus = () => {
    const {from , to , setFrom , setTo, setBuses,busloader,setBusLoader} = useContext(BusContext);
    const [date, setDate] = useState("");
    const navigate = useNavigate(); 

    function interchangePlaces(){
        const fromplace = from;
        const toplace = to;
        setFrom(toplace);
        setTo(fromplace);
    }
    async function fetchbuses() {
        // fetch buses here
        setBusLoader(true);
        const response = await fetch(`https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=${from}&destination=${to}`);
        const data = await response.json();
        console.log(data);
        setBuses(data);
        setBusLoader(false);
    }
    async function searchBuses(){
        if(!from || !to || !date){
            //toast should appear with error tag
            toast.error("All the fields are to be filled");
        }
        else{
           await fetchbuses()
            navigate("/results");
        }
    }

    return (
        <div className="m-5">
            <InputGroup className="mb-4 flex align-items-center ">
                <Form.Control placeholder="From" aria-label="Text input with dropdown button" value={from} onChange={(e)=>{
                    setFrom(e.target.value)
                }} />
                <BsArrowLeftRight onClick={interchangePlaces}></BsArrowLeftRight>
                <Form.Control placeholder="To" aria-label="Text input with dropdown button" value={to} onChange={(e) =>{
                    setTo(e.target.value)
                }} />
                <Form.Control type="date" placeholder="Date" aria-label="Text input with dropdown button" value={date} onChange={(e)=>{
                    setDate(e.target.value)
                }} />
                <Button variant="danger" onClick={searchBuses}>Search Buses</Button>
            </InputGroup>
        </div>
    )
}

export default SearchBus;