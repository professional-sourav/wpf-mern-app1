import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './App.css'
import PageContent from './components/PageContent/PageContent'
import Sidebar from './components/Sidebar/Sidebar'
import { useNavigate } from 'react-router-dom'

function App() {

  const { userToken } = useSelector((state: any) => state.auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (!userToken) {
      navigate('/login')
    }
  }, [userToken])

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <PageContent />
      </div>
    </>
  )
}

export default App
