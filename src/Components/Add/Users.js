import React, { useState } from "react";

function Users({ setshowaddusers, setusersdata, projectsdata }) {
  const [data, setdata] = useState({
    ProjectName: "",
    UserName: "",
    Email: "",
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
        <h2>Add Users to Project</h2>
        <blockquote>
          <label>Project Name</label>
          <select required name="ProjectName" onChange={handleChange}>
            <option value="">Select Project Name</option>
            {projectsdata.map((project) => (
              <option value={projectsdata.Name}>{project.Name}</option>
            ))}
          </select>
        </blockquote>
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
          <small>we will send email to user</small>
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
