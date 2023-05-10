import "./register.scss"
import {Link, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {useState} from "react";
import {registerUser} from "../../services/ActionCreator";
import {validatePassword, validateMail, validateText, confirmPasswords} from "../../validate";

const Register = () => {
    const {error, isRegister} = useAppSelector(state => state.authReducer)
    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [surname, setSurname] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [validateError, setValidateError] = useState<string>('');





    const allInputsFilled = () => {
        return username.length !== 0 && email.length !==0
            && password.length !==0
            && confirmPassword.length !== 0
            && name.length !== 0
            && surname.length !== 0
    }

    const handleRegister = () => {
        if(validateText(username) && validateMail(email) && validatePassword(password) && confirmPasswords(password, confirmPassword) && allInputsFilled()) {
            dispatch(registerUser({username, email, name, surname, password}))
        } else {
            setValidateError('Please fill in the data correctly')
        }

    }

    if(isRegister) {
        navigate('/login')
    }


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
                    <div className="login__error">{validateError}</div>
                    <form className="login__form">
                        <input className={`login__input ${username.length===0? '' : validateText(username)? '' : 'error'}`} value={username} onChange={(e)=> {return setUsername(e.target.value)}} type="text" placeholder="Username"/>
                        <input className={`login__input ${email.length===0? '' : validateMail(email)? ' ' : 'error'}`} type="text" value={email} onChange={(e)=> {return setEmail(e.target.value)}} placeholder="Email"/>
                        <input className={`login__input ${name.length===0? '' : validateText(name)? ' ' : 'error'}`} type="text" value={name} onChange={(e)=> {return setName(e.target.value)}} placeholder="Name"/>
                        <input className={`login__input ${surname.length===0? '' : validateText(surname)? ' ' : 'error'}`} type="text" value={surname} onChange={(e)=> {return setSurname(e.target.value)}} placeholder="Surname"/>
                        <input className={`login__input ${password.length===0? '' : validatePassword(password) ? '' : 'error'}`} value={password} onChange={(e)=> {return setPassword(e.target.value)}} type="password" placeholder="Password"/>
                        <input className={`login__input ${confirmPassword.length===0? '' : confirmPasswords(password, confirmPassword)? '' : 'error'}`} value={confirmPassword} onChange={(e)=> {return setConfirmPassword(e.target.value)}} type="password" placeholder="Confirm password"/>
                        <button onClick={(e) => {e.preventDefault(); handleRegister()}} className="login__button">
                            Sign up
                        </button>
                        <div className="login__form-description">
                            Have an account?
                        </div>
                        <Link to="/login" className='register__button'>
                            <button className="login__button register">
                                Login to your account
                            </button>
                        </Link>

                    </form>


                </div>
            </div>

        </div>
    );
};

export default Register;