import './Employees.css';
import DashboardLayout from '../../../components/DashboardLayout/DashboardLayout';
import { useNavigate } from 'react-router-dom';
import { Table } from 'antd';
import { useEffect, useState } from 'react';
import axios from '../../../Utils/axios';
import { Modal } from 'antd';
import { Select } from 'antd';

const Employees = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [department, setDepartment] = useState('');
  const navigate = useNavigate();
  const getData = async () => {
    const response = await axios.get('/employee');
    setData(response.data);
  };
  const filteredData = data.filter(item => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesDepartment =
      department === '' || item.department === department;

    return matchesSearch && matchesDepartment;
  });

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
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <button
          onClick={() => {
            Modal.confirm({
              title: 'Delete Employee',
              content: 'Are you sure you want to delete this employee?',
              okText: 'Delete',
              cancelText: 'Cancel',
              onOk: async () => {
                try {
                  await axios.delete(`/employee/${record._id}`);
                  getData();
                } catch (error) {
                  console.log(error);
                }
              },
            });
          }}
          className="delete-button"
        >
          <i className="fa-solid fa-trash"></i>
          Delete
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
        <div className="employees-search">
          <input
            value={search}
            onChange={e => {
              setSearch(e.target.value);
            }}
            type="text"
            placeholder="Search employees..."
          />
          <select
            value={department}
            onChange={e => setDepartment(e.target.value)}
            className="department-filter"
          >
            <option value="">All Departments</option>
            <option value="IT">IT</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
            <option value="Engineering">Engineering</option>
          </select>
        </div>

        <div className="employees-table-card">
          <Table columns={columns} dataSource={filteredData} rowKey="_id" />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Employees;
