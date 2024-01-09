import React, { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
import axios from "axios";

const Bookings = () => {
  const { user } = useContext(AuthContext);

  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => setBookings(data));

  // axios.get(url,{withCredentials:true})
  // .then(res=>{
  //   setBookings(res.data)
  // })


  const handleDelete = (id) => {
    console.log("this is id ", id);

    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your Bookings has been deleted.",
            icon: "success",
          });

          const remaining = bookings.filter((booking) => booking._id !== id);
          setBookings(remaining);
        }
      });
  };

  const handleBookingConfirm = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          updated.status = "confirm";
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
          Swal.fire("data updated")
        }
      });
  };

  return (
    <div>
      <h2>this is bookings Services : {bookings.length} </h2>
      

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th> 
              <th>Image</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRow
                booking={booking}
                handleDelete={handleDelete}
                handleBookingConfirm={handleBookingConfirm}
                key={booking._id}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
