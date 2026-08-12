//import
import './Sidebar.css';
import { NavLink, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const logoutFunction = () => {
    localStorage.removeItem('TOKEN');
    navigate('/login');
  };
  return (
    <aside className="sidebar">
      <div className="sidebar-start">
        <i className="fa-solid fa-user-group"></i>
        <p>Employee Management System</p>
      </div>
      <div className="sidebar-center">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? 'sidebar-link active' : 'sidebar-link'
          }
        >
          <i className="fa-regular fa-house"></i>
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          to="/employees"
          className={({ isActive }) =>
            isActive ? 'sidebar-link active' : 'sidebar-link'
          }
        >
          <i className="fa-solid fa-users"></i>
          <span>Employees</span>
        </NavLink>
        <NavLink
          to="/addemployee"
          className={({ isActive }) =>
            isActive ? 'sidebar-link active' : 'sidebar-link'
          }
        >
          <i className="fa-solid fa-user-plus"></i>
          <span>Add Employee</span>
        </NavLink>
        <NavLink
          to="/departments"
          className={({ isActive }) =>
            isActive ? 'sidebar-link active' : 'sidebar-link'
          }
        >
          <i className="fa-solid fa-building"></i>
          <span>Departments</span>
        </NavLink>
        <NavLink
          to="/reports"
          className={({ isActive }) =>
            isActive ? 'sidebar-link active' : 'sidebar-link'
          }
        >
          <i className="fa-solid fa-chart-column"></i>
          <span>Reports</span>
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? 'sidebar-link active' : 'sidebar-link'
          }
        >
          <i className="fa-solid fa-gear"></i>
          <span>Settings</span>
        </NavLink>
      </div>
      <hr />
      <div className="sidebar-end">
        <button onClick={logoutFunction} className="logout-button">
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};
export default Sidebar;
