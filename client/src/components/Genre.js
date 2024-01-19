import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';

export default function Genres(props) {
    let { url } = useParams();
    let [ movies, setMovies ] = useState('');


    //function to gather data from movies.json
    //sets category and sorts films based on url and film year
    async function getData() {
        try {
            let pictures = [];
            let films = await props.context.data.movies.movies;

            for (let i = 0; i < films.length; i++) {
              for (let j = 0; j < films[i].genres.length; j++) {
                if (films[i].genres.includes(url)) {
                    pictures.push(films[i]);
                    setMovies(props.context.actions.removeDuplicates(pictures));
                }
              }
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

    //function to loop thru state & map films corresponding to the decade
    function fill_in() {
        for ( let f = 0; f < movies.length; f++ ) {
            fill_array.push( movies[f] );
        }
            //
        return(
            fill_array.map( ( film, i ) => {
                if (i > 12) {
                    return(
                        <li className='list-group-item pt-3 mb-3 flashcard' key={ i }><a href={`/titles/${ film.url }`}>{ film.title }</a></li>
                    );
                } 
                return(
                    <li className='list-group-item pt-3 mb-3' key={ i }><a href={`/titles/${ film.url }`}>{ film.title }</a></li>
                );
            })
        );
    }

    //determines the decade category and sets header
    function namer() {
        if (
                url === 'Eerie' ||
                url === 'Suburban' ||
                url === 'Slasher' ||
                url === 'Indie' ||
                url === 'Short' ||
                url === 'Surreal' ||
                url === 'Creature' ||
                url === 'Body' ||
                url === 'Gore' ||
                url === 'Invasion' ||
                url === 'Rural' ||
                url === 'Occult' ||
                url === 'Cosmic' ||
                url === 'Campy' ||
                url === 'Period' ||
                url === 'Classic' ||
                url === 'Analog' ||
                url === 'Anthology' 
            ) {
            return(`Genre: ${url}`);
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
            <div id='Genre' className='container p-1 m-auto my-5 pb-2 background_box'>
                <h1 className='my-4 mx-1'>
                    { namer() }
                </h1>
                <div className='container p-1 pb-4 mb-4 w-75'>
                    <ul className="list-group list-group-flush">
                        { fill_in() }
                    </ul>
                </div>
            </div>
        );
    } 
    
    return(      
        <div id='Genre' className='container p-1 m-auto mt-5 w-50 background_box'>
            <h1 className='m-5'>
                { namer() }
            </h1>
            <div className='container pb-4 mb-4 w-75'>
                <ul className="list-group list-group-flush">
                    { fill_in() }
                </ul>
            </div>
        </div>
    );
    //
}