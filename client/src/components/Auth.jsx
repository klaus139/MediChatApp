import React, {useState} from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import signinImage from '../assets/signup3.webp';

const cookies = new Cookies();

const initialState = {
    fullName:'',
    userName:'',
    password:'',
    confirmPassword:'',
    phoneNumber:'',
    avatarURL:'',
}

const Auth = () => {
    const [form, setForm] = useState(initialState);
    const [isSignup, setIsSignup] = useState(true)

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        const { fullName, userName, password, phoneNumber, avatarURL} = form;

        const URL = 'http://localhost:5000/auth'

        const { data: {token, userId, hashedPassword} } = 
        await axios.post(`${URL}/${isSignup ? 'signup' : 'login'}`,{
            userName, password, fullName, phoneNumber, avatarURL,
        })
        cookies.set('token', token);
        cookies.set('userName', userName);
        cookies.set('fullName', fullName);
        cookies.set('userId', userId);

        if(isSignup){
            cookies.set('phoneNumber', phoneNumber);
            cookies.set('avatarURL', avatarURL);
            cookies.set('hashedPassword', hashedPassword);
        }

        window.location.reload();
    };

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
    }

    return (
        <div className='auth__form-container'>
            <div className='auth__form-container_fields'>
                <div className='auth__form-container_fields-content'>
                    <p>{isSignup ? 'Sign Up' : 'Sign In'}</p>
                    <form onSubmit={handleSubmit}>
                        {isSignup && (
                            <div className='auth__form-container_fields-content_input'>
                                <label htmlFor='fullName'> Full Name</label>
                                <input
                                    name='fullName'
                                    type='text'
                                    placeholder='Full Name'
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        <div className='auth__form-container_fields-content_input'>
                                <label htmlFor='userName'> UserName</label>
                                <input
                                    name='userName'
                                    type='text'
                                    placeholder='UserName'
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            {isSignup && (
                            <div className='auth__form-container_fields-content_input'>
                                <label htmlFor='fullName'> Phone Number</label>
                                <input
                                    name='phoneNumber'
                                    type='text'
                                    placeholder='Phone Number'
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        {isSignup && (
                            <div className='auth__form-container_fields-content_input'>
                                <label htmlFor='avatarUrl'> Avatar url</label>
                                <input
                                    name='avatarUrl'
                                    type='text'
                                    placeholder='Avatar URL'
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        <div className='auth__form-container_fields-content_input'>
                                <label htmlFor='password'>Password</label>
                                <input
                                    name='password'
                                    type='password'
                                    placeholder='password'
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        {isSignup && (
                            <div className='auth__form-container_fields-content_input'>
                                <label htmlFor='confirmPassword'>Confirm Password</label>
                                <input
                                    name='ConfirmPassword'
                                    type='password'
                                    placeholder='Confirm Password'
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        <div className='auth__form-container_fields-content_button'>
                            <button>{isSignup ? "Sign up" : "sign In"} </button>
                        </div>
                    </form>
                    <div className="auth__form-container_fields-account">
                        <p>
                            {isSignup 
                            ? "Already have an account ?"
                            : "Don't have an account?"
                            }
                            <span onClick={switchMode}>
                                {isSignup ? "Sign in" : "Sign Up"}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className='auth__form-container_image'>
                <img src={signinImage} alt="sign in" />

            </div>
        </div>
    )
}

export default Auth