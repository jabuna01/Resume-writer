import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SideNav(props) {
  const [activeNav, setActiveNav] = useState(props?.activeNav);
  const history = useNavigate();

  const handleTabClick = (index) => {
    switch (index) {
      case 0:
        history("/personal-information-screen");
        break;

      case 1:
        history("/personal-statment-screen");
        break;

      case 2:
        history("/projects-experience-screen");
        break;

      case 3:
        history("/certifications-screen");
        break;

      case 4:
        history("/work-experience-screen");
        break;

      case 5:
        history("/skills-screen");
        break;

      case 6:
        history("/trainings-screen");
        break;

      case 7:
        history("/educations-screen");
        break;

      default:
        history("/home-screen");
        break;
    }
  };

  return (
    <div className="sider">
      <div className="sider-top cursor-pointer" onClick={() => handleTabClick()}>
        <img src="/logo small.svg" alt="brand" />
      </div>
      <div className="line" />
      <div className="sider-content">
        <ul className="tabs">
          <li
            className={`tabs-item ${activeNav === 0 ? "active" : ""}`}
            onClick={() => handleTabClick(0)}
          >
            <div className="icon">
              <div className="bullet">
                <img src="/bullet.svg" alt="bullet" />
              </div>
              <div className="user">
                <img src="/user.svg" alt="user-icon" />
              </div>
            </div>
            <div className="label">Personal Information</div>
          </li>
          <li
            className={`tabs-item ${activeNav === 1 ? "active" : ""}`}
            onClick={() => handleTabClick(1)}
          >
            <div className="icon">
              <div className="bullet">
                <img src="/bullet.svg" alt="bullet" />
              </div>
              <div className="user">
                <img src="/user.svg" alt="user-icon" />
              </div>
            </div>
            <div className="label">Personal Statement</div>
          </li>
          <li
            className={`tabs-item ${activeNav === 2 ? "active" : ""}`}
            onClick={() => handleTabClick(2)}
          >
            <div className="icon">
              <div className="bullet">
                <img src="/bullet.svg" alt="bullet" />
              </div>
              <div className="user">
                <img src="/user.svg" alt="user-icon" />
              </div>
            </div>
            <div className="label">Projects Expereince</div>
          </li>
          <li
            className={`tabs-item ${activeNav === 3 ? "active" : ""}`}
            onClick={() => handleTabClick(3)}
          >
            <div className="icon">
              <div className="bullet">
                <img src="/bullet.svg" alt="bullet" />
              </div>
              <div className="user">
                <img src="/user.svg" alt="user-icon" />
              </div>
            </div>
            <div className="label">Certifications</div>
          </li>
          <li
            className={`tabs-item ${activeNav === 4 ? "active" : ""}`}
            onClick={() => handleTabClick(4)}
          >
            <div className="icon">
              <div className="bullet">
                <img src="/bullet.svg" alt="bullet" />
              </div>
              <div className="user">
                <img src="/user.svg" alt="user-icon" />
              </div>
            </div>
            <div className="label">Work Expereince</div>
          </li>
          <li
            className={`tabs-item ${activeNav === 5 ? "active" : ""}`}
            onClick={() => handleTabClick(5)}
          >
            <div className="icon">
              <div className="bullet">
                <img src="/bullet.svg" alt="bullet" />
              </div>
              <div className="user">
                <img src="/user.svg" alt="user-icon" />
              </div>
            </div>
            <div className="label">Skills</div>
          </li>
          <li
            className={`tabs-item ${activeNav === 6 ? "active" : ""}`}
            onClick={() => handleTabClick(6)}
          >
            <div className="icon">
              <div className="bullet">
                <img src="/bullet.svg" alt="bullet" />
              </div>
              <div className="user">
                <img src="/user.svg" alt="user-icon" />
              </div>
            </div>
            <div className="label">Trainings</div>
          </li>
          <li
            className={`tabs-item ${activeNav === 7 ? "active" : ""}`}
            onClick={() => handleTabClick(7)}
          >
            <div className="icon">
              <div className="bullet">
                <img src="/bullet.svg" alt="bullet" />
              </div>
              <div className="user">
                <img src="/user.svg" alt="user-icon" />
              </div>
            </div>
            <div className="label">Education</div>
          </li>
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
