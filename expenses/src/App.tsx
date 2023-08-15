import { FrappeProvider } from 'frappe-react-sdk'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import { Expenses } from './pages/Expenses'
function App() {

  return (
      <FrappeProvider socketPort={import.meta.env.VITE_SOCKET_PORT ?? ""}>
        <BrowserRouter basename={import.meta.env.VITE_BASE_PATH}>
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<Expenses/>}/>
          </Routes>
        </BrowserRouter>
      </FrappeProvider>
  )
}

export default App
