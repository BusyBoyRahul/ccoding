import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul>
            <li>
            <Link to="/"> <a href="#">Home</a></Link>
            </li>
            <li>
            <Link to="/explore"> <a href="#">Explore</a></Link>
            </li>
        </ul>
        <img src="https://creativecoding.com/wp-content/uploads/2017/10/FinalLogo-with-text-colorspace-change-768x274.png" alt="" />
        <ul className="right">
            <li>
            <Link to="/about"> <a href="#">About</a></Link>
            </li>
            <li>
            <Link to="/Login"> <a href="#">Login</a></Link>
            </li>
        </ul>
      </nav>
    </div>
  );
}
