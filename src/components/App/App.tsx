import React, { VFC } from "react";
import { TCanvas } from "../three/TCanvas";
import "./app.scss";


const links = [
  {
    title: "About Us",
    url: "/",
  },
  {
    title: "Projects",
    url: "/",
  },
  {
    title: "Contact Us",
    url: "/",
  },
];

export const App: VFC = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <TCanvas />
      {/* <div className="particle-container">
        {Array.from(Array(100).keys()).map((num, index) => (
          <div className="particles-js" key={index}>
            <div className="circle"></div>
          </div>
        ))}
      </div> */}
      <div>
        <div className="home">
          <div className="titles">
            <div className="page-title">NANO BRAIN</div>
            <div className="page-subtitle">
              Science | Technology | Innovation
            </div>
          </div>
        </div>
        <div className="footer-menu">
          <ul className="menu-items">
            {links.map((item, index) => {
              return (
                <li key={index} className="menu-item">
                  {item.title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
