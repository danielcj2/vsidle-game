import SubMenu from "./SubMenu";
import icon from './icons/guessdle-icon-nobackground.svg'
import { gamesList } from "./GamesList";
import { VscClose } from 'react-icons/vsc';
import { FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import * as MdIcons from 'react-icons/md';


const Sidebar = ({sidebar, menu}) => {
    const sidebarItems = [
        {
            name: 'Home',
            path: '/',
            icon: <MdIcons.MdHome />,
        },
        {
            name: 'Guess the ...',
            subArray: gamesList,
        },
        // {
        //     name: 'Statistics',
        //     path: '/',
        //     icon: <MdIcons.MdLeaderboard />,
        // },
        {
            name: 'Help',
            icon: <MdIcons.MdHelpCenter />,
        },
        {
            name: 'Settings',
            icon: <FaCog />,
        }
    ]

    return (
        <nav className = {sidebar ? "sidebar sidebar-show" : "sidebar"}>
            <div className="sidebar-header d-flex align-items-end justify-content-start">
                <img className="menu-logo" style={{width: '15%'}} src={icon} alt="logo" />
                <h3 className="menu-title">MENU</h3>
                <button className="btn close-btn" onClick={menu}><VscClose /></button>
            </div>
            {sidebarItems.map((item, index) => (<><div key={index} className={item.subArray ? "nav-item hasSubMenu" : "nav-item"}><Link to={item.path} className="d-flex align-items-end">{item.icon}<span>{item.name}</span></Link></div>{item.subArray ? <SubMenu submenuItems={item.subArray} menu={menu}/> : null}</>))}
        </nav>
    )
}

export default Sidebar
