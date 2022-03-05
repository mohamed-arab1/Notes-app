import './App.css';
import uuid from "react-uuid"
import { useState, useEffect } from 'react';
import Side from './Componenets/Side';
import Main from './Componenets/Main';

function App() {

  const [notes, setNote] = useState(localStorage.notes ? JSON.parse(localStorage.getItem("notes")) : []);
  const [active, setActive] = useState(false);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])


  const onAddNote = () => {
    const newNote = {

      id: uuid(),
      title: "untitled note",
      body: "",
      lastmodified: Date.now(),

    };
    setNote([newNote, ...notes]);
  };

  const onDeleteNote = (idToDelete) => {
    setNote(notes.filter((note) => note.id !== idToDelete));
  };

  const getActive = () => {
    return notes.find((note) => note.id === active);
  }

  const onUpdataNote = (updateNote) => {
    const updataNoteArray = notes.map(note => {
      if(note.id === active){
        return updateNote;
      }
      return note;
    })

    setNote(updataNoteArray);
  }


  return (
    <div className='App'>
      <Side
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        active={active}
        setActive={setActive}
      />
      <Main active={getActive()} onUpdataNote={onUpdataNote} />
    </div>
  );
}

export default App;
