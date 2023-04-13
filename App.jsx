import './App.css'
import Header from './components/header/header'
import Main from './components/main/main'
import NavBar from './components/navbar/navbar'

function App() {

  return (
    <div className="App">
      <Header />
      <div className='Layout'>
        <NavBar />
        <Main />
      </div>
    </div>
  )
}

export default App
