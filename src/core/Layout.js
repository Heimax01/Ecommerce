import React from "react";
import Menu from "./Menu";
import '../styles.css'

const Layout = ({title = 'Title', desc = 'Description', className, children}) => (
    <div>
      <Menu />
      <div className="jumbotron">
          <h2>{title}</h2>
          <p className="lead">{desc}</p>
      </div>
      <div className={className}>{children}</div>
    </div>
);

export default Layout