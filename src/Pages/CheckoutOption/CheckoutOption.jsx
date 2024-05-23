import { useLoaderData } from "react-router-dom";


const CheckoutOption = () => {
    const service = useLoaderData();
    const { title, _id } = service;

    return (
        <div>
            <h2>book services:{title}</h2>
            <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button >Login</button>
                        <input className="btn btn-primary btn-block" type="submit" value="order confirm" />
                    </div>
                </div>
                

            </form>


        </div>
    );
};

export default CheckoutOption;