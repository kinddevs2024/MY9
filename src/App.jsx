import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from '../Home.jsx'
import Layout from './LAYOUT/Layout'

function App() {


  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Layout>

  )
}

export default App
