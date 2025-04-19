import React, { useState } from "react";

function Users({ setshowaddusers, setusersdata }) {
  const [data, setdata] = useState({
    UserName: "",
    Email: "",
    PhoneNumber: "",
    CreatedDate: new Date().toDateString(),
  });

  function handleChange(e) {
    setdata({ ...data, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setusersdata((prev) => [...prev, data]);
    setshowaddusers(false);
  }
  return (
    <div className="add-issues">
      <form onSubmit={handleSubmit}>
        <h2>Add Users</h2>

        <blockquote>
          <label>User Name</label>
          <input
            type="text"
            placeholder="Enter Name of User"
            required
            name="UserName"
            onChange={handleChange}
          />
        </blockquote>
        <blockquote>
          <label>User Email</label>
          <input
            type="email"
            placeholder="Enter Email of User"
            name="Email"
            onChange={handleChange}
          />
        </blockquote>
        <blockquote>
          <label>User Phone Number</label>
          <input
            type="number"
            placeholder="Enter User Phone Number (Without Country Code)"
            name="PhoneNumber"
            onChange={handleChange}
            onInput={(e) => {
              e.target.value = e.target.value.slice(0, 10);
            }}
          />
        </blockquote>
        <button type="submit">Add User</button>
        <i
          className="fa-solid fa-xmark"
          onClick={() => setshowaddusers(false)}
        ></i>
      </form>
    </div>
  );
}

export default Users;
