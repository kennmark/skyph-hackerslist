import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateHacker from './pages/CreateHacker'
import ShowHacker from './pages/ShowHacker'
import EditHacker from './pages/EditHacker'
import DeleteHacker from './pages/DeleteHacker'
import HackerTableLookup from './components/home/HackerTableLookup'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hackers/searchable-table" element={<HackerTableLookup />} />
      <Route path="/hackers/create" element={<CreateHacker />} />
      <Route path="/hackers/details/:id" element={<ShowHacker />} />
      <Route path="/hackers/edit/:id" element={<EditHacker />} />
      <Route path="/hackers/delete/:id" element={<DeleteHacker />} />
    </Routes>
  )
}

export default App
