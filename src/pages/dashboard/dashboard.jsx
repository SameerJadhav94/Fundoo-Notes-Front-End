/* eslint-disable no-sequences */
import React, { useEffect } from "react";
import Header from "../../components/header/header";
import Note from "../../components/note/note";
import "./../dashboard/dashboard.css";
import NotesViewer from "../../components/getnote/GetNote";
import { addNote, getNote, deleteNote, updateNote } from "../../services/dataServices";
import NavBar from "../../components/sideNavBar/SideNav"

function Dashboard() {
  const [openNav,setOpenNav] =React.useState(false)
  const [notes, setNotes] = React.useState([]);

  const listenToProps = ()=>{
    setOpenNav(!openNav);
  }
  
  useEffect(() => {
    (async () => {
      const notes = await getNote();
      setNotes(notes.data.data);
    })();
  }, []);

  const onAddNote = async (data) => {
    try {
      const response = await addNote(data);
      console.log(response);
      const notes = await getNote();
      setNotes(notes.data.data);
      console.log({ notes: notes.data.data });
    } catch (error) {
      console.log({ error });
    }
  };

  const onDeleteNote = async (noteId) => {
    try {
      const response = await deleteNote(noteId);
      console.log(response);
      const notes = await getNote();
      setNotes(notes.data.data);
      console.log({ notes: notes.data.data });
    } catch (error) {
      console.log(error);
    }
  };

  const onUpdateNote = async (DataId,updatedData) => {
    try{
      console.log(DataId);
      console.log(updatedData);
      const response = await updateNote(DataId,updatedData);
      console.log(response);
      const notes = await getNote();
      setNotes(notes.data.data);
      console.log({ notes: notes.data.data });
    }catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Header listenToProps={listenToProps}/>
      <NavBar  openNav={openNav}/>
      <div className="notesHolder">{<Note onAddNote={onAddNote}/>}</div>
      <NotesViewer notes={notes} onDeleteNote={onDeleteNote} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default Dashboard;
