import React, { useState } from "react";
import CreateCRUD from "./CreateCRUD";
import EditCRUD from "./EditCRUD";

const CRUDApp = () => {
  const [modEdit, setModEdit] = useState(false);

  return (
    <div>
      {modEdit ? <EditCRUD /> : <CreateCRUD setModEdit={setModEdit} />}
    </div>
  );
};

export default CRUDApp;
