import './App.css'
import PageContent from './components/PageContent/PageContent'
import Sidebar from './components/Sidebar/Sidebar'

function App() {

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
