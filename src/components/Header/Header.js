import "./Header.css";
import Search from "../../Utilities/Search";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-section">
          <div className="left">
            <img className="logo" src="" alt="" />
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
