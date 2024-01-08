import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import './ProjectCreatePage.css';
const NewProject = () => {
 const [formData, setFormData] = useState({
    projectName: '',
    template: '',
    startDate: '',
    daysInWeek: ''
 });

 const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
 };

 return (
  <div className="new-project-container"> {/* Sınıf adını ekleyin */}
      <h1>Create a New Project</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="projectName">
          <Form.Label>Project name</Form.Label>
          <Form.Control
            type="text"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="template">
          <Form.Label>Template</Form.Label>
          <Form.Control
            as="select"
            name="template"
            value={formData.template}
            onChange={handleChange}
          >
            <option value="">Choose...</option>
            <option value="blankProject">Blank Project</option>
            <option value="predefinedTemplate">Predefined Template</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="startDate">
          <Form.Label>Start Date</Form.Label>
          <Form.Control
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="daysInWeek">
          <Form.Label>Days in Week</Form.Label>
          <Row>
            <Col>
              <Form.Check
                type="checkbox"
                label="Sun"
                name="daysInWeek"
                value="sun"
                onChange={handleChange}
              />
            </Col>
            <Col>
              <Form.Check
                type="checkbox"
                label="Mon"
                name="daysInWeek"
                value="mon"
                onChange={handleChange}
              />
            </Col>
            <Col>
              <Form.Check
                type="checkbox"
                label="Tue"
                name="daysInWeek"
                value="tue"
                onChange={handleChange}
              />
            </Col>
            <Col>
              <Form.Check
                type="checkbox"
                label="Wed"
                name="daysInWeek"
                value="wed"
                onChange={handleChange}
              />
            </Col>
            <Col>
              <Form.Check
                type="checkbox"
                label="Thu"
                name="daysInWeek"
                value="thu"
                onChange={handleChange}
              />
            </Col>
            <Col>
              <Form.Check
                type="checkbox"
                label="Fri"
                name="daysInWeek"
                value="fri"
                onChange={handleChange}
              />
            </Col>
            <Col>
              <Form.Check
                type="checkbox"
                label="Sat"
                name="daysInWeek"
                value="sat"
                onChange={handleChange}
              />
            </Col>
          </Row>
        </Form.Group>

        <Button variant="primary" type="submit">
          Create Project
        </Button>
      </Form>
    </div>
 );
};

export default NewProject;