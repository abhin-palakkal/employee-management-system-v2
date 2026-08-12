import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <i className="fa-regular fa-bell"></i>
      <div className="avatar"></div>
      <h1>Admin</h1>
      <i className="fa-solid fa-angle-down"></i>
    </nav>
  );
};
export default Navbar;
