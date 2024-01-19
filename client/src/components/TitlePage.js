import { React } from 'react';

export default function TitlePage(props) {

    if (props.context.data.movies.movies.length < 1) {
        return null;
    } else {
        
        for ( let i = 0; i < props.context.data.movies.movies.length; i++ ) {
            
            if (window.innerWidth < 768) {
                return(
                    <div id='TitlePage' className='container p-1 m-auto pb-2 my-5 w-100 background_box'>
                        <h1 className='m-5'>
                            Titles
                        </h1>
                        <div className='container'>
                            <ul className="list-group list-group-flush">
                                { 
                                    props.context.data.movies.movies.map(( movie, i ) => {
                                        if (movie.id < 7) {
                                            return(
                                                <li key={ i } className='list-group-item pt-3 mb-3'>
                                                    <a href={ `/titles/${movie.url}` }>
                                                        { movie.title }
                                                    </a>
                                                </li>
                                            );
                                        } else {
                                            return(
                                                <li key={ i } className='list-group-item pt-3 mb-3 flashcard'>
                                                    <a href={ `/titles/${movie.url}` }>
                                                        { movie.title }
                                                    </a>
                                                </li>
                                            );
                                        }
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                );
            } else {
                return(
                    <div id='TitlePage' className='container p-1 m-auto pb-2 my-5 w-50 background_box'>
                        <h1 className='m-5'>
                            Titles
                        </h1>
                        <div className='container w-75'>
                            <ul className="list-group list-group-flush">
                                { 
                                    props.context.data.movies.movies.map(( movie, i ) => {
                                        if (movie.id < 12) {
                                            return(
                                                <li key={ i } className='list-group-item pt-3 mb-3'>
                                                    <a href={ `/titles/${movie.url}` }>
                                                        { movie.title }
                                                    </a>
                                                </li>
                                            );
                                        } else {
                                            return(
                                                <li key={ i } className='list-group-item pt-3 mb-3 flashcard'>
                                                    <a href={ `/titles/${movie.url}` }>
                                                        { movie.title }
                                                    </a>
                                                </li>
                                            );
                                        }
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                );
            }
        }
    }
}