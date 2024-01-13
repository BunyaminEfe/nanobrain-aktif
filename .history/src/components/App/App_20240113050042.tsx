import React, { VFC } from "react";
import { TCanvas } from "../three/TCanvas";
import "./app.scss";

const links = [
  {
    title: "Hakkımızda",
    url: "/",
  },
  {
    title: "Projeler",
    url: "/",
  },
  {
    title: "İletişim",
    url: "/",
  },
];

export const App: VFC = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <TCanvas />
      <div className="particle-container">
        {Array.from(Array(100).keys()).map((num, index) => (
          <div className="circle-container" key={index}>
            <div className="circle"></div>
          </div>
        ))}
      </div>
      <div>
        <div className="home">
          <div className="titles">
            <div className="page-title">NANO BRAIN</div>
            <div className="page-subtitle">
              Bilim | Teknoloji | Sinırsız İnovasyon
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
