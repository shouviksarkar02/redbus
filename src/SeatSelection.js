import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BusContext from "./BusContext";
import {Button} from "react-bootstrap";

function SeatSelection() {
    //const seats = [1, 2, 3, 4, 5, 6, 7, 8];
    const [SelectedSeat , setSelectedSeat]=useState([]);
    return <Container className="bg-danger mw-100 p-4 d-flex justify-content-center align-items-center flex-column">
        <div className="bg-white p-2 flex-column">
            {[1, 2, 3].map((seatRow, i) => {
                return <div className={`row mt-${Math.ceil(seatRow * 1.5)}`} key={seatRow}>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((seat, j) => {
                        return <div style={{ border: "1px solid black", width: "30px", height: "30px", backgroundColor: "gray", marginRight: "15px",marginLeft:"15px" }}
                        key={i*8+j+1}
                        onClick={()=>{
                            //const SeatArr=[...SelectedSeat];
                            //SeatArr.push(i*8+j+1);
                            if(SelectedSeat.includes(i*8+j+1)){
                                const seatArrFinal=SelectedSeat.filter(seat=>{
                                    if(seat!==(i*8+j+1))
                                    return true;
                                    return false;
                                })
                                setSelectedSeat(seatArrFinal)
                            }
                            else{
                                setSelectedSeat([...SelectedSeat,i*8+j+1])
                            }
                            
                        }}
                        className={SelectedSeat.includes(i*8+j+1)?"bg-success":null}
                        ></div>
                    })}
                </div>
            })}
            {/* <div className="row">
            {seats.map(seat => {
                return <div style={{ border: "1px solid black", width: "30px", height: "30px", backgroundColor: "gray", marginRight: "15px" }}>{seat}</div>
            })}
        </div>
        <div className="row mt-2">
            {seats.map(seat => {
                return <div style={{ border: "1px solid black", width: "30px", height: "30px", backgroundColor: "gray", marginRight: "15px" }}>{seat}</div>
            })}
        </div>
        <div className="row mt-5">
            {seats.map(seat => {
                return <div style={{ border: "1px solid black", width: "30px", height: "30px", backgroundColor: "gray", marginRight: "15px" }}>{seat}</div>
            })}
        </div> */}
        </div>
        {SelectedSeat.length?<Button variant="success" className="mt-4">Book Tickets</Button>:null}

    </Container>
}
export default SeatSelection