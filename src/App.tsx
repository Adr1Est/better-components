import '@/App.css'
import { Outlet } from 'react-router'
import { useRefreshToken } from '@/hooks/useRefreshToken'

function App() {
  useRefreshToken();

  return (
    <Outlet />
  )
}

export default App
