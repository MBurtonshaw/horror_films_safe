import { React } from 'react';

export default function List(props) {
    return(
        <div id='List' className='container p-5 mt-5 background_box'>
            <h1> My List </h1>
            
            <ul className='p-0 pt-3'>
                { props.context.data.movies.movies.map(
                    (item, i) => 
                        <li key={i} className='p-2' >
                            <a href={`/titles/${item.url}`}> { item.title } </a>
                        </li>
                )}
            </ul>
        </div>
    );
}