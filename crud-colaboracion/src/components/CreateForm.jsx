import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "./CreateForm.css";

const dbDefault = {
  id: null,
  name: "",
  lastName: "",
  email: "",
  age: "",
};

const CreateForm = ({ db, setDb, setModEdit, modEdit }) => {
  const [form, setForm] = useState(dbDefault);
  let [counter, setCounter] = useState(1);

  const createData = () => {
    if (!form.name || !form.age || !form.lastName || !form.email) {
      alert("El formulario no esta completo");
    } else {
      form.id = counter;
      setDb([...db, form]);
      setCounter(counter + 1);
      handleReset();
    }
  };

  const editData = () => {
    setModEdit(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (modEdit) {
      editData();
    } else {
      createData();
    }
  };

  const handleReset = () => {
    setForm(dbDefault);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    console.log(modEdit);
  }, [modEdit]);

  return (
    <Form className="formWitdh" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter last name"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAge">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="number"
          placeholder="Age"
          name="age"
          value={form.age}
          onChange={handleChange}
        />
      </Form.Group>

      {modEdit ? (
        <Button
          as="input"
          type="submit"
          value="Edit"
          variant="outline-primary"
        />
      ) : (
        <Button
          as="input"
          type="submit"
          value="Create"
          variant="outline-primary"
        />
      )}
      <Button
        as="input"
        type="reset"
        value="Reset"
        variant="outline-primary"
        onClick={handleReset}
      />
    </Form>
  );
};

export default CreateForm;
