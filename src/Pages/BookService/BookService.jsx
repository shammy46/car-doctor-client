//import { useContext } from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
//import AuthProviders from "../../Providers/AuthProviders";

const BookService = () => {

    const service = useLoaderData();
    const { title, _id, price, img } = service;
    const { user } = useContext(AuthContext);



    const handleBookService = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {

            customerNme: name,
            email,
            img,
            date,
            service: title,
            service_id: _id,
            price: price
        }
        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insetedId){
                    alert('service book successfully')
                }
            })
    }








    return (
        <div>
            <h2 className="text-center text-3xl">Book service</h2>

            <form onSubmit={handleBookService}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" name="name" defaultValue={user?.displayName} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" defaultValue={user?.email} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due amount</span>
                        </label>
                        <input type="text" defaultValue={`$` + price} className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">

                        <input className="btn btn-primary btn-block" type="submit" value="order confirm" />
                    </div>
                </div>


            </form>

        </div>
    );
};

export default BookService;