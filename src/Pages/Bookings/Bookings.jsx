import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import BookingRow from "../BookingRow/BookingRow";


const Bookings = () => {
    const { user } = useContext(AuthContext)

    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    return (
        <div>
            <h2>Bookings: {bookings.length}</h2>

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
                            <th>Name</th>
                            <th>Job</th>
                            <th>email</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map(booking =>
                                <BookingRow
                                    key={booking._id}
                                    booking={booking}>
                                </BookingRow>)
                        }


                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default Bookings;