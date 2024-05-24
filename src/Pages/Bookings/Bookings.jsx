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
    }, [url]);


    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete');
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainning = bookings.filter(booking => booking._id != id);
                        setBookings(remainning);
                    }
                })
        }
    }



    const handleBookingConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    //update state
                    const remaining = bookings.filter(booking => booking._id != id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status= 'confirm'
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings);
                }
            })
    }






    return (
        <div>
            <h2>Bookings: {bookings.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-base-200">
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th className="font-bold text-xl text-black">Image</th>
                            <th className="font-bold text-xl text-black">Service Name</th>

                            <th className="font-bold text-xl text-black">Email</th>
                            <th className="font-bold text-xl text-black">Date</th>
                            <th className="font-bold text-xl text-black">Price</th>
                            <th className="font-bold text-xl text-black">Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map(booking =>
                                <BookingRow
                                    key={booking._id}
                                    booking={booking}
                                    handleDelete={handleDelete}
                                    handleBookingConfirm={handleBookingConfirm}>
                                </BookingRow>)
                        }


                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default Bookings;