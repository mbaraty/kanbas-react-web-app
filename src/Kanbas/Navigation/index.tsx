import { Link, useLocation } from "react-router-dom";
import "./index.css";
import  "../../style.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaPrint, FaClock, FaTv, FaShareSquare, FaQuestionCircle, FaUniversity } from "react-icons/fa";
function KanbasNavigation() {
  const links = [
    { label: "Northeastern", icon: <FaUniversity className="fs-2" />  },
    { label: "Account",   icon: <FaRegUserCircle className="fs-2 text-light" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />  },
    { label: "Courses",   icon: <FaBook className="fs-2" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox", icon: <FaPrint className="fs-2"/>},
    { label: "History", icon:  <FaClock  className="fs-2"/>},
    { label: "Studio", icon: <FaTv className="fs-2"/>},
    { label: "Commons", icon:  <FaShareSquare className="fs-2"/>},
    { label: "Help", icon:  <FaQuestionCircle  className="fs-2"/>},
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}> {link.icon} <br /> {link.label} </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;