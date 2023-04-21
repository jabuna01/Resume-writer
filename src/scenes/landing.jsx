import React from "react";
import {
  Row,
  Col,
  Form,
  Button,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

const Landing = () => {
  return (
    <>
      <div className="content-wrapper content">
        <div className="sider">
          <div className="sider-top">
            <img src="/logo small.svg" alt="brand" />
          </div>
          <div className="line" />
          <div className="sider-content">
            <ul className="tabs">
              <li className="tabs-item active">
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
              <li className="tabs-item">
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
              <li className="tabs-item">
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
              <li className="tabs-item">
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
              <li className="tabs-item">
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
              <li className="tabs-item">
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
              <li className="tabs-item">
                <div className="icon">
                  <div className="bullet">
                    <img src="/bullet.svg" alt="bullet" />
                  </div>
                  <div className="user">
                    <img src="/user.svg" alt="user-icon" />
                  </div>
                </div>
                <div className="label">Trannings</div>
              </li>
              <li className="tabs-item">
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
                class="rounded-circle"
                style={{ width: "36px" }}
                alt="Avatar"
              />
              <div className="name">Fatimah Camacho</div>
            </div>
          </div>
        </div>
        <div className="main-content">
          <div className="header-info">
            <div>
              <h1>Hi ! User Name</h1>
              <div className="text-muted small">
                Your resume has been parsed successfully.
              </div>
              <div className="mt-3">
                Also you can edit it with our featured AI that will make your CV
                even better. Try it !
              </div>
            </div>
            <div className="d-flex" style={{ height: "38px" }}>
              <Button variant="secondary" style={{ marginRight: "16px" }}>
                Edit
              </Button>
              <DropdownButton
                id="dropdown-basic-button"
                title="Download"
                variant="primary"
              >
                <Dropdown.Item href="#/action-1">pdf</Dropdown.Item>
                <Dropdown.Item href="#/action-2">docx</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
          <div className="resume-block">
            <div className="text-center">Ai Generated pdf doc comes here</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
