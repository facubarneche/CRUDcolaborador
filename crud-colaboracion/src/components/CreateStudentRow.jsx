import React from "react";
import { Button } from "react-bootstrap";

const CreateStudentRow = ({ setModEdit, student }) => {
  const {id, name, lastName, email, age} = student
 
  const handleEdit = () => {
    setModEdit(true);
  };

  return (
    <>
        <tr>
          <td>{id}</td>
          <td>{name}</td>
          <td>{lastName}</td>
          <td>{age}</td>
          <td>{email}</td>
          <td>
            <Button
              as="input"
              type="button"
              value="Edit"
              variant="success"
              onClick={() => handleEdit()}
            />
            <Button as="input" type="button" value="Delete" variant="danger" />
          </td>
        </tr>
    </>
  );
};

export default CreateStudentRow;
