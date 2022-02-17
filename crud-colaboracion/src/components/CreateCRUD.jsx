import React, { useState } from "react";
import CreateForm from "./CreateForm";
import CreateStudent from "./CreateStudent";

const CreateCRUD = ({ setModEdit, modEdit }) => {
  const [db, setDb] = useState([]);

  return (
    <div className="pt-5">
      <h2 className="text-center">{modEdit ? "Edit CRUD" : "Create CRUD"}</h2>
      <CreateForm
        db={db}
        setDb={setDb}
        setModEdit={setModEdit}
        modEdit={modEdit}
      />
      <hr />
      <CreateStudent db={db} setDb={setDb} setModEdit={setModEdit} />
    </div>
  );
};

export default CreateCRUD;
