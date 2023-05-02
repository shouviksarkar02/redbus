import { useContext, useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import BusContext from "./BusContext";
import BusDetail from "./BusDetail"

function SearchResults() {
    //const [buses, setBuses] = useState([]);
    //const [loader, setLoader] = useState(false);
    const {from , to,buses,setBuses,busloader} = useContext(BusContext);
    const navigate = useNavigate();
    function sortbuses(criteria) {
        console.log(criteria);
        const busesTempArr = [...buses];
        if (criteria === "Price") {
            //sort acc to price

            busesTempArr.sort(function (a, b) {
                console.log(a, b);
                return Number(a.ticketPrice) - Number(b.ticketPrice)
            })

        }
        else if (criteria === "Departure") {
            //sort acc to departure

            busesTempArr.sort(function (a, b) {
                console.log(a.departureTime, b.departureTime);
                const len1 = a.departureTime.length;
                const len2 = b.departureTime.length;
                const time1 = a.departureTime.slice(0, len1-2)+" "+a.departureTime.slice(len1-2);
                const time2 = b.departureTime.slice(0, len2-2)+" "+b.departureTime.slice(len2-2);
                
                
                return Number(new Date('1970/01/01 ' + time1)) - Number(new Date('1970/01/01 ' + time2))

            })

        }
        else if (criteria === "Arrival") {
            //sort acc to arrival
        }
        setBuses(busesTempArr)
    }

    if (busloader) {
        return <Spinner animation="border" variant="danger"></Spinner>
    }
    return (
        <div className="bg-danger p-3 d-flex flex-column" >
            <div className="bg-white d-flex m-2  justify-content-center p-2 w-75 align-self-center ">
                <h4 className="w-50">Sort By :</h4>
                <div className="d-flex justify-content-around w-100">
                    {
                        ["Departure", "Arrival", "Price"].map(criteria => {
                            return <button variant="danger" className="bg-danger" onClick={() => { sortbuses(criteria) }}>{criteria}</button>
                        })
                    }
                </div>

            </div>
            {buses.map(bus => {
                return <BusDetail bus={bus}></BusDetail>
            })}

        </div>
    )
}

export default SearchResults