import ButtonCounter from './components/ButtonCounter';
import Navbar from "./components/Navbar";
// import Racers from './components/Racers';
import RacersClass from './components/RacersClass';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import AlertMessage from './components/AlertMessage';
import { useState } from 'react';
import Login from './components/Login';
import CreatePost from './components/CreatePost';


function App(props) {
    const now = new Date();
    // useState is the default value of your variable 
    const [message, setMessage] = useState(null); 
    const [category, setCategory] = useState(null);
    const [loggedIn, setLoggedIn] = useState((localStorage.getItem('token') && new Date (localStorage.getItem('expiration')) > now))

    const flashMessage = (message, category) => {
        setMessage(message);
        setCategory(category)
    }

    const login = () => {
        setLoggedIn(true)
    }

    const logout = () => {
        setLoggedIn(false)
        localStorage.removeItem('token');
        localStorage.removeItem('expiration')
        setLoggedIn(false)
    }

    return (
      <>
        <Navbar name="Brian" city="Chicago" logout={logout} />
        <div className="container">
          {/* "if there is a message insert the AlertMessage component. If not, don't show it" */}
          {message ? (
            <AlertMessage
              message={message}
              category={category}
              flashMessage={flashMessage}
            />
          ) : null}
          <Routes>
            <Route path="/" element={<ButtonCounter />} />
            <Route path="/standings" element={<RacersClass />} />
            <Route
              path="/register"
              element={<Register flashMessage={flashMessage} />}
            />
            <Route
              path="/login"
              element={<Login flashMessage={flashMessage} login={login} />}
            />
            <Route
              path="/create-post"
              element={<CreatePost flashMessage={flashMessage} login={login} />}
            />
          </Routes>
        </div>
      </>
    );
}

export default App;
