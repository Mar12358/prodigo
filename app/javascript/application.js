// Entry point for the build script in your package.json
import './app.css'
import '@hotwired/turbo-rails';
import './controllers';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Reserve from './components/Reserve';
import Nav from './components/Nav';
import Lecture from './components/Lecture'
import MyReservations from './pages/MyReservations'
import AddLecture from './components/AddLecture'
import DeleteLecture from './components/DeleteLecture'

function App() {
  return (
    <>
    <div className="container-column">
      <Nav />
      <Routes className="container-routes">
        <Route index element={<Lecture />} />
        <Route path="lectures" element={<Lecture />} />  
        <Route path="reserve" element={<Reserve />} />
        <Route path="my_reservation" element={<MyReservations />} />
        <Route path="add_lecture" element={<AddLecture />} />
        <Route path="delete_lecture" element={<DeleteLecture />} />

      </Routes>
    </div>
    
    </>
  );
}

export default App;
