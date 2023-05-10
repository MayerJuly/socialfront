import "./friendlist.scss"

const FriendList = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div className="friendList">
            <div className="friendList__wrapper">
                <div className="friendList__friend">
                    <img src={`${PF}avatar-2.jpg`} className="friendList__friend-image"/>
                    <div className="friendList__friend-name">
                        Julian Mayer
                    </div>
                    <button className="friendList__button remove">Удалить из друзей</button>
                </div>
                <div className="friendList__friend">
                    <img src={`${PF}avatar-3.jpg`} className="friendList__friend-image"/>
                    <div className="friendList__friend-name">
                        Anastasya Kauchuk
                    </div>
                    <button className="friendList__button remove">Удалить из друзей</button>
                </div>
                <div className="friendList__friend">
                    <img src={`${PF}avatar-2.jpg`} className="friendList__friend-image"/>
                    <div className="friendList__friend-name">
                        Sergey Gorohov
                    </div>
                    <button className="friendList__button remove">Удалить из друзей</button>
                </div>
                <div className="friendList__friend">
                    <img src={`${PF}avatar-2.jpg`} className="friendList__friend-image"/>
                    <div className="friendList__friend-name">
                        Julian Mayer
                    </div>
                    <button className="friendList__button remove">Удалить из друзей</button>
                </div>
            </div>


        </div>
    );
};

export default FriendList;