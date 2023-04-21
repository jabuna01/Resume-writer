import { Button, Dropdown, DropdownButton } from "react-bootstrap";

export default function SideNav() {
  return (
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
