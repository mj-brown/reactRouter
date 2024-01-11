import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div id="navbar">
            <Link to='/'>Home</Link>
            <Link to='/red'>Red</Link>
            <Link to='/orange'>Orange</Link>
            <Link to='/yellow'>Yellow</Link>
            <Link to='/green'>Green</Link>
            <Link to='/blue'>Blue</Link>
            <Link to='/purple'>Purple</Link>
        </div>
    )
};

export default Navbar;