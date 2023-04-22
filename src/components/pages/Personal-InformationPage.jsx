import { useState } from "react";
import SideNav from "../reusables/SideNav";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updatePersonalInfo } from "../reducers/apiResponseReducer";

export default function HomePage() {
  let data = useSelector(
    (state) => state.apiResponse.response.personal_information
  );

  if (!data) {
    data = useSelector((state) => state.apiResponse.response.personalInfo);
  }

  const dispatch = useDispatch();

  const [firstName, lastName] = data?.name.split(" ");

  const [personalInfo, setPersonalInfo] = useState({
    name: data.name,
    firstName: firstName,
    lastName: lastName,
    role: data?.role,
    email: data?.email,
    contact: data?.contact,
    address: data?.address,
    github: data?.github,
    linkedin: data?.linkedin,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = personalInfo.firstName + " " + personalInfo.lastName;
    setPersonalInfo({...personalInfo, name: name});
    dispatch(updatePersonalInfo(personalInfo));
  };

  return (
    <>
      <div className="content-wrapper content">
        <SideNav />

        <div className="main-content">
          <div className="tab-title-block">
            <div>
              <h3>Personal Information</h3>
              <p className="sub-text">
                This information will be placed at the top of your resume.
              </p>
            </div>
            <Button variant="secondary" onClick={handleSubmit}>
              {" "}
              Save and Continue
            </Button>
          </div>
          <Form className="form-wrapper">
            <Row>
              <Col md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your First Name"
                    value={personalInfo.firstName}
                    onChange={(e) =>
                      setPersonalInfo({
                        ...personalInfo,
                        firstName: e.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Role</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your Role"
                    value={personalInfo.role}
                    onChange={(e) =>
                      setPersonalInfo({ ...personalInfo, role: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter your contact number"
                    value={personalInfo.contact}
                    onChange={(e) =>
                      setPersonalInfo({
                        ...personalInfo,
                        contact: e.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Github Profile Link</Form.Label>
                  <Form.Control
                    type="link"
                    placeholder="Paste your Github Profile Link"
                    value={personalInfo.github}
                    onChange={(e) =>
                      setPersonalInfo({
                        ...personalInfo,
                        github: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your Last Name"
                    value={personalInfo.lastName}
                    onChange={(e) =>
                      setPersonalInfo({
                        ...personalInfo,
                        lastName: e.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your Role"
                    value={personalInfo.email}
                    onChange={(e) =>
                      setPersonalInfo({
                        ...personalInfo,
                        email: e.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your address"
                    value={personalInfo.address}
                    onChange={(e) =>
                      setPersonalInfo({
                        ...personalInfo,
                        address: e.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>linkedIn Profile Link</Form.Label>
                  <Form.Control
                    type="link"
                    placeholder="Paste your LinkedIn Profile Link"
                    value={personalInfo.linkedin}
                    onChange={(e) =>
                      setPersonalInfo({
                        ...personalInfo,
                        linkedin: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </>
  );
}
