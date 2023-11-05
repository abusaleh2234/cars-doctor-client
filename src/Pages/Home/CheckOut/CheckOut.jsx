import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const CheckOut = () => {

    const {user} = useContext(AuthContext)

    const loadeddata = useLoaderData()
    console.log(loadeddata);
    const { title,price,img, _id } = loadeddata

    const hendelBookedServices = (e) => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const price = form.price.value;

        const booking = {
            customerName: name,
            img:img,
            title,
            _id,
            date,
            email,
            price
        }
        console.log(booking);

        fetch("http://localhost:5000/bookingsinfo",{
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert("booking complete")
            }
        })
    }

    
    return (
        <div>
            <h2>Check Out : {title}</h2>
            <div className="">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <form onSubmit={hendelBookedServices} className="card-body">
                        <div className=" grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" name="date" placeholder="date" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email"  defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name="price" defaultValue={price} className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Order Confirm" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;