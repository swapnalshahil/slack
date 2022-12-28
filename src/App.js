import React from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './App.css';
import Chat from './components/Chat';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            {/* Header */}
            <Header />
            <div className="app_body">
              {/* Sidebar */}
              <Sidebar />
              {/* Chat screen */}
              <Routes>
                <Route path="/room/:roomId" element={<Chat />}>
                  {/* <Chat/> */}
                </Route>
                <Route path="/" element={""}>
                  Welcome!
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
