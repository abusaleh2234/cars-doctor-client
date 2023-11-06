import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";


const Bookings = () => {

    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])

    const url = `https://cars-doctor-server-2nd.vercel.app/bookings?email=${user.email}`
    console.log(user);


    useEffect(() => {

        axios.get(url, {withCredentials:true})
        .then(res => setBookings(res.data))
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setBookings(data))
    }, [url])


    const hendelbookedDelet = (id) => {
        const Confirm = confirm("Are you confirm delete this service")

        if(Confirm){
            fetch(`https://cars-doctor-server-2nd.vercel.app/bookings/${id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0) {
                    const remaining = bookings.filter(booking => booking._id !== id)
                    setBookings(remaining)
                    alert("delete comfirm")
                }
            })
        }
    }

    const hendelBookingConfirm = (id) => {
        fetch(`https://cars-doctor-server-2nd.vercel.app/bookings/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify({status : "confirm"})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                // update status
                const remaining = bookings.filter(booking => booking._id !== id)
                const updated = bookings.find(booking => booking._id === id)
                updated.status = "confirm"
                const newbooking = [updated ,...remaining];
                setBookings(newbooking)
            }
        })
    }
    console.log(bookings);
    return (
        <div>
            <h2>Booking {bookings.length}</h2>
            <div className="">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Image</th>
                                <th>Service</th>
                                <th>Date</th>
                                <th>Price</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map(booking => <BookingRow 
                                    key={booking._id} 
                                    booking={booking} 
                                    hendelbookedDelet={hendelbookedDelet}
                                    hendelBookingConfirm={hendelBookingConfirm}
                                    ></BookingRow>)
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default Bookings;