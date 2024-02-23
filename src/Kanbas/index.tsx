import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Dashboard from "./Dashboard";
import  Courses from "./Courses";


function Kanbas() {
  const {pathname} = useLocation()
  return (
    <div className="d-flex">
      <div className={pathname.includes('Courses') ?"d-none d-md-block":""}>
      <KanbasNavigation />
      </div>
      <div style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
          <Route path="Navigation" />
        </Routes>
      </div>
    </div>
  );
}

export default Kanbas