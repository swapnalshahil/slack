import { useState } from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './App.css';
import Chat from './components/Chat';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login/>
        ) : (
          <>
            {/* Header */}
            <Header />
            <div className="app_body">
              {/* Sidebar */}
              <Sidebar />
              {/* Chat screen */}
              <Routes>
                <Route path="/" element={""}>
                  Welcome!
                </Route>
                <Route path="/room/:roomId" element={<Chat />}>
                  {/* <Chat/> */}
                </Route>
              </Routes>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
