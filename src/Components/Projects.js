import React, { useState } from "react";
import "./css_files/Projects.css";

function Projects({
  projectsdata,
  settriggerprojectupdate,
  setupdatedprojectid,
  setshowaddproject,
  setprojectsdata,
}) {
  return (
    <div class="dashboard-project">
      <h2>Projects</h2>
      <table>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Project Name</th>
            <th>Description</th>
            <th>Created DateTime</th>
            <th>Last Modified</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projectsdata.length > 0 ? (
            projectsdata.map((project) => (
              <tr>
                <td>{project.Id}</td>
                <td>{project.Name}</td>
                <td>{project.Description}</td>
                <td>{project.CreatedAt}</td>
                <td>{project.ModifiedAt}</td>
                <td>
                  <blockquote>
                    <i
                      class="fa-solid fa-pen-to-square"
                      onClick={() => {
                        settriggerprojectupdate(true);
                        setupdatedprojectid(project.Id);
                        setshowaddproject(true);
                      }}
                    ></i>
                    <i
                      class="fa-solid fa-trash"
                      onClick={() => {
                        if (window.confirm("Do You want to Delete Project?")) {
                          setprojectsdata((prev) =>
                            [...prev].filter((x) => x.Id !== project.Id)
                          );
                        }
                      }}
                    ></i>
                  </blockquote>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6}>No Projects to Show</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Projects;
