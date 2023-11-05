import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const ServiceCard = ({ service }) => {

    const {_id, title, img, price } = service
    return (
        <div className="card  bg-base-100 border">
            <figure className="px-8 pt-8">
                <img src={img} alt="Shoes" className="rounded-xl h-[240px]"/>
            </figure>
            <div className=" px-8 py-8 w-full items-center">
                <h2 className="text-2xl	font-bold">{title}</h2>
                <div className="w-full flex justify-between items-center">
                    <p className="text-xl font-semibold	text-[#FF3811]"> Price: {price}</p>
                    <Link to={`/checkout/${_id}`}><button className="btn btn-circle"><AiOutlineArrowRight></AiOutlineArrowRight></button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;