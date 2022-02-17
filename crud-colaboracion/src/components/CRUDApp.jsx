import React, { useState } from "react";
import CreateCRUD from "./CreateCRUD";

const CRUDApp = () => {
  const [modEdit, setModEdit] = useState(false);

  return (
    <div>
      <CreateCRUD setModEdit={setModEdit} modEdit={modEdit} />
    </div>
  );
};

export default CRUDApp;
