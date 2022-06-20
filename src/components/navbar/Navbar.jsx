import "./navbar.css";

const Navbar = () => {
  return (
    <div class="navbar">
      <div className="navContainer">
        <span className="logo">mitravelling</span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
