import SideNav from "../reusables/SideNav";
import {
  Row,
  Col,
  Form,
  Button,
  ButtonGroup,
  ButtonToolbar,
} from "react-bootstrap";
import {  useSelector } from "react-redux";
import { useState } from "react";
import WorkExperienceList from "./workExperienceList";
export default function WorkExperiencePage() {
  const [form, addForm] = useState([]);
  const [work_experience, setWorkexperience] = useState([]);
  const data = useSelector((state) => state.apiResponse.response.work_experience);

  const handleAddWorkexperience = (e) => {
    const element = form.length + 1;
    addForm([...form, element]);
  };

   const handleSubmit = (e) => {
    e.preventDefault();
    console.log(work_experience,"hello");
  };

  const handleSetWorkexperience = (e) => {};
  const displayData = (data) => {
    let work = [];
    for (let obj of data) {
      work.push(<WorkExperienceList obj={obj} />);
    }
    return work;
  };

  return (
    <>
      <div className="content-wrapper content">
        <SideNav />

        <div className="main-content">
          <div className="tab-title-block">
            <div>
              <h3>Work Experiences</h3>
              <p className="sub-text">Update your Work Experience Details</p>
            </div>
            <Button variant="secondary" onClick={handleSubmit}>
              {" "}
              Save and Continue
            </Button>
          </div>
        
          {displayData(data)}
    
        </div>
      </div>
    </>
  );
}
