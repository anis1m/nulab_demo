import React, { useEffect, useState } from "react";
import "./Project.css";

function Project({
  setprojectsdata,
  setshowaddproject,
  setprojectId,
  projectId,
  triggerprojectupdate,
  updatedprojectid,
  projectsdata,
}) {
  const [data, setdata] = useState({
    Id: projectId,
    Name: "",
    Description: "",
    CreatedAt: new Date().toLocaleString(),
    ModifiedAt: "",
  });

  function handleChange(e) {
    setdata({ ...data, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    if (triggerprojectupdate) {
      for (let i = 0; i < projectsdata.length; i++) {
        if (projectsdata[i].Id === updatedprojectid) {
          setdata({
            ...data,
            Name: projectsdata[i].Name,
            Description: projectsdata[i].Description,
          });
        }
      }
    }
  }, [triggerprojectupdate]);

  function handleSubmit(e) {
    e.preventDefault();
    if (triggerprojectupdate) {
      for (let i = 0; i < projectsdata.length; i++) {
        if (projectsdata[i].Id === updatedprojectid) {
          projectsdata[i].Name = data.Name;
          projectsdata[i].Description = data.Description;
          projectsdata[i].ModifiedAt = new Date().toLocaleString();
        }
      }
    } else {
      setprojectsdata((prev) => [...prev, data]);
      setprojectId(projectId + 1);
    }
    setshowaddproject(false);
  }
  return (
    <div class="add-project">
      <form onSubmit={handleSubmit}>
        <h2>Add Project</h2>
        <blockquote>
          <label>Project Name</label>
          <input
            type="text"
            placeholder="Enter Project Name"
            name="Name"
            onChange={handleChange}
            value={data.Name}
            required
          />
        </blockquote>
        <blockquote>
          <label>Project Description</label>
          <textarea
            rows="5"
            placeholder="Enter Short Project Description"
            name="Description"
            onChange={handleChange}
            value={data.Description}
            required
          ></textarea>
        </blockquote>
        <button type="submit">{triggerprojectupdate ? "Update" : "Add"}</button>
        <i
          class="fa-solid fa-xmark"
          onClick={() => setshowaddproject(false)}
        ></i>
      </form>
    </div>
  );
}

export default Project;
