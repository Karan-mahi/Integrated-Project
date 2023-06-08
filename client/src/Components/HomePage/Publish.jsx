import React from "react";
import "./Publish.css";
// import logo from "../HomePage/images/logo-black.png";
import { useState } from "react";
const Publish = () => {

  const [user, setUser] = useState({
    name: "",
    source: "",
    destination: "",
  });
  function handleReset() {
    setUser({
      name: "",
      source: "",
      destination: "",
    });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(user.name, user.value);
    setUser({
      ...user,
      [name]: value,
    });
    console.log(user);
  };


  const publish = async (e) => {
    e.preventDefault();
    const { name, source, destination } = user;
    console.log(user);
    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/addRoute`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        source,
        destination
      }),
    });
    const data = await res.json();

    if (res.status === 201 || res.status === 422) {
      alert(data.message);
      //   navigate("/login");
    } else alert(data.error);
    handleReset();
  };
  
  return (
    <div className="outermost1">
      <div className="outer1">
        <div className="uppertext">
          <h1>
            Join Quick PnD to save travel costs and earn points by sharing your
          </h1>
          <h1>vehicle for delievery of Goods</h1>
          <div className="box">
            <div className="logosmall4">
              <div className="textsmall4">
                <label>
                  Name
                  <input
                    placeholder="ex: Rahul"
                    type="text"
                    id="name"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>

            <div className="logosmall1">
              <div className="textsmall1">
                <label>
                  From
                  <input
                    placeholder="Pickup from"
                    type="text"
                    id="source"
                    name="source"
                    value={user.source}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>

            <div className="logosmall2">
              <div className="textsmall2">
                <label>
                  To
                  <input
                    placeholder="Drop At"
                    type="text"
                    id="destination"
                    name="destination"
                    value={user.destination}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
            <div className="logosmall3">
              <div className="textsmall3">
                <label>
                  Vehicle
                  <select>
                    <option value="bike">Bike</option>
                    <option value="car">Car</option>
                    <option value="truck">Truck</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="leftover"></div>
            {/* <div className="logosmall4">
              <div className="textsmall4">
                <label>
                  Capacity
                  <select>
                    <option value="light">2 kg</option>
                    <option value="medium">10 kg</option>
                    <option value="heavy">30 kg</option>
                  </select>
                </label>
              </div>
            </div> */}
          </div>
          <div className="box2">
            <button onClick={publish}>Publish a Route</button>
          </div>
          <div className="img1"></div>
        </div>
      </div>
      <div className="outer2">
                <div className="heading2">
                    <h2>Publish Your Route in Just Minutes</h2>
                </div>
                <div className="feature1">
                    <div className="logosmall5"></div>
                    <div className="textsmall5">
                        <h4>Create a Quick PnD Account</h4>
                        Add your profile picture, a few words about you and your phone number to
                        increase trust between members.
                    </div>
                </div>
                <div className="feature2">
                    <div className="logosmall6"></div>
                    <div className="textsmall5">
                        <h4>Publish Your Route</h4>
                        Indicate departure and arrival points, the type of transport and check our
                        recommended price to increase your chances of getting your first delivery.
                    </div>
                </div>
                <div className="feature3">
                    <div className="logosmall7"></div>
                    <div className="textsmall5">
                        <h4>Accept Booking Requests</h4>
                        Review client profiles and accept their requests to deliver their good with you.
                        That’s how easy it is.
                    </div>
                </div>
                {/* <div className="box3">
                    <button>Publish a Route</button>
                </div> */}
            </div>
    </div>
  );
};

export default Publish;
