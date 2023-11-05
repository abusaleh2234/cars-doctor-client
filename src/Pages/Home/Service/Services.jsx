import { useState } from "react";
import { useEffect } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [services,setServices] = useState([])

    useEffect( () => {
        fetch("http://localhost:5000/services")
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    // console.log(services);
    return (
        <div>
            <div className="text-center py-10 space-y-3 pb-10">
                <h3 className="text-xl font-bold text-[#FF3811]">Service</h3>
                <h2 className="text-5xl font-bold">Our Service Area</h2>
                <p >the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;