import React, { useState } from 'react';
import Header from './components/Header';
import NotesList from './components/NotesList';
import { Note } from './models/note.models';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';



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
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
             <NotesList />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
