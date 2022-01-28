import React from "react";
import "./note.css";


function NoteTwo(props) {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [isFocus, setIsFocus] = React.useState(false);

  const takeTitle = (e) => {
    setTitle(e.target.value);
  };
  
  const takeDescription = (e) => {
    setDescription(e.target.value);
  };

  const add = () => {
    let noteData = {
      "title": title,
      "description": description
    };

    props.onAddNote(noteData);
    setIsFocus(false);
    setTitle('')
    setDescription('')
  }
    
  return (
    <div className="noteContainer">
      {isFocus &&<div className="titleContainer">
        <input
          type="text"
          placeholder="Title"
          className="inputFields"
          onChange={takeTitle}
          value={title}
        />
      </div>}
      <div className="descriptionContainer">
        <input
          type="text"
          placeholder="Take a note..."
          className="inputFields"
          onChange={takeDescription}
          onFocus={()=> setIsFocus(true)}
          value={description}
        />
      </div>
      {isFocus && <div className="buttonContainer">
        <div className="iconHolder">
          <i  className="material-icons icons">add_alert</i>
          <i className="material-icons icons">person_add</i>
          <i className="material-icons icons">color_lens</i>
          <i className="material-icons icons">collections</i>
          <i className="material-icons icons">archive</i>
          <i className="material-icons icons">more_vert</i>
        </div>
        <div className="closeButton">
          <button className="closeButton1" onClick={add}>
            Close
          </button>
        </div>
      </div>
      }
    </div>
  );
}

export default NoteTwo;
