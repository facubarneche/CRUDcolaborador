import React from "react";
import { Table } from "react-bootstrap";
import CreateStudentRow from "./CreateStudentRow";

const CreateStudent = ({db}) => {
  return (
    <div>
      <h3 className="text-center py-2">Students</h3>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {db.map((student)=> <CreateStudentRow key= {student.id} student={student}/>)}
        </tbody>
      </Table>
    </div>
  );
};

export default CreateStudent;
