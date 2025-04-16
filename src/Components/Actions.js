import React, { useState } from "react";
import "./css_files/Actions.css";
import Project from "./Add/Project";
import Issues from "./Add/Issues";
import Users from "./Add/Users";

function Actions({
  setprojectsdata,
  projectsdata,
  triggerprojectupdate,
  updatedprojectid,
  showaddproject,
  setshowaddproject,
  settriggerprojectupdate,
  setissuesdata,
  setusersdata,
}) {
  const [projectId, setprojectId] = useState(1);
  const [issuedId, setissuesId] = useState(1);
  const [showaddissues, setshowaddissues] = useState(false);
  const [showaddusers, setshowaddusers] = useState(false);

  return (
    <>
      <section class="dashboard-actions">
        <blockquote>
          <i class="fa-solid fa-building"></i>
          <h1>ABM Group</h1>
          <i class="fa-solid fa-gear"></i>
        </blockquote>
        <h3>Get started with your new Backlog Space!</h3>
        <div>
          <aside>
            <i class="fa-solid fa-database"></i>
            <blockquote>
              <h3>Add Project</h3>
              <p>First, add a project that you would like to work on</p>
              <button
                onClick={() => {
                  setshowaddproject(true);
                  settriggerprojectupdate(false);
                }}
              >
                Add
              </button>
            </blockquote>
          </aside>
          <aside>
            <i class="fa-solid fa-circle-user"></i>
            <blockquote>
              <h3>Add User</h3>
              <p>
                Invite members to this Space to work on your projects with you
              </p>
              <button onClick={() => setshowaddusers(true)}>Add</button>
            </blockquote>
          </aside>
          <aside>
            <i class="fa-solid fa-list-ul"></i>
            <blockquote>
              <h3>Add Issue</h3>
              <p>Add an issue related to project</p>
              <button onClick={() => setshowaddissues(true)}>Add</button>
            </blockquote>
          </aside>
        </div>
      </section>
      {showaddproject && (
        <Project
          setprojectsdata={setprojectsdata}
          projectsdata={projectsdata}
          setshowaddproject={setshowaddproject}
          setprojectId={setprojectId}
          projectId={projectId}
          triggerprojectupdate={triggerprojectupdate}
          updatedprojectid={updatedprojectid}
        />
      )}
      {showaddissues && (
        <Issues
          setshowaddissues={setshowaddissues}
          projectsdata={projectsdata}
          setissuesdata={setissuesdata}
          setissuesId={setissuesId}
          issuedId={issuedId}
        />
      )}
      {showaddusers && (
        <Users
          setshowaddusers={setshowaddusers}
          setusersdata={setusersdata}
          projectsdata={projectsdata}
        />
      )}
    </>
  );
}

export default Actions;
