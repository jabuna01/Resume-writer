import { Container, Form, Button } from "react-bootstrap";
import FileUploadBox from "../reusables/FileUploadBox";
import { useState } from "react";

export default function LandingPage() {
  const [jobDescription, setJobDescription] = useState("");

  const handleJobDescriptionChange = (e) => {
    setJobDescription(e.target.value)
    // console.log(jobDescription);
  }

  return (
    <>
      <div className="content-wrapper">
        <div className="upload">
          <Container>
            <div className="brand py-4">
              <img src="/logo small.svg" alt="Resume-Writer" />
            </div>
            <div className="mb-5">
              <h1 className="text-white">Upload your Resume/CV</h1>
              <p className="text-white2">
                Upload your existing resume and let our tools and templates
                transform it into a stunning professional resume.
              </p>
            </div>

            <div className="upload-container">
              <div className="jd">
                <h2>Customize your CV for a specific role</h2>
                <p>
                  Get accurate CV recommendations through our AI-powered
                  platform perfect for the role you're applying.
                </p>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Job Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Write your Job Discription"
                    onChange={handleJobDescriptionChange}
                  />
                </Form.Group>
              </div>

              <FileUploadBox
                contentType={"documents"}
                info={"Documents could be in pdf or docs format"}
              />

            </div>
          </Container>
        </div>
        <div className="proceed">
          <Container>
            <div className="d-flex justify-content-between">
              <a href="www.google.com">Learn More</a>
              <Button variant="primary" type="submit">
                Build
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
