import { React } from 'react';

export default function Header(props) {
    function login() {
        let logger = props.user;
        if (window.innerWidth > 767) {
            if (logger === '') {
                return(
                    <li className="nav-item header-nav">
                        <a className="nav-link" href="/login"> Login </a>
                    </li>
                );
            } else {
                return(
                    <li className="nav-item header-nav">
                        <a className="nav-link" href="/logout"> Logout </a>
                    </li>
                );
            }
        } else {
            if (logger === '') {
                return(
                    <li>
                        <button className="dropdown-item" type="button">
                            <a href='/login'>Login</a>
                        </button>
                    </li>
                );
            } else {
                return(
                    <li>
                        <button className="dropdown-item" type="button">
                            <a href='/logout'>Logout</a>
                        </button>
                    </li>
                );
            }
        }
    }
    //conditional statements will return data based on path
    if (window.innerWidth > 767) {
        if (window.location.pathname === '/') {
            return(
                <div id='Header' className='container d-none d-md-block'>
                    <ul className="nav nav-fill justify-content-center">
                        <li className="nav-item header-nav">
                            <a className="nav-link" href="/"> Home </a>
                        </li>
                        <li className="nav-item header-nav">
                            <a className="nav-link" href="/titles"> Titles </a>
                        </li>
                        <li className="nav-item header-nav">
                            <a className="nav-link" href="/genres"> Genres </a>
                        </li>
                        <li className="nav-item header-nav">
                            <a className="nav-link" href="/decades"> Decades </a>
                        </li>
                        {login()}
                    </ul>
                </div>
            );
        }
    } else {
        //////////////////////////////////////////MOBILE//////////////////////////////////////////////////////
        return(
            <div id='Header' className='container'>
                <div className="dropdown w-50 m-auto pt-3">
                    <button className="btn " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img id='menu_icon' className='w-25' alt='a menu icon, three horizontal bars' src='../../photos/menu_icon.png'></img>
                    </button>
                    <ul className="dropdown-menu text-center w-100 m-auto">
                        <li>
                            <button className="dropdown-item" type="button">
                                <a href='/'>Home</a>
                            </button>
                        </li>
                        <li>
                            <button className="dropdown-item" type="button">
                                <a href='/titles'>Titles</a>
                            </button>
                        </li>
                        <li>
                            <button className="dropdown-item" type="button">
                                <a href='/genres'>Genres</a>
                            </button>
                        </li>
                        <li>
                            <button className="dropdown-item" type="button">
                                <a href='/decades'>Decades</a>
                            </button>
                        </li>
                        {login()}
                    </ul>
                </div>
            </div>
        );
    }
}