import React from "react";
import { Table } from "react-bootstrap";
import CreateStudentRow from "./CreateStudentRow";

const CreateStudent = ({ db, setDb, modEdit, setModEdit, setDataToEdit }) => {
  const deleteData = (id) => {
    const newArray = db.filter((el) => el.id !== id);
    setDb(newArray);
  };

  return (
    <div>
      <h3 className="text-center py-2">Students</h3>

      <Table striped bordered hover size="sm">
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {db.length === 0 ? (
            <tr className="text-center">
              <td>---</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
            </tr>
          ) : (
            db.map((student) => (
              <CreateStudentRow
                key={student.id}
                student={student}
                deleteData={deleteData}
                setModEdit={setModEdit}
                setDataToEdit={setDataToEdit}
              />
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default CreateStudent;
