import { React } from 'react';

export default function Sidebar(props) {

    if ( props.genres.length < 1 ) {
        return null;
    } else {
        return(
            <div id='Sidebar' className='d-none d-xl-block sticky-top'>
                <ul className="nav flex-column float-lg-start list-group list-group-flush text-start">
                    { 
                        props.genres.map(( genre, i ) => {
                            if (i !== 3 && i !== 4 && i !== 15) {
                                //
                                return(
                                    <li key={ i } className="list-group-item mb-3">
                                        <a href={`/genres/${ genre }`} title={`${ genre }`}>
                                            { genre }
                                        </a>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        );
    }
}
