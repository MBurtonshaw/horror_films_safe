import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';

export default function Title( props ) {
    let { url }= useParams();
    let [ sizeClass, setSizeClass ] = useState('');
    let [ currentFilm, setCurrentFilm ] = useState('');

    //Sets the screen width to state which is used later in the Amazon Prime & YouTube icons' classLists
    function getScreenSize() {
        if (window.innerWidth < 500) {
            setSizeClass('lg_socials');
        } else if (window.innerWidth < 768) {
            setSizeClass('md_socials');
        } else if (window.innerWidth < 992) {
            setSizeClass('xs_socials');
        } else if (window.innerWidth < 1200) {
            setSizeClass('lg_socials');
        } else if (window.innerWidth < 1400) {
            setSizeClass('md_socials');
        } else {
            setSizeClass('sm_socials');
        }
    }

    //async function to match the corresponding film with the url
    async function dataLoader() {
        for (let i = 0; i < props.context.data.movies.movies.length; i++) {
            let newTypes = await props.context.data.movies.movies;
            if (newTypes[i].url === url) {
                let newType = newTypes[i];
                setCurrentFilm(newType);
            }
        }
    }

    //function to match the film's release year with the /decades path it corresponds to
    function decade_filler() {
        let variant;
        if (movie.year < 1970) {
            variant = '../decades/classics'
        }
        if (movie.year < 1980 && movie.year > 1969) {
            variant = '../decades/70s'
        }
        if (movie.year < 1990 && movie.year > 1979) {
            variant = '../decades/80s'
        }
        if (movie.year < 2000 && movie.year > 1989) {
            variant = '../decades/90s'
        }
        if (movie.year < 2010 && movie.year > 1999) {
            variant = '../decades/00s'
        }
        if (movie.year < 2020 && movie.year > 2009) {
            variant = '../decades/10s'
        }
        if (movie.year < 2030 && movie.year > 2019) {
            variant = '../decades/20s'
        }
        return(
            <a href={variant}>{movie.year}</a>
        );
    }

    useEffect( () => { getScreenSize() }, [ setSizeClass ] );
    useEffect( () => { dataLoader() } );

    let movie;
    let authors;
    let genres;
    let filmMakers;

    //function to create the accordion component
    function accordion_fill() {
        return(
            <div className="accordion col w-25">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Writer(s)
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            { authors }
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Director(s)
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            { filmMakers }                  
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Release Year
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            { decade_filler() }                   
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Genres
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            { genres }                 
                        </div>
                    </div>                     
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            Links
                        </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className='w-100'>
                                <div className='m-auto'>
                                    {link_fill_in()}
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    //function to handle the Amazon Prime & YouTube icons
    function link_fill_in() {
        if (movie.prime_link.length > 2 && movie.youtube_link.length > 2) {
            return(
                <div id ='movie_link_div' className='px-5'>
                    <a href={ movie.prime_link }>
                        <img className={`px-5 ${sizeClass}`} src='../../photos/prime_icon.jpg' alt='icon for a link to Amazon Prime Video'></img>
                    </a>
                    <a href={ movie.youtube_link }>
                        <img className={`px-5 ${sizeClass}`} src='../../photos/youtube_icon.jpg' alt='icon for a link to YouTube'></img>
                    </a>
                </div>
            );
        } else if (movie.prime_link.length > 2 && movie.youtube_link.length < 2) {
            return(
                <div id ='movie_link_div' className='px-5'>
                    <a href={ movie.prime_link }>
                        <img className={`px-5 ${sizeClass}`} src='../../photos/prime_icon.jpg' alt='icon for a link to Amazon Prime Video'></img>
                    </a>
                </div>
            );
        } else if (movie.prime_link.length < 2 && movie.youtube_link.length > 2) {
            return(
                <div id ='movie_link_div' className='px-5'>
                    <a href={ movie.youtube_link }>
                        <img className={`px-5 ${sizeClass}`} src='../../photos/youtube_icon.jpg' alt='icon for a link to YouTube'></img>
                    </a>
                </div>
            );
        }
    } 
    
    //matching film in state to film in url and returning the proper data
    if ( currentFilm.url === url ) {
        movie = currentFilm;
        authors = movie.writers.map( (artist, i) => <li key={ i }>{ artist }</li>);
        genres = movie.genres.map( (type, i) => <li key={ i }><a href={ `/genres/${type}` }>{ type }</a></li>);
        filmMakers = movie.directors.map(( person, i ) => <li key={ i }>{ person }</li>);

        //logic to handle different screen widths
        if (window.innerWidth < 992) {
            if (window.innerWidth < 576) {
                return(
                    <div id='title_div' className='container'>
                        <h1 className='mt-5 mb-2 p-3 center'><a href='/titles' className='nonChalant'>{ movie.title }</a></h1>
                        <div id='title_photo' className='container w-100'>
                            <a href='/titles'><img src={ movie.photo } alt={`Film art for ${movie.title}`} className='w-75'></img></a>
                        </div>
                        <div className='row align-items-start pt-3 pb-5'>
                            {accordion_fill()}
                        </div>
                    </div>
                );
            } else {
                return(
                    <div id='title_div' className='container'>
                        <h1 className='mt-5 mb-2 p-3 center'><a href='/titles' className='nonChalant'>{ movie.title }</a></h1>
                        <div id='title_photo' className='container w-100'>
                            <a href='/titles'><img src={ movie.photo }  alt={`Film art for ${movie.title}`} className='w-50'></img></a>
                        </div>
                        <div className='row align-items-start pt-3 pb-5'>
                            {accordion_fill()}
                        </div>
                    </div>
                );
            }
        } else {
            return(
                <div id='title_div' className='container'>
                    <h1 className='m-5 pt-4 center'><a href='/titles' className='nonChalant'>{ movie.title }</a></h1>
                    <div className='row align-items-start container'>
                        {accordion_fill()}
                        <div id='title_photo' className='container w-50'>
                            <a href='/titles'><img src={ movie.photo } alt={`Film art for ${movie.title}`} className='w-75 transparent'></img></a>
                        </div>
                    </div>
                </div>
            );
        }
    } else {
        return(
            <div className='background_box py-5 my-5 w-50 mx-auto'>
                <NotFound message={url}/>
            </div>
        );
    }
}
