import "./profile.scss"
import TopSideBar from "../../components/TopSideBar/TopSideBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import EditNoteIcon from '@mui/icons-material/EditNote';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchUser, fetchUserByUsername, updateUser} from "../../services/ActionCreator";
import {useEffect, useState} from "react";
import {validateText, validateAge, validateTextAll} from "../../validate";
import {IUpdateUser} from "../../models/IUpdateUser";
import {useNavigate, useParams} from "react-router-dom";

const Profile = () => {

    const [isModal, setIsModal] = useState(false);


    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [description, setDescription] = useState('')
    const [age, setAge] = useState('')
    const [city, setCity] = useState('')
    const [university, setUniversity] = useState('')
    const [password, setPassword] = useState('')
    const PF = process.env.REACT_APP_PUBLIC_FOLDER



    const {profileUser, error} = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()

    const {id} = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        if(id)
            dispatch(fetchUserByUsername(id))
    },[id])

    if(error) {
        navigate('/home')

    }

    const handleUpdate = () => {

        const updateData:IUpdateUser = createUpdateData({name, surname, description, city, age, university, password});


        if(validateTextAll(updateData, 4, 20)) {
            dispatch(updateUser(updateData))
            setIsModal(false)
        }

    }

    const createUpdateData = ({...props}) => {
            const data = {...props}
            let result:any = {};
            Object.keys(data).forEach((key) => { if (data[key].length !== 0) result[key] = data[key]; })
            return result;

    }


    if(profileUser){
        return (
            <>
                <TopSideBar/>

                <div className="profile">
                    <Sidebar/>
                    <div className="profile__right">
                        <div className="profile__right-top">
                            <div className="profile__cover">
                                <img className="profile__coverImage" src={`${PF}${profileUser.coverPicture}`} alt="background"/>
                                <img className="profile__userImage" src={`${PF}${profileUser.profilePicture}`} alt="avatar"/>
                            </div>
                            <div className="profile__info">
                                <h4 className="profile__info-name" >
                                    {profileUser.name} {profileUser.surname}
                                    <EditNoteIcon className="profile__settings-icon" onClick={() => setIsModal(true)}/>
                                </h4>
                                <span className="profile__info-description">
                                {profileUser.description}
                                </span>
                            </div>

                        </div>
                        <div className="profile__right-bottom">
                            <Feed id={profileUser._id} profile/>
                            <RightSidebar user={profileUser} profile/>
                        </div>
                    </div>
                    {isModal?
                        <div className="profile__popup-overlay" onClick={() => setIsModal(false)}>
                            <div className="profile__popup" onClick={(e) => e.stopPropagation()}>
                                <div className="profile__popup-container">
                                    <h2 className="profile__popup-title">User information</h2>
                                    <div className="profile__popup-item">
                                        <h4 className="profile__popup-key">Name</h4>
                                        <input type="text" className={`profile__popup-input ${name.length===0? '' : validateText(name)? '' : 'error'}`} value={name} onChange={(e)=> {return setName(e.target.value)}}/>
                                    </div>
                                    <div className="profile__popup-item">
                                        <h4 className="profile__popup-key">Surname</h4>
                                        <input type="text" className={`profile__popup-input ${surname.length===0? '' : validateText(surname)? '' : 'error'}`} value={surname} onChange={(e)=> {return setSurname(e.target.value)}}/>

                                    </div>
                                    <div className="profile__popup-item">
                                        <h4 className="profile__popup-key">Description</h4>
                                        <input type="text" className="profile__popup-input" value={description} onChange={(e)=> {return setDescription(e.target.value)}}/>

                                    </div>
                                    <div className="profile__popup-item">
                                        <h4 className="profile__popup-key">City</h4>
                                        <input type="text" className="profile__popup-input" value={city} onChange={(e)=> {return setCity(e.target.value)}}/>
                                    </div>
                                    <div className="profile__popup-item">
                                        <h4 className="profile__popup-key">Age</h4>
                                        <input type="text" className={`profile__popup-input ${age.length===0? '' : validateAge(age)? '' : 'error'}`} value={age} onChange={(e)=> {return setAge(e.target.value)}}/>

                                    </div>
                                    <div className="profile__popup-item">
                                        <h4 className="profile__popup-key">University</h4>
                                        <input type="text" className="profile__popup-input" value={university} onChange={(e)=> {return setUniversity(e.target.value)}}/>

                                    </div>
                                    <div className="profile__popup-item">
                                        <h4 className="profile__popup-key">Password</h4>
                                        <input type="text" className={`profile__popup-input ${password.length===0? '' : validateText(password)? '' : 'error'}`} value={password} onChange={(e)=> {return setPassword(e.target.value)}}/>
                                    </div>
                                    <button className="profile__popup-saveButton" onClick={() => handleUpdate()}>
                                        Save
                                    </button>

                                </div>
                                <div className="profile__popup-close" onClick={() => setIsModal(false)}>&times;</div>
                            </div>
                        </div> : ''}

                </div>
            </>
        );
    } else {
        return (
            <div>
                Loading
            </div>
        );
    }

};

export default Profile;