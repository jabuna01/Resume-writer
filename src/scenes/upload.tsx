import React from 'react';
import { Container, Form } from 'react-bootstrap';

const Upload = () => {
  return (
    <Container>
      <div className="brand my-4">
        <img src="/logo big.svg" alt="Resume-Writer" />
      </div>
      <h1 className="text-white">Upload your Resume/CV</h1>
      <p className="text-white2">
        Upload your existing resume and let our tools and templates transform it into a stunning professional resume.
      </p>
      <div className="upload-container">
        <div className="jd">
          <h2>Customize your CV for a specific role</h2>
          <p>Get accurate CV recommendations through our AI-powered platform perfect for the role you're applying.</p>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </div>
      </div>
    </Container>
  );
};

export default Upload;
