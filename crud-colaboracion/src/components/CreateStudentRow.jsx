import React from "react";
import { Button } from "react-bootstrap";

const CreateStudentRow = ({ initialDb, setModEdit }) => {
    const handleEdit = (value) =>{
        setModEdit(value);
    }
  return (
    <>
      {initialDb.map((el) => (
        <tr key={el.id}>
          <td>{el.id}</td>
          <td>{el.name}</td>
          <td>{el.lastName}</td>
          <td>{el.age}</td>
          <td>{el.email}</td>
          <td>{el.grades.join(", ")}</td>
          <td>
          <Button
          as="input"
          type="button"
          value="Edit"
          variant="success"
          onClick={()=> handleEdit(true)}
        />
        <Button
          as="input"
          type="button"
          value="Delete"
          variant="danger"
        />
          </td>
        </tr>
      ))}
    </>
  );
};

export default CreateStudentRow;
