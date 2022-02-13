import React from 'react';
import { Button, Form } from "react-bootstrap";
import './CreateForm.css';


const CreateForm = () => {
  
  const handleSubmit = (e) =>{
    e.preventDefault()
  }

  return (
      <Form className="formWitdh ">
          <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        
        <Button
          as="input"
          type="submit"
          value="Create"
          variant="outline-primary"
          onClick={handleSubmit}
        />
        <Button
          as="input"
          type="reset"
          value="Reset"
          variant="outline-primary"
        />
      </Form>
  );
};

export default CreateForm;