import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateHackers from './pages/createHackers'
import ShowHacker from './pages/ShowHacker'
import EditHacker from './pages/EditHacker'
import DeleteHacker from './pages/DeleteHacker'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hackers/create" element={<CreateHackers />} />
      <Route path="/hackers/details/:id" element={<ShowHacker />} />
      <Route path="/hackers/edit/:id" element={<EditHacker />} />
      <Route path="/hackers/delete/:id" element={<DeleteHacker />} />
    </Routes>
  )
}

export default App
