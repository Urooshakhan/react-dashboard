import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from'./pages/login';
import Layout from './layout/Layout';
import Home from './pages/home';
function App() {
  return (
    <BrowserRouter basename="/react-dashboard">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
