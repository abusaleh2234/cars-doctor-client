import aboutimg1 from "../../assets/images/about_us/parts.jpg"
import aboutimg2 from "../../assets/images/about_us/person.jpg"

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-1/2 space-y-5">
                        <p className="text-xl text-[#FF3811] font-bold">About Us</p>
                        <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                        <p className=" text-base font-normal">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable. </p>
                        <p className="text-base font-normal">The majority have suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable. </p>
                        <button className="btn btn-outline bg-[#FF3811] border-none text-white">Get More Info</button>
                    </div>
                    <div className="relative card flex-shrink-0 w-1/2">
                        <img src={aboutimg2} alt="" className="w-4/5 rounded-lg" />
                        <img src={aboutimg1} alt="" className="w-2/4 absolute right-8 top-2/3 border-8 border-white rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;