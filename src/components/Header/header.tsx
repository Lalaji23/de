 import Menu from '../../assets/menu.png';
 import User from '../../assets/user.png';
 import './Header.css';
 import { Link } from 'react-router-dom';

export default function Header()
 {
  return (
    <div>
        <div className="header">
            <div className="header-container">
                <div className="nav-links">
                    <ul>
                        <li>
                            <a href="#">
                                <img src={Menu}></img>
                            </a>
                        </li>
                    </ul>
                    <ul>
                     <li> <Link to={'/Start-collection'}>Market </Link></li>
                        <li><a href="">Sign-in</a></li>
                        <li><Link to={'/User'}><img src={User}></img></Link></li>
                        <li><button className='btnn2'>Connect Wallet</button></li>
                    </ul>
                </div>
            </div>
        </div> <hr></hr>
    </div>
   
  )
}
