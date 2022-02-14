import React, { useState } from "react";
import CreateForm from "./CreateForm";
import CreateStudent from "./CreateStudent";

const CreateCRUD = ({ setModEdit }) => {
  const [db, setDb] = useState([]);

  return (
    <div className="pt-5">
      <h2 className="text-center">Create CRUD</h2>
      <CreateForm db={db} setDb={setDb}/>
      <hr />
      <CreateStudent db={db} setModEdit={setModEdit} />
    </div>
  );
};

export default CreateCRUD;
