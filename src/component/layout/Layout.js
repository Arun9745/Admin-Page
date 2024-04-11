import React from "react";
import "./layout.css";

import  Sidebar  from "../sidebar/Sidebar";
import SearchButton from "../Navbar/Searchbutton";



const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      
      <div className="d-flex">
      <Sidebar />
      <SearchButton />
        <div className="children-container">{children}</div>
      </div>
    </div>
  );
};
export default Layout;