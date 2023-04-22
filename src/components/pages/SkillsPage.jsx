import React, { useState } from "react";
import {
  Row,
  Col,
  Form,
  Button,
  ButtonGroup,
  ButtonToolbar,
} from "react-bootstrap";
import SideNav from "../reusables/SideNav";
import {useSelector} from "react-redux"; 

export default function SkillsPage() {
  // const [form, addForm] = useState([]);
  const form = useSelector((state) => state.apiResponse.response.skills);

  const handleAddSkills = (e) => {
    const element = form.length + 1;
    addForm([...form, element]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="content-wrapper content">
        <SideNav />
        <div className="main-content">
          <div className="tab-title-block">
            <div>
              <h3>Skills</h3>
              <p className="sub-text">Update your Skills details.</p>
            </div>
            <Button variant="secondary" disabled>
              {" "}
              Save and Continue
            </Button>
          </div>

          <ul class="list-bullets">
          {form.map((data, index) => (
            <li class="mb-2">{data}</li>
          ))}
          </ul>
        </div>
      </div>
    </>
  );
}
