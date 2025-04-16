import React from "react";
import "./css_files/Updates.css";

function Updates({ usersdata }) {
  return (
    <div class="dashboard-project-updates">
      <h2>Updates</h2>
      {usersdata.length > 0 ? (
        usersdata.map((user, index) => (
          <div>
            {index === 0 ||
            user.CreatedDate !== usersdata[index - 1].CreatedDate ? (
              <aside>
                <h4>{user.CreatedDate}</h4>
              </aside>
            ) : null}
            <aside>
              <i class="fa-solid fa-a" style={{ fontSize: "2rem" }}></i>
              <blockquote>
                <h4>
                  Aftab edited the <span>members</span> of the project
                </h4>
                <mark>
                  {" "}
                  <i class="fa-solid fa-building"></i> {user.ProjectName}
                </mark>
                <mark>
                  <i class="fa-solid fa-user-circle"></i> {user.UserName} has
                  been added as a project member
                </mark>
              </blockquote>
              <p style={{ marginLeft: "auto" }}>
                {" "}
                {new Date().getDay() - new Date(user.CreatedDate).getDay()} days
                ago
              </p>
            </aside>
          </div>
        ))
      ) : (
        <p>No Updates to show</p>
      )}
    </div>
  );
}

export default Updates;
