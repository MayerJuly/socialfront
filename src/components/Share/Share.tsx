import "./share.scss"
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {IPost} from "../../models/IPost";
import {addPost, fetchUser, uploadImage} from "../../services/ActionCreator";
import {ISendPostType} from "../../models/ISendPostType";


interface ChildProps {
    refresh: boolean;
    setRefresh: Dispatch<SetStateAction<boolean>>;
}

const Share = (profile:any) => {
    const dispatch = useAppDispatch();
    const [text, setText] = useState<string>('');
    const [file, setFile] = useState<Blob | MediaSource>();
    const [fileUrl, setFileUrl] = useState<string>('');
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const {authUser} = useAppSelector(state => state.authReducer)
    const {profileUser, user} = useAppSelector(state => state.userReducer)

    const data = new FormData();

    useEffect(() => {

            dispatch(fetchUser(authUser._id))


    }, [profile])


    const submit = () => {
        const newPost: ISendPostType = { userId: authUser._id, description: text, image: fileUrl};
        if (newPost.description === '' && newPost.image === '') {
            return;
        }
        dispatch(addPost(newPost));
        window.location.reload()
    };
    const handleOnChange = (e: any) => {
        e.preventDefault();
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0];
            setFile(file);
            const fileName = Date.now() + file.name;
            setFileUrl(fileName);
            data.append('name', fileName);
            data.append('file', file);
            dispatch(uploadImage(data));
        }
    };
    console.log(user)
    return (
        <div className="share">
            <div className="share__wrapper">
                <div className="share__top">
                    <img className="share__profile-img" src={`${PF}${user?.profilePicture}`} alt="avatar"/>
                    <input type="text" className="share-input" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Let's write something new..."/>
                </div>
                {file?
                    <div className="share-insert">
                        <img className="insert-image" src={URL.createObjectURL(file)} alt="file"/>
                    </div>
                    : ""
                }
                <hr className="share-hr"/>
                <div className="share__bottom">
                    <div className="share__options">
                        <label htmlFor="file" className="share__option">
                            <InsertPhotoIcon className="share-icon"/>
                            <span className="share__option-text">Add Photo</span>
                            <input type="file" id="file" accept=".png, .jpeg, .jpg" onChange={handleOnChange}/>
                        </label>


                    </div>
                    <button className="share-button" onClick={submit}>Share</button>

                </div>
            </div>

        </div>
    );
};

export default Share;