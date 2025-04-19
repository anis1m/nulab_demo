import React from "react";

function Issues({ issuesdata }) {
  return (
    <div class="dashboard-project">
      <h2>Assigned Works</h2>
      <table>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>User Name</th>
            <th>Project Name</th>
            <th>Subject</th>
            <th>Description</th>
            <th>Status</th>
            <th>Assigned on</th>
          </tr>
        </thead>
        <tbody>
          {issuesdata.length > 0 ? (
            issuesdata.map((issue) => (
              <tr>
                <td>{issue.Id}</td>
                <td>{issue.UserName}</td>
                <td>{issue.ProjectName}</td>
                <td>{issue.Subject}</td>
                <td>{issue.Description}</td>
                <td>{issue.Status}</td>
                <td>{issue.AssignedOn}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Assigned Works to Show</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Issues;
