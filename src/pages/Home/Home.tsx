import "./home.scss"
import Sidebar from "../../components/Sidebar/Sidebar";
import TopSideBar from "../../components/TopSideBar/TopSideBar";
import Feed from "../../components/Feed/Feed";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import {useAppSelector} from "../../hooks/redux";

const Home = () => {
    return (

        <div>

            <TopSideBar/>

            <div className="homeWrapper">
                <Sidebar/>
                <Feed/>
                <RightSidebar/>
            </div>




        </div>
    );
};

export default Home;