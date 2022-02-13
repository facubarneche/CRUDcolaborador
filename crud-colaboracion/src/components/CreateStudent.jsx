import React from "react";
import { Table } from "react-bootstrap";
import CreateStudentRow from "./CreateStudentRow";

const CreateStudent = ({ initialDb, setModEdit }) => {
  return (
    <div>
      <h3 className="text-center py-2">Students</h3>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Grades</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <CreateStudentRow initialDb={initialDb} setModEdit={setModEdit}/>
        </tbody>
      </Table>
    </div>
  );
};

export default CreateStudent;
