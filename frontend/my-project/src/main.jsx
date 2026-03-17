import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import Index from './pages/Index';
import AddStudent from './pages/AddStudent';
import EditStudent from './pages/EditStudent';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/edit-student/:student_id" element={<EditStudent />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
