import "./rightSidebar.scss"
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {useEffect} from "react";
import {fetchUser, fetchUserByUsername} from "../../services/ActionCreator";
import {useNavigate, useParams} from "react-router-dom";
import {IUser} from "../../models/IUser";

interface IRightSideBar {
    profile?: boolean,
    user?: IUser,
}

const RightSidebar = ({profile, user}: IRightSideBar) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER


    const HomeRightSidebar = () => {
        return (
            <>
                <div className="rightSidebar__title">Friends online:</div>
                <ul className="rightSidebar__friendList">
                    <li className="rightSidebar__friend">
                        <div className="rightSidebar__profileImage__wrapper">
                            <img src="/assets/avatar-2.jpg" alt="" className="rightSidebar__profileImage"/>
                            <span className="rightSidebar-online"></span>
                        </div>
                        <div className="rightSidebar__username">
                            Alex Kovachev
                        </div>
                    </li>
                    <li className="rightSidebar__friend">
                        <div className="rightSidebar__profileImage__wrapper">
                            <img src="/assets/avatar-3.jpg" alt="" className="rightSidebar__profileImage"/>
                            <span className="rightSidebar-online"></span>
                        </div>
                        <div className="rightSidebar__username">
                            Maria Fox
                        </div>
                    </li>
                    <li className="rightSidebar__friend">
                        <div className="rightSidebar__profileImage__wrapper">
                            <img src="/assets/avatar-2.jpg" alt="" className="rightSidebar__profileImage"/>
                            <span className="rightSidebar-online"></span>
                        </div>
                        <div className="rightSidebar__username">
                            Alex Kovachev
                        </div>
                    </li>
                    <li className="rightSidebar__friend">
                        <div className="rightSidebar__profileImage__wrapper">
                            <img src="/assets/avatar-3.jpg" alt="" className="rightSidebar__profileImage"/>
                            <span className="rightSidebar-online"></span>
                        </div>
                        <div className="rightSidebar__username">
                            Maria Fox
                        </div>
                    </li>
                    <li className="rightSidebar__friend">
                        <div className="rightSidebar__profileImage__wrapper">
                            <img src="/assets/avatar-2.jpg" alt="" className="rightSidebar__profileImage"/>
                            <span className="rightSidebar-online"></span>
                        </div>
                        <div className="rightSidebar__username">
                            Alex Kovachev
                        </div>
                    </li>
                    <li className="rightSidebar__friend">
                        <div className="rightSidebar__profileImage__wrapper">
                            <img src="/assets/avatar-3.jpg" alt="" className="rightSidebar__profileImage"/>
                            <span className="rightSidebar-online"></span>
                        </div>
                        <div className="rightSidebar__username">
                            Maria Fox
                        </div>
                    </li>

                </ul>
            </>
        )
    }

    const ProfileRightSidebar = () => {
        if(user) {
            return (
                <>
                    <h4 className="rightSidebar__title">User Information </h4>
                    <div className="rightSidebar__info">
                        <div className="rightSidebar__info-item">
                            <span className="rightSidebar__info-key">City:</span>
                            <span className="rightSidebar__info-value">{user.city}</span>
                        </div>
                        <div className="rightSidebar__info-item">
                            <span className="rightSidebar__info-key">Age:</span>
                            <span className="rightSidebar__info-value">{user.age}</span>
                        </div>
                        <div className="rightSidebar__info-item">
                            <span className="rightSidebar__info-key">University:</span>
                            <span className="rightSidebar__info-value">{user.university}</span>
                        </div>
                    </div>
                    <h4 className="rightSidebar__title">User Friends:</h4>
                    <div className="rightSidebar__followings">
                        <div className="rightSidebar__following">
                            <img src={`${PF}/avatar-2.jpg`} alt="avatar" className="rightSidebar__following-image"/>
                            <span className="rightSidebar__following-name">
                            Donald Harrison
                        </span>
                        </div>
                        <div className="rightSidebar__following">
                            <img src={`${PF}/avatar-3.jpg`} alt="avatar" className="rightSidebar__following-image"/>
                            <span className="rightSidebar__following-name">
                            Anastasiya Kuchina
                        </span>
                        </div>
                        <div className="rightSidebar__following">
                            <img src={`${PF}/avatar-2.jpg`} alt="avatar" className="rightSidebar__following-image"/>
                            <span className="rightSidebar__following-name">
                            Donald Harrison
                        </span>
                        </div>
                        <div className="rightSidebar__following">
                            <img src={`${PF}/avatar-2.jpg`} alt="avatar" className="rightSidebar__following-image"/>
                            <span className="rightSidebar__following-name">
                            Donald Harrison
                        </span>
                        </div>
                        <div className="rightSidebar__following">
                            <img src={`${PF}/avatar-2.jpg`} alt="avatar" className="rightSidebar__following-image"/>
                            <span className="rightSidebar__following-name">
                            Donald Harrison
                        </span>
                        </div>
                        <div className="rightSidebar__following">
                            <img src={`${PF}/avatar-3.jpg`} alt="avatar" className="rightSidebar__following-image"/>
                            <span className="rightSidebar__following-name">
                            Anastasiya Kuchina
                        </span>
                        </div>

                    </div>
                </>
            )
        } else {
            return (
               <div>Loading</div>
            )
        }

    }


        return (
            <div className="rightSidebar">
                <div className="rightSidebar__wrapper">
                    { profile? <ProfileRightSidebar/> : <HomeRightSidebar/>}

                </div>

            </div>
        );

};

export default RightSidebar;