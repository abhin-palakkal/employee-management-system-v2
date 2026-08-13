import './Employees.css';
import DashboardLayout from '../../../components/DashboardLayout/DashboardLayout';
import { useNavigate } from 'react-router-dom';
import { Table } from 'antd';
import { useEffect, useState } from 'react';
import axios from '../../../Utils/axios';

const Employees = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const getData = async () => {
    const response = await axios.get('/employee');
    setData(response.data);
  };
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Salary',
      dataIndex: 'salary',
      key: 'salary',
    },
    {
      title: 'Joining Date',
      dataIndex: 'joiningDate',
      key: 'joiningDate',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <button
          onClick={() => navigate(`/admin/editemployee/${record._id}`)}
          className="edit-button"
        >
          <i className="fa-solid fa-pen"></i>
          Edit
        </button>
      ),
    },
  ];

  useEffect(() => {
    getData();
  }, []);

  return (
    <DashboardLayout>
      <div className="employees-page">
        <div className="employees-header">
          <div>
            <h1>Employee List</h1>
            <p>Manage and view all employees</p>
          </div>

          <button
            onClick={() => {
              navigate('/admin/addemployee');
            }}
            className="add-employee-button"
          >
            <i className="fa-solid fa-user-plus"></i>
            Add Employee
          </button>
        </div>

        <div className="employees-table-card">
          <Table columns={columns} dataSource={data} rowKey="_id" />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Employees;
