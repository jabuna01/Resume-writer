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
import { updateTrainings } from "../reducers/apiResponseReducer";
import { useDispatch, useSelector } from "react-redux";
import TrainingList from "./traininglist";

export default function TrainingPage() {
  const [form, addForm] = useState([]);
  const [training, setTraining] = useState([]);
  const data = useSelector((state) => state.apiResponse.response.trainings);


  const handleAddTraining = (e) => {
    const element = form.length + 1;
    addForm([...form, element]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSetTraining = (e) => {};


  const displayData = (data) => {
    let train = [];
    for (let obj of data) {
      train.push(<TrainingList obj={obj} />);
    }
    return train;
  };


  return (
    <>
      <div className="content-wrapper content">
        <SideNav />

        <div className="main-content">
          <div className="tab-title-block">
            <div>
              <h3>Trainings</h3>
              <p className="sub-text">Update your training details.</p>
            </div>
            <Button variant="secondary" onClick={handleSubmit}>
              {" "}
              Save and Continue
            </Button>
          </div>
          {/* <Button variant="info" onClick={handleAddTraining}>
            + Add Trainings
          </Button> */}
          {displayData(data)}
        </div>
      </div>
    </>
  );
}
