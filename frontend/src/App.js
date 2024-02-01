import { BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import Login from './pages/Login';
import { useAuthContext } from './hooks/useAuthContext';


function App() {
  const {user} = useAuthContext()
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login"/>}/> 
          <Route path="/login" element={!user ? <Login/> : <Navigate to="/dashboard"/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
