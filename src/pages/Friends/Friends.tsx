import "./friends.scss"
import TopSideBar from "../../components/TopSideBar/TopSideBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import FriendList from "../../components/FriendList/FriendList";

const Friends = () => {
    return (
        <div>

            <TopSideBar/>

            <div className="homeWrapper">
                <Sidebar/>
                <FriendList/>
                <RightSidebar/>
            </div>

        </div>
    );
};

export default Friends;