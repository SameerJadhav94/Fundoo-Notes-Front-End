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

  // const [updateTitle, setUpdateTitle] = React.useState(editNote.title)
  // const [updateDescription, setUpdateDescription] = React.useState(editNote.description)

  
  const updateTitleOne = (e) => {
    setEditNote({
      ...editNote,
      title: e.target.value,
    });
  };

  const setUpdateDescriptionOne = (e) => {
    setEditNote({
      ...editNote,
      description: e.target.value,
    });
  };

  const handleOpen = (e) => {
    e.stopPropagation();
    let filterArray = props.notes.filter((note) => note._id === e.target.id);
    console.log(filterArray[0]);
    setOpen(true);
    setEditNote({
      title: filterArray[0].title,
      description: filterArray[0].description,
    });
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setOpen(false);
  };
  
  function updateNote(noteId) {
    const updatedData = {
      "title": editNote.title,
      "description": editNote.description,
    };
    console.log(updatedData);
    props.onUpdateNote(noteId, updatedData);
  }

  return (
    <div>
      <div className="notesContainer">
        {props.notes.map((note) => (
          <div
            key={note._id}
            id={note._id}
            className="mountedNotes"
            onClick={handleOpen}
          >
            <div id={note._id} className="titles">
              {note.title}
            </div>
            <div id={note._id} className="descriptions">
              {note.description}
            </div>
            <div id={note._id} className="icon">
              <i className="material-icons effect">add_alert</i>
              <i className="material-icons effect">person_add</i>
              <i className="material-icons effect">color_lens</i>
              <i className="material-icons effect">collections</i>
              <i className="material-icons effect">archive</i>
              <i
                onClick={(e) => {
                  e.stopPropagation();
                  props.onDeleteNote(note._id);
                }}
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
              // onClick={(e) =>{e.stopPropagation()}}
            >
              <div className="container" style={style}>
                <div className="updateTitle">
                  <input
                    type="text"
                    placeholder="Title"
                    className="fields"
                    defaultValue={editNote.title}
                    onChange={updateTitleOne}
                  />
                </div>

                <div className="updateDescription">
                  <input
                    type="text"
                    placeholder="Take a note..."
                    className="inputFields"
                    defaultValue={editNote.description}
                    onChange={setUpdateDescriptionOne}
                  />
                </div>

                <div className="buttonBox">
                  <div className="iconBox">
                    <i className="material-icons iconEffect">add_alert</i>
                    <i className="material-icons iconEffect">person_add</i>
                    <i className="material-icons iconEffect">color_lens</i>
                    <i className="material-icons iconEffect">collections</i>
                    <i className="material-icons iconEffect">archive</i>
                    <i className="material-icons iconEffect">more_vert</i>
                  </div>
                  <div className="close">
                    <button
                      className="close1"
                      onClick={() => {
                        updateNote(note._id);
                      }}
                    >
                      Close
                    </button>
                  </div>
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
