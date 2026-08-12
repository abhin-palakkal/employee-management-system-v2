import './AddEmployee.css';
import DashboardLayout from '../../../components/DashboardLayout/DashboardLayout';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from '../../../Utils/axios';

const AddEmployee = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    position: '',
    salary: '',
    joiningDate: '',
  });
  const changeFunction = (e, key) => {
    setData({ ...data, [key]: e.target.value });
  };
  const addData = async e => {
    try {
      e.preventDefault();
      await axios.post('/employee', data);
      navigate('/admin/employees');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <DashboardLayout>
      <h1>Add Employee</h1>

      <div className="addemployee-container">
        <form onSubmit={addData} className="addemployee-form">
          <label htmlFor="name">Name</label>
          <input
            onChange={e => {
              changeFunction(e, 'name');
            }}
            value={data.name}
            type="text"
            id="name"
            placeholder="Enter Name"
          />
          <label htmlFor="email">Email</label>
          <input
            onChange={e => {
              changeFunction(e, 'email');
            }}
            value={data.email}
            type="email"
            id="email"
            placeholder="Enter Email"
          />
          <label htmlFor="phone">Phone</label>
          <input
            onChange={e => {
              changeFunction(e, 'phone');
            }}
            value={data.phone}
            type="tel"
            id="phone"
            placeholder="Enter Phone"
          />
          <label htmlFor="department">Department</label>
          <input
            onChange={e => {
              changeFunction(e, 'department');
            }}
            value={data.department}
            type="text"
            id="department"
            placeholder="Enter Department"
          />
          <label htmlFor="position">Position</label>
          <input
            onChange={e => {
              changeFunction(e, 'position');
            }}
            value={data.position}
            type="text"
            id="position"
            placeholder="Enter Position"
          />
          <label htmlFor="salary">Salary</label>
          <input
            onChange={e => {
              changeFunction(e, 'salary');
            }}
            value={data.salary}
            type="number"
            id="salary"
            placeholder="Enter Salary"
          />
          <label htmlFor="joiningDate">Joining Date</label>
          <input
            onChange={e => {
              changeFunction(e, 'joiningDate');
            }}
            value={data.joiningDate}
            type="date"
            id="joiningDate"
            placeholder="Enter  Joining Date"
          />

          <button type="submit">Add Employee</button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default AddEmployee;
