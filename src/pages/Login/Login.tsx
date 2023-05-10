import "./login.scss"
import {useEffect, useState} from "react";
import AuthService from "../../services/AuthService";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchUser, loginUser} from "../../services/ActionCreator";
import {Link} from "react-router-dom";

const Login = () => {



    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const {error,isRegister} = useAppSelector(state => state.authReducer)
    const dispatch = useAppDispatch()




    return (
        <div className="login">
            <div className="login__wrapper">
                <div className="login__left">
                        <h3 className="login__logo">
                            <span>bee</span>Social
                        </h3>
                        <span className="login__description">
                        Become the most friendly bee
                    </span>
                    <img src="assets/login.png" alt="login bee" className="login__left-img"/>
                </div>
                <div className="login__right">
                    {isRegister?  <div className="register__access">Your account have been registered!</div> : ''}
                    <div className="login__error">{error}</div>
                    <form action='#' className="login__form">
                        <input className="login__input"
                               value={email}
                               onChange={e=>setEmail(e.target.value)}
                               type="text"
                               placeholder="Email"
                        />
                        <input className="login__input"
                               value={password}
                               onChange={e=>setPassword(e.target.value)}
                               type="password"
                               placeholder="Password"/>
                        <button onClick={(e) =>{e.preventDefault(); return dispatch(loginUser({email,password}))}} className="login__button">
                            Login
                        </button>
                        <div className="login__form-description">
                            Doesn't have account?
                        </div>
                        <Link to="/register" className='register__button'>
                            <button className="login__button register">
                                Create new account
                            </button>
                        </Link>

                    </form>


                </div>
            </div>

        </div>
    );
};

export default Login;