import React, { useState } from 'react';
import { Note } from './models/note.models'
import './App.css';



function App() {
  //angular brackets to define the type of notes
  const [notes, setNotes] = useState<Note[]>([{
    //object to show value of the string properties
    id: (new Date).toString(),
    title: "Meetings",
    text: "Schedule meeting with UI/UX Team",
    color: "#dfdfdf",
    date: (new Date).toString()
  }]);

  return (
    <div className="App">
      App
    </div>
  );
}

export default App;
