/* eslint-disable no-sequences */
import React from "react";
import { getNote } from "../../services/dataServices";
import "./GetNote.css";

function GetNote() {
  const [notes, setNotes] = React.useState([]);
  React.useEffect(() => {
    getNote()
      .then((data) => {
        console.log("data", data.data.data);
        setNotes(data.data.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  return (
    <div>
      <div className="notesContainer">
        {notes.map((note) => (
          <div key={note._id} className="mountedNotes">
            <div className="titles">{note.title}</div>
            <div className="descriptions">
              {note.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetNote;
