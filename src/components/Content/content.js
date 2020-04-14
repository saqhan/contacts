import React from "react";

import "./content.css";

import Cart from "../Cart";

const Content = ({ people, deletePeople, editName, editNumber, editEmail }) => {
  return (
    <div className="content">
      {people.map((person) => {
        if (person.deleted !== true) {
          return (
            <Cart key={person.id} person={person} deletePeople={deletePeople} editName={editName}  editNumber={editNumber} editEmail={editEmail} />
          )
        }
        return true;
        
      })}
    </div>
  );
};

export default Content;
