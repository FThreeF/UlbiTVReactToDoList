import React, {useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import MyButton from '../button/MyButton';
import {AuthContext} from '../../../context';

function Navbar() {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = () => {
    setIsAuth(false);
    navigate('/login');
    localStorage.removeItem('auth');
  }
  return (
    <div className='navbar'>
      <MyButton onClick={logout}>Выйти</MyButton>
      <div className='navbar__links'>
        <Link to='/about'>О сайте</Link>
        <Link to='/posts'>Посты</Link>
      </div>
    </div>
  );
}

export default Navbar;
