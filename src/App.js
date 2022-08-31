import ButtonCounter from './components/ButtonCounter';
import Navbar from "./components/Navbar";
import Racers from './components/Racers';
import RacersClass from './components/RacersClass';
import { Routes, Route } from 'react-router-dom';

function App(props) {
    console.log('Hello')
    return (
        <>
            <Navbar name='Brian' city='Chicago'/>
            <div className='container'>
                <Routes>
                    <Route path='/' element={<ButtonCounter />} />
                    <Route path='/standings' element={<RacersClass />} />
                </Routes>
            </div>
        </>
    )
}

export default App;
