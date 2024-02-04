import { BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import Login from './pages/Login';
import { useAuthContext } from './hooks/useAuthContext';
import Profile from './pages/Profile';
import Events from './pages/Events';
import Members from './pages/Members';


function App() {
  const {club} = useAuthContext()
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={club ? <Dashboard /> : <Navigate to="/login"/>}/> 
          <Route path="/profile" element={club ?<Profile />: <Navigate to="/login"/>}/> 
          <Route path="/events" element={club ?<Events />: <Navigate to="/login"/>}/> 
          <Route path="/members" element={club ?<Members />: <Navigate to="/login"/>}/> 

          <Route path="/login" element={!club ? <Login/> : <Navigate to="/dashboard"/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
