import React, { useState } from "react";
import "./Issues.css";

function Issues({
  setshowaddissues,
  projectsdata,
  setissuesdata,
  issuedId,
  setissuesId,
}) {
  const [data, setdata] = useState({
    Id: issuedId,
    ProjectName: "",
    Subject: "",
    Description: "",
    Status: "Pending",
    IssuedOn: new Date().toLocaleString(),
  });

  function handleChange(e) {
    setdata({ ...data, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setissuesdata((prev) => [...prev, data]);
    setissuesId(issuedId + 1);
    setshowaddissues(false);
  }
  return (
    <div class="add-issues">
      <form onSubmit={handleSubmit}>
        <h2>Add Issue</h2>
        <blockquote>
          <label>Project Name</label>
          <select name="ProjectName" onChange={handleChange} required>
            <option value="">Select Project Name</option>
            {projectsdata.map((project) => (
              <option value={projectsdata.Name}>{project.Name}</option>
            ))}
          </select>
        </blockquote>
        <blockquote>
          <label>Subject</label>
          <input
            type="text"
            placeholder="Enter Subject"
            name="Subject"
            onChange={handleChange}
            required
          />
        </blockquote>
        <blockquote>
          <label>Description</label>
          <textarea
            rows="5"
            placeholder="Enter Brief Description about Issue"
            name="Description"
            onChange={handleChange}
            required
          ></textarea>
        </blockquote>
        <button type="submit">Add Issue</button>
        <i
          class="fa-solid fa-xmark"
          onClick={() => setshowaddissues(false)}
        ></i>
      </form>
    </div>
  );
}

export default Issues;
