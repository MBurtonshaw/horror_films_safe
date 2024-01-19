import { React } from 'react';

export default function NotFound(props) {
    return(
        <div id='not_found_div' className='container m-auto p-5 text-center'>
            <div className='p-5 m-auto'>
                <h1 className='p-4'>{props.message}</h1>
                <h1 className='p-2'>Not Found</h1>
            </div>
        </div>
    );
}