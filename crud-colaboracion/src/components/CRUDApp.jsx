import React, { useState } from "react";
import CreateStudent from "./CreateStudent";
import CreateCRUD from "./CreateCRUD";
import EditCRUD from "./EditCRUD";

const initialDb = [
  {
    id: 1,
    name: "Facundo",
    lastName: "Barneche",
    age: 31,
    email: "fh.barneche@gmail.com",
    grades: [9, 4, 7],
  },
  {
    id: 2,
    name: "Emiliano",
    lastName: "Hrovatin",
    age: 35,
    email: "elgo_loso@tinder.com.mx",
    grades: [6, 10, 7],
  },
  {
    id: 3,
    name: "Christian",
    lastName: "Rebasti",
    age: 55,
    email: "el_lokito@gmail.com",
    grades: [10, 10, 10],
  },
  {
    id: 4,
    name: "Josesito",
    lastName: "Carabajal",
    age: 42,
    email: "doblete@gmail.com",
    grades: [1, 4, 3],
  },
  {
    id: 5,
    name: "Churri",
    lastName: "Cristaldo",
    age: 39,
    email: "el_churri_cristaldo@gmail.com",
    grades: [5, 4, 10],
  },
  {
    id: 6,
    name: "Walter",
    lastName: "Arias",
    age: 60,
    email: "nosepuedehacerchoripan@gmail.com",
    grades: [6, 7, 8],
  },
  {
    id: 7,
    name: "Hector",
    lastName: "Barneche",
    age: 59,
    email: "titoBarneche@gmail.com",
    grades: [10, 1, 6],
  },
];

const CRUDApp = () => {
  const [modEdit, setModEdit] = useState(false);

  return (
    <div>
      {modEdit ? <EditCRUD /> : <CreateCRUD />}
      <hr />
      <CreateStudent initialDb={initialDb} setModEdit={setModEdit}/>
    </div>
  );
};

export default CRUDApp;
