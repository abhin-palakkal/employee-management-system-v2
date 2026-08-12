//import
import './Dashboard.css';
import Sidebar from '../../../components/Sidebar/Sidebar';
import Navbar from '../../../components/Navbar/Navbar';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard-main">
        <Navbar />
      </div>
    </div>
  );
};

export default Dashboard;
