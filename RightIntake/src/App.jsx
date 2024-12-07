
import './App.css'
import RoutesComponent from './components/routeComponent/routes'
import { DataProvider } from './components/Context/DataContext'


function App() {

  return (
    <>
      <DataProvider>
        <RoutesComponent />
      </DataProvider>
    </>
  )
}

export default App
