import "./sidebar.scss"

import ChatIcon from '@mui/icons-material/Chat';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SearchIcon from '@mui/icons-material/Search';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__wrapper">
                <ul className="sidebar__list">
                    <li className="sidebar__list-wrapper">
                        <Link to='/home' className='sidebar__list-item'>
                            <RssFeedIcon className="sidebar-icon"/>
                            <span className="list__item-text">Feed</span>
                        </Link>
                    </li>
                    <li className="sidebar__list-wrapper">
                        <Link to='/home' className='sidebar__list-item'>
                        <ChatIcon className="sidebar-icon"/>
                        <span className="list__item-text">Messages</span>
                        </Link>
                    </li>
                    <li className="sidebar__list-wrapper">
                        <Link to='/friends' className='sidebar__list-item'>
                        <PeopleAltIcon className="sidebar-icon"/>
                        <span className="list__item-text">Friends</span>
                        </Link>
                    </li>
                    <li className="sidebar__list-wrapper">
                        <Link to='/home' className='sidebar__list-item'>
                        <SearchIcon className="sidebar-icon"/>
                        <span className="list__item-text">Search</span>
                        </Link>
                    </li>

                </ul>

                <ul className="sidebar__friendList">
                    <li className="sidebar__friend-title">Meet new people</li>
                    <li className="sidebar__friend-item">
                        <Link to="/profile/mayerjuly" className="sidebar__friend">
                            <img src="/assets/users/1/avatar.jpg" alt="avatar" className="sidebar__friend-image"/>
                            <div className="sidebar__friend-name">
                                Julian Mayer
                            </div>
                        </Link>
                    </li>
                    <li className="sidebar__friend-item">
                        <Link to="/profile/mayerjuly" className="sidebar__friend">
                            <img src="/assets/users/1/avatar.jpg" alt="avatar" className="sidebar__friend-image"/>
                            <div className="sidebar__friend-name">
                                Julian Mayer
                            </div>
                        </Link>
                    </li>
                    <li className="sidebar__friend-item">
                        <Link to="/profile/mayerjuly" className="sidebar__friend">
                            <img src="/assets/users/1/avatar.jpg" alt="avatar" className="sidebar__friend-image"/>
                            <div className="sidebar__friend-name">
                                Julian Mayer
                            </div>
                        </Link>
                    </li>

                    <li className="sidebar__friend-item">
                        <Link to="/profile/mayerjuly" className="sidebar__friend">
                            <img src="/assets/users/1/avatar.jpg" alt="avatar" className="sidebar__friend-image"/>
                            <div className="sidebar__friend-name">
                                Julian Mayer
                            </div>
                        </Link>
                    </li>
                    <li className="sidebar__friend-item">
                        <Link to="/profile/mayerjuly" className="sidebar__friend">
                            <img src="/assets/users/1/avatar.jpg" alt="avatar" className="sidebar__friend-image"/>
                            <div className="sidebar__friend-name">
                                Julian Mayer
                            </div>
                        </Link>
                    </li>

                </ul>

            </div>




            
        </div>
    );
};

export default Sidebar;