import SideNav from "../reusables/SideNav";
import {
  Row,
  Col,
  Form,
  Button,
  ButtonGroup,
  ButtonToolbar,
} from "react-bootstrap";
import { useState } from "react";
import { updateEducation } from "../reducers/apiResponseReducer";
import { useDispatch, useSelector } from "react-redux";
import EducationList from "./educationlist";

export default function EducationPage() {
  const [form, addForm] = useState([]);
  const [education, setEducation] = useState([]);
  const data = useSelector(
    (state) => state.apiResponse?.response?.education ?? []
  );

  const handleAddEducation = (e) => {
    const element = form.length + 1;
    addForm([...form, element]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(education);
  };

  const handleAdd = (e, index) => {
    //   let tm = tempData;
    //   e.preventDefault();
    //   const newEducation = {
    //     degree: e.target.degree.value,
    //     university_name: e.target.university_name.value,
    //     start_date: e.target.start_date.value,
    //     end_date: e.target.end_date.value,
    //     description: e.target.description.value,
    //   };
    //  dispatch(updateEducation(newEducation))
  };

  const handleRemove = (index) => {
    // setEducation(education.filter((edu, i) => i !== index));
    // addForm(form.filter((f, i) => i !== index));
  };

  const displayData = (data) => {
    let edu = [];
    for (let obj of data) {
      edu.push(<EducationList obj={obj} />);
    }
    return edu;
  };

  return (
    <>
      <div className="content-wrapper content">
        <div className="main-content">
          <div className="tab-title-block">
            <div>
              <h3>Educations</h3>
              <p className="sub-text">Update your educational details.</p>
            </div>
            <Button variant="secondary" onClick={handleSubmit}>
              {" "}
              Save and Continue
            </Button>
          </div>
          <Button variant="info" onClick={handleAddEducation}>
            + Add Educations
          </Button>

          {displayData(data)}
        </div>
      </div>
    </>
  );
}
