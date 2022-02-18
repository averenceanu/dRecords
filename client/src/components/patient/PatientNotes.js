import React, {useState} from "react";
import NotesItem from './NotesItem.js';
import Button from "@mui/material/Button";
import axios from 'axios';
import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "./patient.scss"
import TextField from "@mui/material/TextField";


export default function PatientNotes(props) {
  const { patientNotes, setPatientNotes, patientId } = props;

  const [title, setTitle] = useState("")
  const [message, setMessage] = useState("")
  //const [patientId, setPatientId] = useState("")
  //const [practitionerId, setPractitionerId] = useState("")

  //let practitionerId = patientNotes.practitioner_id


  const newNote = {
    title: title,
    message: message,
    patient_id: patientId,
    practitioner_id: 1    //patientNotes[0].practitioner_id > this doesn't work if patient did not have a note previously
  }
  
  const addNewNote = function() {  
    return axios
      // .post(`${patientId}/notes`, newNote)
      .post('/api/notes', newNote)
      .then((response) => {
        //console.log("this is DATTTTTTA", response.data);
        //setState('null')
        setPatientNotes([...patientNotes, response.data])
      })
      .catch((err) => {
        console.log(err.message);
      });
    // console.log("PATIENT", patientNotes)
    // console.log("HERE", newNote)
  }

  const displayNotes = patientNotes.map((note)=> {
    return (
    <NotesItem 
      key={note.id}
      title={note.title}
      message={note.message}
      created_at={note.created_at}
    />)
  })

  return (
    <div className="container-patient">
      <div className="navbar-small-patient">
        <Link to="/practitioners" color="white"><ArrowBackIosIcon/>Patients List</Link>
        <h3> Notes</h3>
      </div>
      <div className="patient-notes">
        <div className="shadow-lg p-3">
          {displayNotes}
          <form>
            <div className="flex items-center justify-center h-screen bg-gray-200">
              <div className="bg-white rounded-lg border shadow-lg p-4 w-1/5">
                <TextField
                  placeholder="Title..."
                  rows="1"
                  label="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="text_field bg-gray-200 p-1 h-20 w-full mt-0 good"
                  cols="120"
                  required
                  fullWidth="true"
                  margin="normal"
                ></TextField>
                <TextField
                  placeholder="Entry..."
                  label="Note"
                  minRows={4}
                  className="text_field bg-gray-200 p-1 h-20 w-full mt-0 good"
                  cols="120"
                  required
                  fullWidth="true"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  multiline="true"
                  margin="normal"
                ></TextField>
              </div>
            </div>
            <div className="add-note">
              <Button variant="contained" onClick={(e) => addNewNote()}>
                Add Note
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
