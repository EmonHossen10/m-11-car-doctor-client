import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Checkout = () => {
  const service = useLoaderData();
  const { title, img, price, _id } = service;
  const { user } = useContext(AuthContext);

  const handleBookOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;

    const booking = {
      customerName: name,
      date,
      email,
      img,
      price,
      service_id: _id,
      service: title,
    };
    console.log(booking);

    fetch("http://localhost:5000/addBookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
          Swal.fire({
            title: "Successful",
            text: "Successfully Added Your Booking",
            icon: "success"
          });
        }
      });
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-5">Name : {title} </h2>

      <div className="relative">
        <img
          src={img}
          className="w-full h-[350px] rounded-xl"
          alt=""
          style={{ filter: "brightness(80%)" }}
        />

        <div
          className="absolute top-0 left-0 w-full h-full rounded-xl"
          style={{
            background:
              "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))",
          }}
        ></div>
        <h3 className="absolute top-1/2 left-16 text-white font-bold text-4xl">
          Check Out
        </h3>
      </div>
      <div>
        <h2 className="absolute right-1/2  bg-[#FF3811] text-white p-3  top-[530px] rounded-t-xl ">
          Home/Checkout
        </h2>
      </div>

      {/* form part */}

      <section className="bg-gray-100 p-8 my-10 rounded-xl">
        <form onSubmit={handleBookOrder} className="card-body">
          <section className="grid grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                defaultValue={user?.displayName}
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due Amount </span>
              </label>
              <input
                type="text"
                defaultValue={"$ " + price}
                name="number"
                className="input input-bordered"
                required
              />
            </div>
          </section>
          <textarea
            rows="5"
            cols="50"
            className="textarea  mt-5  "
            placeholder="Your Message"
          ></textarea>

          <div className="form-control mt-6">
            <input
              type="submit"
              value="Order Confirm"
              className="btn   text-white  bg-[#FF3811]  hover:btn-outline    "
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default Checkout;
