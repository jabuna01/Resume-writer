import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SideNav(props) {
  const history = useNavigate();
  const sideMenus = [
    {
      title: "Home Page",
      navigateTo: "/home-screen",
    },
    {
      title: "Personal Information",
      navigateTo: "/personal-information-screen",
    },
    {
      title: "Personal Statement",
      navigateTo: "/personal-statment-screen",
    },
    {
      title: "Projects Expereince",
      navigateTo: "/projects-experience-screen",
    },
    {
      title: "Certifications",
      navigateTo: "/certifications-screen",
    },
    {
      title: "Work Expereince",
      navigateTo: "/work-experience-screen",
    },
    {
      title: "Skills",
      navigateTo: "/skills-screen",
    },
    {
      title: "Trannings",
      navigateTo: "/trainings-screen",
    },
    {
      title: "Education",
      navigateTo: "/educations-screen",
    },
  ];

  const handleSideMenuClick = (menu, index) => {
    history(menu.navigateTo);
  };

  return (
    <div className="sider">
      <div className="sider-top">
        <img src="/logo small.svg" alt="brand" />
      </div>
      <div className="line" />
      <div className="sider-content">
        <ul className="tabs">
          {sideMenus.map((menu, index) => {
            return (
              <li
                key={index}
                className={`tabs-item ${
                  window.location.pathname === menu.navigateTo ? "active" : ""
                }`}
                onClick={() => {
                  handleSideMenuClick(menu, index);
                }}
              >
                <div className="icon">
                  <div className="bullet">
                    <img src="/bullet.svg" alt="bullet" />
                  </div>
                  <div className="user">
                    <img src="/user.svg" alt="user-icon" />
                  </div>
                </div>
                <div className="label">{menu.title}</div>
              </li>
            );
          })}
        </ul>
        <div className="user-profile">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className="rounded-circle"
            style={{ width: "36px" }}
            alt="Avatar"
          />
          <div className="name">Fatimah Camacho</div>
        </div>
      </div>
    </div>
  );
}
