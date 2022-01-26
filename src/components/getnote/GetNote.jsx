/* eslint-disable no-sequences */
import React from "react";
import Modal from "@mui/material/Modal";
import "./GetNote.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  width: 400,
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  height: 200,
  backgroundColor: "white",
};

function GetNote(props) {
  const [open, setOpen] = React.useState(false);
  const [editNote, setEditNote] = React.useState({
    title: "",
    description: "",
  });

  const handleOpen = (e,note) => {
    console.log(note);
    setOpen(true);
    setEditNote({
      title: note.title,
      description: note.description,
    });
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setOpen(false)};

  return (
    <div>
      <div className="notesContainer">
        {props.notes.map((note) => (
          <div
            key={note._id}
            className="mountedNotes"
            onClick={(event) => handleOpen(event, note)}
          >
            <div className="titles">{note.title}</div>
            <div className="descriptions">{note.description}</div>
            <div className="icon">
              <i className="material-icons effect">add_alert</i>
              <i className="material-icons effect">person_add</i>
              <i className="material-icons effect">color_lens</i>
              <i className="material-icons effect">collections</i>
              <i className="material-icons effect">archive</i>
              <i
                onClick={() => props.onDeleteNote(note._id)}
                id={note._id}
                className="material-icons effect"
              >
                delete
              </i>
            </div>
            <Modal
              open={open}
              onClose={handleClose}
              style={{ backgroundColor: "transparent" }}
            >
              <div style={style}>
                <button onClick={handleClose}>Close</button>
                <div className="titles">
                {editNote.title}
                </div>
                <div className="descriptions">
                  {editNote.description}
                </div>
              </div>
            </Modal>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetNote;
