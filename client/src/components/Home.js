import { React, useState, useEffect } from 'react';
import Main from './Main';
import Sidebar from './Sidebar';
import Search from './Search';


export default function Home( props ) {

    let [ types, setTypes] = useState('');

    async function getData() {
        let genres = await props.context.data.movies.genres;
        let genreArray = [];
        for ( let i = 0; i < genres.length; i++ ) {
                if ( !genreArray.includes( genres[i].name ) ) {
                    genreArray.push( genres[i].name );
                    setTypes( genreArray );
                }
        }
    }

    useEffect( () => { getData() }, [ setTypes ] );

    function searchbar() {
        if (window.innerWidth > 767) {
            return(
                <div>
                    <Search movies={props.context.movies} genres={ types }/>
                    <h1 className='my-5'> Horror Films </h1>
                </div>
            );
        } else if (window.innerWidth < 768) {
            return(
                <div>
                    <h1 className='my-5 pt-md-5'> Horror Films </h1>
                    <Search movies={props.context.movies} genres={ types }/>
                </div>
            );
        }
    }
    return(
        <div id='home_div'>
            <Sidebar genres={ types }/> 
            <div id='Home' className='container'>
                {searchbar()}
                <Main />
            </div>
        </div>
    );
}