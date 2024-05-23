import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [Services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className="mt-4">
            <div className="text-center">
                <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
                <h2 className="text-5xl">Our Service Area</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio tempore quasi in, nihil asperiores vel excepturi quae magni eveniet <br /> sit necessitatibus possimus nostrum voluptatem. Animi architecto qui consectetur sequi omnis!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    Services.map(service=> <ServiceCard
                    key={service._id}
                    service={service}></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Services;