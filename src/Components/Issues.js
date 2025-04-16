import React from "react";

function Issues({ issuesdata }) {
  return (
    <div class="dashboard-project">
      <h2>My Issues</h2>
      <table>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Project Name</th>
            <th>Subject</th>
            <th>Description</th>
            <th>Status</th>
            <th>Issued on</th>
          </tr>
        </thead>
        <tbody>
          {issuesdata.length > 0 ? (
            issuesdata.map((issue) => (
              <tr>
                <td>{issue.Id}</td>
                <td>{issue.ProjectName}</td>
                <td>{issue.Subject}</td>
                <td>{issue.Description}</td>
                <td>{issue.Status}</td>
                <td>{issue.IssuedOn}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6}>No Issues to Show</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Issues;
