import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';

export default function Decades(props) {
    let { url } = useParams();
    let [ movies, setMovies ] = useState('');

    //function to gather data from movies.json
    //sets category and sorts films based on url and film year
    async function getData() {
        try {
            let pictures = [];
            let films = await props.context.data.movies.movies;

            for (let i = 0; i < films.length; i++) {
              
                if (url === 'classics' && films[i].year < 1970) {
                    pictures.push(films[i]);
                }
                if (url === '70s' && films[i].year > 1969 && films[i].year < 1980) {
                    pictures.push(films[i]);
                }
                if (url === '80s' && films[i].year > 1979 && films[i].year < 1990) {
                    pictures.push(films[i]);
                }
                if ( url === '90s' && films[i].year > 1989 && films[i].year < 2000) {
                    pictures.push(films[i]);
                }
                if ( url === '00s' && films[i].year > 1999 && films[i].year < 2010) {
                    pictures.push(films[i]);
                }
                if ( url === '10s' && films[i].year > 2009 && films[i].year < 2020) {
                    pictures.push(films[i]);
                }
                if ( url === '20s' && films[i].year > 2019 && films[i].year < 2030) {
                    pictures.push(films[i]);
                }
                pictures = props.context.actions.removeDuplicates(pictures);
                console.log(props)
                setMovies(pictures);
                
                }
        } catch(err) {
            console.log(err.message)
        }
    }
///////////////////////////////////////////////////////////////////////
    useEffect( () => { getData() } );
///////////////////////////////////////////////////////////////////////

    //function to map the movies corresponding to the correct decade, to list items
    let fill_array = [];

    function fill_in() {
        for ( let f = 0; f < movies.length; f++ ) {
            fill_array.push( movies[f] );
        }
            //
        return(
            <div className='container pb-4 mb-4 w-75'>
                <ul className="list-group list-group-flush">
                {fill_array.map( ( film, i ) => {
                    if (i > 12) {
                        return(
                            <li className='list-group-item pt-3 mb-3 flashcard' key={ i }><a href={`/titles/${ film.url }`}>{ film.title }</a></li>
                        );
                    } else {
                        return(
                            <li className='list-group-item pt-3 mb-3' key={ i }><a href={`/titles/${ film.url }`}>{ film.title }</a></li>
                        );
                    }
                        
                })}
                </ul>
            </div>
            )
    }

    //determines the decade category and sets header
    function namer() {
        if (url === 'classics') {
            return('Decade: Classics');
        } else if (
                url === '70s' ||
                url === '80s' ||
                url === '90s' ||
                url === '00s' ||
                url === '10s' ||
                url === '20s' 
            ) {
            return(`Decade: ${url}`);
        } else {
            return(
                <div>
                    <NotFound message={url}/>
                </div>
            );
        }
    }

    //combines previous two functions and returns formatting based on screen size
    if (window.innerWidth < 768) { 
        return(      
            <div id='DecadePage' className='container p-1 m-auto my-5 pb-2 background_box'>
                <h1 className='my-4 mx-1'>
                    { namer() }
                </h1>
                    { fill_in() }
            </div>
        );
    } 
    return(      
        <div id='DecadePage' className='container p-1 m-auto mt-5 w-50 background_box'>
            <h1 className='m-5'>
                { namer() }
            </h1> 
                { fill_in() }
        </div>
    );
    //
}