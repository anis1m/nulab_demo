import logo from "./logo.svg";
import Navbar from "./Components/Navbar";
import Actions from "./Components/Actions";
import Projects from "./Components/Projects";
import "./App.css";
import Issues from "./Components/Issues";
import Updates from "./Components/Updates";
import { useState } from "react";

function App() {
  const [projectsdata, setprojectsdata] = useState([]);
  const [issuesdata, setissuesdata] = useState([]);
  const [usersdata, setusersdata] = useState([]);
  const [triggerprojectupdate, settriggerprojectupdate] = useState(false);
  const [updatedprojectid, setupdatedprojectid] = useState(0);
  const [showaddproject, setshowaddproject] = useState(false);

  return (
    <>
      <Navbar />
      <Actions
        setprojectsdata={setprojectsdata}
        projectsdata={projectsdata}
        setissuesdata={setissuesdata}
        setusersdata={setusersdata}
        usersdata={usersdata}
        triggerprojectupdate={triggerprojectupdate}
        updatedprojectid={updatedprojectid}
        setshowaddproject={setshowaddproject}
        showaddproject={showaddproject}
        settriggerprojectupdate={settriggerprojectupdate}
      />
      <div class="dashboard-common">
        <section>
          <Projects
            projectsdata={projectsdata}
            settriggerprojectupdate={settriggerprojectupdate}
            setupdatedprojectid={setupdatedprojectid}
            setshowaddproject={setshowaddproject}
            setprojectsdata={setprojectsdata}
          />
          <Issues issuesdata={issuesdata} />
        </section>
        <Updates usersdata={usersdata} />
      </div>
    </>
  );
}

export default App;
