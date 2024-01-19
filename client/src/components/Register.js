import { React, useState } from 'react';

export default function Register() {
    let [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    })

    function registerUser(e) {
        e.preventDefault();
    }

    return(
        <div id='Login' className='container my-5 py-5 background_box w-50 m-auto'>
            <h1 className='pb-5'>Register</h1>
            <form action='/login' method='POST' onSubmit={registerUser}>
                <div className='m-auto'>
                    <div className='p-2'>
                        <label htmlFor='name' className='w-100'>Name</label>
                        <input type='text' id='name' name='name' value={data.name} onChange={(e) => setData({...data, name: e.target.value})}></input>
                    </div>
                    <div className='p-2'>
                        <label htmlFor='email' className='w-100'>Email</label>
                        <input type='email' id='email' name='email' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}></input>
                    </div>
                    <div className='p-2'>
                        <label htmlFor='password' className='w-100'>Password</label>
                        <input type='password' id='password' name='password' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}></input>
                    </div>
                    <button type='submit'>Register</button>
                </div>
            </form>
            <div className='py-5'>
                <p className='w-100'>Already have an account?</p>
                <a href='/login'>Login</a>
            </div>
        </div>
        ////////////////////////////////
       
    );
}