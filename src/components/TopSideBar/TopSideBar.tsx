import "./topSideBar.scss"
import SearchIcon from '@mui/icons-material/Search';
import EmailIcon from '@mui/icons-material/Email';
import HiveIcon from '@mui/icons-material/Hive';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom"
import {checkAuth, logoutUser} from "../../services/ActionCreator";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {useEffect} from "react";

const TopSideBar = () => {
    const {authUser} = useAppSelector(state => state.authReducer)
    const dispatch = useAppDispatch()

    return (
        <div className="topSideBar">
            <div className="topSideBar__container">
                <div className="topSideBar__left">
                    <Link to="/home">
                        <div className="topSideBar__logo">
                            <span>bee</span>Social
                        </div>
                    </Link>
                </div>
                <div className="topSideBar__center">
                    <div className="topSideBar__search">
                        <SearchIcon className="search-icon"/>
                        <input type="text" placeholder="Search..." />
                    </div>
                </div>
                <div className="topSideBar__right">
                    <div className="topSideBar__navigation">
                        <div className="topSideBar__navigation-item">
                            <PeopleAltIcon className="navigation-icon" />
                            <span className="icon-value">1</span>
                        </div>
                        <div className="topSideBar__navigation-item">
                            <EmailIcon className="navigation-icon" />
                            <span className="icon-value">2</span>

                        </div>
                        <div className="topSideBar__navigation-item">
                            <HiveIcon className="navigation-icon" />
                            <span className="icon-value">3</span>
                        </div>



                    </div>
                    <Link to={`/profile/${authUser?.username}`}>
                        <div className="topSideBar__profile">
                            <img src="/assets/users/1/avatar.jpg" alt="avatar" className="topSideBar__profile-image"/>
                        </div>
                    </Link>

                    <div className="topSideBar__logout" onClick={() => {dispatch(logoutUser())}}>
                        <LogoutIcon className="topSideBar__logout-icon" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopSideBar;