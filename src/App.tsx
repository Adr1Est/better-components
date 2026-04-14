import '@/App.css'
import { Outlet } from 'react-router'
import { Toaster } from 'react-hot-toast'

function App() {
  
  return (
    <>
      <Toaster position="top-right" />
      <Outlet />
    </>
  )
}

export default App
