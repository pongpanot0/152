
import React, { useState, useEffect } from 'react';

import Login from './Login';
import auth from './firebase';
import Ac from './Ac'
import '../App.css';

function App() {
  const [session, setSession] = useState({
    isLoggedIn: false,
    currentUser: null,
    errorMessage: null
  });

  useEffect(() => {
    const handleAuth = auth.onAuthStateChanged(user => {
      if (user) {
        setSession({
          isLoggedIn: true,
          currentUser: user,
          errorMessage: null
        });
      }
    });

    return () => {
      handleAuth();
    };
  }, []);

  const handleLogout = () => {
    auth.signOut().then(response => {
      setSession({
        isLoggedIn: false,
        currentUser: null
      });
    });
  };

  return (
    <div >
     
      <Ac/>
      )}
    </div>
  );
}

export default App;