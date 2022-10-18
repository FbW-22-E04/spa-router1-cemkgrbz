import {Link} from 'react-router-dom'
import "./Header.css"

function Header() {
    return ( 
        <div className='header'>
            <Link to='/main' className="font-bold">About Me</Link>
            <ul className='flex pt-10 gap-10'>
                <Link to='/me'><li>Me</li></Link>
                <span>|</span>
                <Link to='/hobbies'><li>Hobbies</li></Link>
                <span>|</span>
                <Link to='/contact'>Contact</Link>
            </ul>
        </div>
     );
}

export default Header;