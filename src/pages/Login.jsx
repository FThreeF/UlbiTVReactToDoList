import React, { useContext } from 'react'
import MyInput from '../components/UI/input/MyInput'
import MyButton from '../components/UI/button/MyButton'
import { AuthContext } from '../context'
import { useNavigate } from 'react-router-dom';

function Login() {

    const {isAuth, setIsAuth} = useContext(AuthContext);
    const navigate = useNavigate();

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        navigate('/posts')
        localStorage.setItem('auth', true);
    }

    return (
        <div>
            <h1>Страница для логина</h1>
            <form onSubmit={login}>
                <MyInput placeholder='Введите логин' />
                <MyInput type='password' placeholder='Введите логин' />
                <MyButton>Войти</MyButton>
            </form>
        </div>
    )
}

export default Login
