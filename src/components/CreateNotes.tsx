//component defining how new notes are created
import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { Note } from '../models/note.models';
import { Form } from 'react-bootstrap';

interface ICreateNotesProps {
  notes: Note[],
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({notes, setNotes}) => {
    //useState to capture the error
    const[error, setError] = React.useState<string>("")
    //using useRef for validation to get the values
    const titleRef = React.useRef<HTMLInputElement | null>(null);
    const textRef = React.useRef<HTMLTextAreaElement | null>(null);
    const colorRef = React.useRef<HTMLInputElement | null>(null);
    
    //submit function with event listener
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>): void => {
        //prevent page from refreshing after submitting
        e.preventDefault();
        //check to see if title ot text is empty or not
        if(titleRef.current?.value === "" || textRef.current?.value === "") {
            return setError("All fields are mandatory");
        }

        setError("");
        setNotes([...notes, {
            id: (new Date()).toString(),
            title: (titleRef.current as HTMLInputElement).value,
            text: (textRef.current as HTMLTextAreaElement).value,
            color: (colorRef.current as HTMLInputElement).value,
            date: (new Date()).toString()
        }]);

        (titleRef.current as HTMLInputElement).value = "";
        (textRef.current as HTMLTextAreaElement).value = "";
    }

    return (
      <>
        <h2>Create Notes</h2>
        {/*display error if no input is written in the fields*/ }
        {error && <Alert variant="danger">{error}</Alert>}
        <Form className="mt-3 mb-3" onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Title for the Note" ref={ titleRef } />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Text</Form.Label>
                <Form.Control placeholder="Enter your notes" as="textarea" rows={3} ref={ textRef } />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="colorInput">Notes Color</Form.Label>
                <Form.Control type="color" id="colorInput" defaultValue="#dfdfdf" title="Choose your color" ref={ colorRef } />
            </Form.Group>
            <Button type="submit" variant="primary">Submit</Button>
        </Form>
      </>
  );
};

export default CreateNotes;
