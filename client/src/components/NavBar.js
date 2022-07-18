import React, { useContext } from 'react';
import { Context } from '..';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { Link } from 'react-router-dom';
import {observer} from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

const NavBar = observer(() => {
    const {user} = useContext(Context);
    const navigate = useNavigate();

    const logOut = () => {
      user.setUser({});
      user.setIsAuth(false);
      localStorage.removeItem('token')
    }

    return (
        <Navbar bg="light" variant="light">
        <Container>
            <NavLink style={{color: 'grey', textDecoration: 'none'}} to={SHOP_ROUTE}>BuyYourDevice</NavLink>
          {user.isAuth ? 
                <Nav className="ml-auto">
                    <Button variant={'outline-light'} onClick={() => logOut()}
                    style={{color: 'grey', textDecoration: 'none', marginLeft: 25}} 
                    >Выйти</Button>
                    <Button variant={'outline-light'} onClick={() => navigate(ADMIN_ROUTE)}
                    style={{color: 'grey', textDecoration: 'none', marginLeft: 25}} 
                    >Админ Панель</Button>
                </Nav> :
                <Nav className="ml-auto">
                    <Button variant={'outline-light'} style={{color: 'grey', textDecoration: 'none', marginLeft: 25}} 
                    to={LOGIN_ROUTE} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                </Nav>  
        }
        </Container>
      </Navbar>
    );
});

export default NavBar;