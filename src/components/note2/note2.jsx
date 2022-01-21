import React from "react";
import "./../note2/note2.css";
import {addNote} from '../../services/dataServices'

function NoteTwo() {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const takeTitle = (e) => {
    setTitle(e.target.value);
  };
  const takeDescription = (e) => {
    setDescription(e.target.value);
  };

  const add = () => {
    let obj = {
      "title": title,
      "description": description
    };
    
console.log(obj);
    addNote(obj)
      .then((result) => {
        console.log(result);
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="noteContainerTwo">
      <div className="childOneNoteTwo">
        <input
          type="text"
          placeholder="Title"
          className="inputFields"
          onChange={takeTitle}
        />
      </div>
      <div className="childTwoNoteTwo">
        <input
          type="text"
          placeholder="Take a note..."
          className="inputFields"
          onChange={takeDescription}
        />
      </div>
      <div className="childThreeNoteTwo">
        <div className="iconHolder">
          <i className="material-icons icons">add_alert</i>
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
    </div>
  );
}

export default NoteTwo;
