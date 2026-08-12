//import
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Employee from './pages/Employees/Employees';
import AddEmployee from './pages/AddEmployee/AddEmployee';
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
        </Route>
      </Routes>
    </>
  );
};
export default App;
