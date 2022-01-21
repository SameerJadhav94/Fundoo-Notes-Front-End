import React from "react";
import "./NoteOne.css";

function NoteOne(props) {

    const Clicked = () =>{
        props.listenToNoteOne("Hello")
    }

  return (
    <div>
      <div className="note">
        <input type="text" className="field" placeholder="Take a note... "  onClick={Clicked} />
      </div>
    </div>
  );
}

export default NoteOne;
