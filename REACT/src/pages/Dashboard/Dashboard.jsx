//import
import './Dashboard.css';
import DashboardLayout from '../../../components/DashboardLayout/DashboardLayout';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../../Utils/axios';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const getData = async () => {
    const response = await axios.get('/employee');
    setData(response.data);
  };
  const salaryValue = data.reduce((accumulator, currentValue) => {
    return accumulator + Number(currentValue.salary);
  }, 0);
  const currentYear = new Date().getFullYear();

  const newEmployees = data.filter(employee => {
    const joiningYear = new Date(employee.joiningDate).getFullYear();

    return joiningYear === currentYear;
  });
  const departmentCount = data.reduce((accumulator, employee) => {
    const department = employee.department;

    if (!accumulator[department]) {
      accumulator[department] = 0;
    }

    accumulator[department]++;

    return accumulator;
  }, {});

  useEffect(() => {
    getData();
  }, []);
  return (
    <DashboardLayout>
      <div className="dashboard-start">
        <h1>Welcome back, Admin!</h1>
        <p>Here's what's happening in your organization today.</p>
      </div>

      <div className="dashboard-center">
        <div className="dashboard-card">
          <h3>Total Employees</h3>
          <h1>{data.length}</h1>
          <p
            onClick={() => {
              navigate('/admin/employees');
            }}
          >
            View all employees →
          </p>
        </div>

        <div className="dashboard-card">
          <h3>Departments</h3>
          <h1>—</h1>
          <p>Coming soon</p>
        </div>

        <div className="dashboard-card">
          <h3>Total Salary</h3>
          <h1>{salaryValue}</h1>
          <p>View salary report →</p>
        </div>

        <div className="dashboard-card">
          <h3>New Employees</h3>
          <h1>{newEmployees.length}</h1>
          <p>This Year</p>
        </div>
      </div>

      <div className="dashboard-end">
        <div className="recent-employees">
          <div className="dashboard-section-header">
            <h2>Employee List</h2>
            <p
              onClick={() => {
                navigate('/admin/employees');
              }}
            >
              View all →
            </p>
          </div>

          {data.slice(0, 5).map(employee => (
            <div className="employee-row" key={employee._id}>
              <div>
                <h3>{employee.name}</h3>
                <p>{employee.position}</p>
              </div>
              <p>{employee.department}</p>
            </div>
          ))}
        </div>

        <div className="department-summary">
          <h2>Employees by Department</h2>

          <div className="department-list">
            {Object.entries(departmentCount).map(([department, count]) => (
              <div className="department-row" key={department}>
                <div>
                  <h3>{department}</h3>
                  <p>{count} employees</p>
                </div>

                <span>{count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
