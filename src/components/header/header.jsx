import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <div className="header">
        <div className="img">
          <img src={require(".//keep.png")} alt="keep" />
        </div>
        <div>
          <span className="title">Keep</span>
        </div>

        <div className="searchbar">
          <div className="searching">
            <form>
              <button type="submit">Search</button>
              <input type="search" placeholder="Search..." />
            </form>
          </div>
        </div>
        <div className="btn1">
        <i className="material-icons btn space">rotate_right</i>
        <i className="material-icons btn space">view_stream</i>
        <i className="material-icons btn space">settings</i>
          </div>
      </div>
    </div>
  );
}

export default Header;
