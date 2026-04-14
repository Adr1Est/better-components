import '@/App.css'
import { Outlet } from 'react-router'
import { Toaster } from 'react-hot-toast'

function App() {
  
  return (
    <>
      <Toaster />
      <Outlet />
    </>
  )
}

export default App
