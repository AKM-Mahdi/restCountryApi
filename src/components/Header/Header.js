import "./Header.css";
import Search from "../../Utilities/Search";
import { Link } from "react-router-dom";
import logo from "../../Images/co-logo.png";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-section">
          <div className="left">
            <Link to="/">
              <img className="logo" src={logo} alt="" />
            </Link>
          </div>
          <div className="mid text-light">
            <span>Countries Rest api </span>
            <br />
            <span>Website: https://restcountries.com/</span>
            <br />
            <span>Api link: https://restcountries.com/v2/all</span>
          </div>
          <div className="right">
            <Search></Search>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
