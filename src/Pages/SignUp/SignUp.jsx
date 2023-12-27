import { Link } from "react-router-dom";
import Lottie from "lottie-react";

import img from "./signImg.json";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    //
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="hero min-h-screen  ">
      <div className="hero-content flex-col lg:flex-row   w-full  justify-around">
        <div className="text-center w-1/2 lg:text-left">
          <Lottie animationData={img}></Lottie>
        </div>
        <div className="card   w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <h1 className="text-4xl font-bold text-center py-5">
              Sign Up Now !!
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#FF3811] text-white">Sign Up </button>
            </div>
          </form>

          {/* others */}
          <section>
            <p className="text-sm text-center py-5 ">
              Already have an account ?
              <Link
                rel="noopener noreferrer"
                href="#"
                className="underline font-bold text-[#FF3811]"
                to="/login"
              >
                Login
              </Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
