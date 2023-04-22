import SideNav from "../reusables/SideNav";
import { Button, DropdownButton, Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function HomePage() {
  // const data = useSelector((state) => state.apiResponse.response);

  // console.log(data);

  return (
    <>
      <div className="content-wrapper content">
        <div className="main-content">
          <div className="header-info">
            <div>
              {/* <h2>Hi {data.personal_information.name}! </h2> */}
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
}

function DefaultContent() {
  return (
    <>
      <div className="header-info">
        <div>
          <h2>Hi ! </h2>
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
    </>
  );
}
