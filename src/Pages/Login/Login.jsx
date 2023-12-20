import login from "../../assets/images/login/login.svg";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const handleLogin = (e) => {
  e.preventDefault();
  console.log("ok");
};

const Login = () => {
  return (
    <div className="hero min-h-screen  ">
      <div className="hero-content flex-col lg:flex-row   w-full  justify-around">
        <div className="text-center w-1/2 lg:text-left">
          <img src={login} alt="" />
        </div>
        <div className="card   w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-4xl font-bold text-center py-5">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#FF3811] text-white">Sign In</button>
            </div>
          </form>

          {/* others */}
          <section>
            <div className="flex items-center pt-4 space-x-1  ">
              <div className="flex-1 h-px sm:w-16 "></div>
              <p className="px-3 text-sm pb-4 ">Or Sign In with</p>
              <div className="flex-1 h-px sm:w-16 "></div>
            </div>
            <div className="flex justify-center space-x-4">
              <button className="p-3 rounded-sm">
                <FaFacebookF className="text-2xl"></FaFacebookF>
              </button>
              <button
                aria-label="Log in with Twitter"
                className="p-3 rounded-sm"
              >
                <FaLinkedinIn className="text-2xl"></FaLinkedinIn>
              </button>
              <button
                aria-label="Log in with GitHub"
                className="p-3 rounded-sm"
              >
                <FaGoogle className="text-2xl"></FaGoogle>
              </button>
            </div>
            <p className="text-sm text-center py-5 ">
              Have an account?
              <Link
                rel="noopener noreferrer"
                href="#"
                className="underline font-bold text-[#FF3811]"
              >
                Sign up
              </Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Login;
