import React, { useState } from "react";
import CreateForm from "./CreateForm";
import CreateStudent from "./CreateStudent";

const CreateCRUD = ({ setModEdit, modEdit }) => {
  const [db, setDb] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);

  return (
    <div className="pt-5">
      <h2 className="text-center">{modEdit ? "Edit CRUD" : "Create CRUD"}</h2>
      <CreateForm
        db={db}
        setDb={setDb}
        setModEdit={setModEdit}
        modEdit={modEdit}
        dataToEdit={dataToEdit}
      />
      <hr />
      <CreateStudent
        db={db}
        setDb={setDb}
        setModEdit={setModEdit}
        setDataToEdit={setDataToEdit}
      />
    </div>
  );
};

export default CreateCRUD;
