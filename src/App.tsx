import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.scss'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Main from './Main/Main'
import FormControls from './FormControls/FormControls'

function App() {
  return (
    <div className="App">
      <Header>header</Header>
      <Main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FormControls />} />
          </Routes>
        </BrowserRouter>
      </Main>
      <Footer />
    </div>
  )
}

export default App
