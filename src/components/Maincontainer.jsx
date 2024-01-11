import { Routes, Route } from 'react-router-dom';
import Red from './Red'
import Blue from './Blue'
import Home from './Home'
import Orange from './Orange'
import Yellow from './Yellow'
import Green from './Green'
import Purple from './Purple'

const Maincontainer = () => {
    return (
        <div id="main-section">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/red" element={<Red />} />
                <Route path="/orange" element={<Orange />} />
                <Route path="/yellow" element={<Yellow />} />
                <Route path="/green" element={<Green />} />
                <Route path="/blue" element={<Blue />} />
                <Route path="/purple" element={<Purple />} />
            </Routes>
      </div>
    )
};

export default Maincontainer;