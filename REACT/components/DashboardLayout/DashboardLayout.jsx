import './DashboardLayout.css';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard-main">
        <Navbar />

        <div className="dashboard-content">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
