import React from "react";
import "./css_files/Navbar.css";

function Navbar() {
  return (
    <nav class="dashboard-navbar">
      <blockquote>
        <i class="fa-solid fa-building" routerLink="/"></i>
        <p>Dashboard</p>
        <p>Projects</p>
        <p>Recently Viewed</p>
        <p>Filters</p>
        <i class="fa-solid fa-circle-plus"></i>
        <button>Upgrade</button>
      </blockquote>
      <blockquote>
        <mark>
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search this Space" />
        </mark>
        <i class="fa-solid fa-ellipsis"></i>
        <i class="fa-solid fa-eye"></i>
        <i class="fa-solid fa-bell"></i>
        <i class="fa-solid fa-circle-question"></i>
        <mark>
          <i class="fa-solid fa-circle-user"></i>
          <i class="fa-solid fa-angle-down"></i>
        </mark>
        <i class="fa-solid fa-building"></i>
        <p>ABM Group</p>
        <i class="fa-solid fa-border-none"></i>
      </blockquote>
    </nav>
  );
}

export default Navbar;
