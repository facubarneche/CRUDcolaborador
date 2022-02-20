import React from "react";
import { Button } from "react-bootstrap";

const CreateStudentRow = ({
  setModEdit,
  student,
  deleteData,
  setDataToEdit,
}) => {
  const { id, name, lastName, email, age } = student;

  const handleEdit = () => {
    setModEdit(true);
    setDataToEdit(student);
  };

  return (
    <>
      <tr className="text-center">
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
          <Button
            as="input"
            type="button"
            value="Delete"
            variant="danger"
            onClick={() => deleteData(id)}
          />

        </td>
      </tr>
    </>
  );
};

export default CreateStudentRow;
