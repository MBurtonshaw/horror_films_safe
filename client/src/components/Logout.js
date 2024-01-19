import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {

    let [data, setData] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    function logoutUser(e) {
        e.preventDefault();
        props.context.actions.signOut();
        setData({
            email: '',
            password: ''
        });
        navigate(-1);
    }

    return(
        <div id='Logout' className='container my-5 py-5 background_box w-50 m-auto'>
            <h1 className='pb-5'>Logout</h1>
            <form action='/login' method='POST' onSubmit={logoutUser}>
                <div className='m-auto'>
                    <h1>Are you sure?</h1>
                    <button type='' onClick={logoutUser}>Logout</button>
                </div>
            </form>
            <div className='py-5'>
                <p className='w-100'>Go back to home page</p>
                <a href='/'>Back</a>
            </div>
        </div>
    );
}