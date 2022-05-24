import * as React from 'react';
import Notes from './Notes';
import { Note } from '../models/note.models';

interface INotesListProps {
  notes: Note[]
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const NotesList: React.FunctionComponent<INotesListProps> = ({notes, setNotes}) => {
  const handleDelete = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
  }


  const renderNotes = ():JSX.Element[] => {
    return notes.map(note => {
      return <Notes key={note.id} note={ note } handleDelete={ handleDelete }/>
    })
  }


  return (
      <>
       <h2 className="mt-3">Notes</h2>
       {/*Look through all the notes and display them on the screen*/}
       <div>{ renderNotes() }</div>
      </>
  );
};

export default NotesList;
