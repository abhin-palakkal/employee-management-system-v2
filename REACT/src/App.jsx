//import
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Employee from './pages/Employees/Employees';
import AddEmployee from './pages/AddEmployee/AddEmployee';
import EditEmployee from './pages/EditEmployee/EditEmployee';
import Departments from './pages/Department/department';
import Settings from './pages/Settings/settings';
import Reports from './pages/Reports/reports';
import PrivateRoute from '../components/PrivateRoute/privateRoute';

//function
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<PrivateRoute />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/employees" element={<Employee />} />
          <Route path="/admin/addemployee" element={<AddEmployee />} />
          <Route path="/admin/departments" element={<Departments />} />
          <Route path="/admin/settings" element={<Settings />} />
          <Route path="/admin/reports" element={<Reports />} />
          <Route path="/admin/editemployee/:id" element={<EditEmployee />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
