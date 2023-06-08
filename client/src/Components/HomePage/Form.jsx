import React from "react";
import "./Form.css"; // import the Form styling

import { useNavigate } from "react-router-dom";

import { useState } from "react";
function Form() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    source: "",
    destination: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const search = async (e) => {
    e.preventDefault();
    const { source, destination } = user;

    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/api/getSolutions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        source,
        destination,
      }),
      credentials: "include",
    });
    const data = await res.json();

    const filteredData = data.map(({ name, source, destination }) => ({
      name, source, destination
    }));

    if (res.status === 200) {

      navigate("/searchResult", { state: { data: filteredData } });
    } else alert(data.message);
  };

  return (
    <form className="form">
      <div className="form__group">
        <input
          placeholder="Leaving from"
          type="text"
          id="sourceInput"
          name="source"
          onChange={handleChange}
        />
      </div>
      <div className="verticalLine"></div>
      <div className="form__group">
        <input
          placeholder="Going to"
          type="text"
          id="destinationInput"
          name="destination"
          onChange={handleChange}
        />
      </div>
      <div className="verticalLine"></div>
      <div className="form__group">
        <select id="categoryInput" name="category">
          <option value="Super Light (<1kg)">Super Light (&lt;1kg)</option>
          <option value="Light">Light (&lt;10kg)</option>
          <option value="Heavy">Heavy (&gt;10kg)</option>
        </select>
      </div>
      <button className="form__button" type="submit" onClick={search}>
        Search
      </button>
    </form>
  );
}

export default Form;
