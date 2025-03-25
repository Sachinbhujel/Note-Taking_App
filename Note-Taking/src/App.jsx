import Header from './Components/Header'
import AddNote from './Components/AddNote'
import './App.css'
import { useState } from 'react'
import ShowNotes from './Components/ShowNotes'

function App() {
  const [notes, setNotes] = useState([]);

  return (
    <>
      <div className="main">
        <Header setNotes={setNotes} notes={notes}/>
        <ShowNotes notes={notes}/>
        <AddNote setNotes={setNotes}/>
      </div>
    </>
  )
}

export default App
