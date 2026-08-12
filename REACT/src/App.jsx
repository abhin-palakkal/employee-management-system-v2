//import
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Employee from './pages/Employees/Employees';

//function
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employees" element={<Employee />} />
      </Routes>
    </>
  );
};
export default App;
