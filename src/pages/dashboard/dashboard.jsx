/* eslint-disable no-sequences */
import React from 'react';
import Header from '../../components/header/header'
import NoteOne from '../../components/note1/NoteOne'
import NoteTwo from '../../components/note2/note2'
import './../dashboard/dashboard.css'
import GetNote from '../../components/getnote/GetNote'

function Dashboard() {
    const [noteView, setNoteView] = React.useState(true)
    
    const listenToNoteOne = (data) =>{
       setNoteView(false)
    }
    
    return (
        <div>
            <Header/>
            <div className="notesHolder">{noteView ? <NoteOne listenToNoteOne = {listenToNoteOne}/> : <NoteTwo/>}</div>
              <GetNote/>  
        </div>
    )
}

export default Dashboard
