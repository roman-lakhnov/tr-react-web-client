import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import './styles.css'; // Import the common styles

const EnterData = () => {
  const [formData, setFormData] = useState({
    slug: '',
    title: '',
    image: '',
    summary: '',
    instructions: '',
    creator: '',
    creator_email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Data added successfully!');
        // Optionally, you can redirect the user or show a success message
      } else {
        console.error('Failed to add data:', response.statusText);
        // Handle the error, show an error message, or redirect the user accordingly
      }
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  return (
    <Container className="data-form-container">
      <h2>Enter Data</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formSlug">
          <Form.Label>Slug</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter slug"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formImage">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter image URL"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formSummary">
          <Form.Label>Summary</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter summary"
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formInstructions">
          <Form.Label>Instructions</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter instructions"
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formCreator">
          <Form.Label>Creator</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter creator"
            name="creator"
            value={formData.creator}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formCreatorEmail">
          <Form.Label>Creator Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter creator email"
            name="creator_email"
            value={formData.creator_email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default EnterData;
