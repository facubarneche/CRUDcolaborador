import React from "react";
import { Button, Form } from "react-bootstrap";
import './EditForm.css'


const EditForm = () => {
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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button
          as="input"
          type="submit"
          value="Editar"
          variant="outline-primary"
        />
        <Button
          as="input"
          type="reset"
          value="Limpiar"
          variant="outline-primary"
        />
      </Form>
  );
};

export default EditForm;
