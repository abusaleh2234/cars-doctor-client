import img1 from ".././../assets/images/banner/1.jpg"
import img2 from ".././../assets/images/banner/2.jpg"
import img3 from ".././../assets/images/banner/3.jpg"
import img4 from ".././../assets/images/banner/4.jpg"

const Banner = () => {
    return (
        <div className="">
            <div className="carousel h-screen">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full rounded-xl" />

                    <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute w-full h-full flex items-center  bottom-0 text-white rounded-xl">
                        <div className="w-2/5 p-8 space-y-6">
                            <h1 className="text-7xl font-bold">Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className=" space-x-4">
                                <button className="btn btn-outline bg-[#FF3811] border-none text-white">Discover More</button>
                                <button className="btn btn-outline text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full rounded-xl" />
                    <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute w-full h-full flex items-center  bottom-0 text-white rounded-xl">
                        <div className="w-2/5 p-8 space-y-6">
                            <h1 className="text-7xl font-bold">Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className=" space-x-4">
                                <button className="btn btn-outline bg-[#FF3811] border-none text-white">Discover More</button>
                                <button className="btn btn-outline text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full rounded-xl" />
                    <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute w-full h-full flex items-center  bottom-0 text-white rounded-xl">
                        <div className="w-2/5 p-8 space-y-6">
                            <h1 className="text-7xl font-bold">Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className=" space-x-4">
                                <button className="btn btn-outline bg-[#FF3811] border-none text-white">Discover More</button>
                                <button className="btn btn-outline text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full rounded-xl" />
                    <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute w-full h-full flex items-center  bottom-0 text-white rounded-xl">
                        <div className="w-2/5 p-8 space-y-6">
                            <h1 className="text-7xl font-bold">Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className=" space-x-4">
                                <button className="btn btn-outline bg-[#FF3811] border-none text-white">Discover More</button>
                                <button className="btn btn-outline text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;