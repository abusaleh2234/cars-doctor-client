import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const SignUP = () => {

    const {createUser} = useContext(AuthContext)

    const hendelSingUp = (e) => {
        e.preventDefault()

        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        const user = {
            name,
            email,
            password
        }
        console.log(user);

        createUser(email,password)
        .then(res => {
            console.log(res.user);
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-16">
                <div className="text-center lg:text-left w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 shadow-2xl bg-base-100 w-1/2">
                    <h1 className="text-5xl font-bold text-center p-8">Sign Up</h1>
                    <form onSubmit={hendelSingUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Submit" className="btn btn-primary border-none bg-[#FF3811]" />
                        </div>
                    </form>
                    <p className="p-8 text-center">Alredy have a account <Link to="/login" className="text-[#FF3811] font-bold">Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default SignUP;