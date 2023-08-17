import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Card from './components/Card'

function App() {
  const [userName, setUserName] = useState('')
  const [userSong, setUserSong] = useState('')

  const handleSubmit = (nombre, tema) =>{
    console.log("En handle submit", nombre, tema)
    setUserName(nombre)
    setUserSong(tema)
  }



  return (
    <div className="App">
      <Form onSubmit = {handleSubmit}/>
      <Card userName = {userName} userSong = {userSong}/>
    </div>
  );

}

export default App
