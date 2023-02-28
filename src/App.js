import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Topbar from './components/Topbar';
import Main from "./pages/Main";

function App() {
  return (
    <>
      <Router>
        <Topbar/>
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
