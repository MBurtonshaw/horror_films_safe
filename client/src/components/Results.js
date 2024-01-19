import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';

export default function Results(props) {

   let [ term, setTerm ] = useState('');
   let [ movies, setMovies ] = useState('');
   let movieArray = [];
   let { url } = useParams();

   //function to set a term from url to state then sort movies based on that term
   async function getData() {
        setTerm(window.location.pathname.slice(9));
        movieArray = await props.context.data.movies.movies;

            for (let i = 0; i < movieArray.length; i++) {
                let newType = term.toLowerCase();
                let newArray = [];
                movieArray.forEach((film) => {
                    if (film.url.includes(newType)) {
                        newArray.push(film);
                    }
                    setMovies(newArray);
                });
            }
   }

   useEffect( () => { getData() } );

   function body_fill() {
        return(
            <ul className="list-group list-group-flush">
                {
                    //mapping movies from state
                    movies.map((film, i)=>{
                        //adding the flashcard animation class to later entries on the list
                        if (i > 10) {
                            return(
                                <li key={i} className='list-group-item pt-3 mb-3 flashcard'><a href={`/titles/${film.url}`}>{film.title}</a></li>
                            );
                        } else {
                            return(
                                <li key={i} className='list-group-item pt-3 mb-3'><a href={`/titles/${film.url}`}>{film.title}</a></li>
                            );
                        }
                    })
                }
            </ul>
        );
    }

    if (movies.length < 1) {
        return(
            <div className='container p-1 my-5 w-50 mx-auto background_box'>
                <NotFound message={url}/>
            </div>
        ); 
    } else {
        for (let m = 0; m < movies.length; m++) {
            if (window.innerWidth < 768) {
                return(
                    <div id='ResultsPage' className='container p-1 m-auto my-5 pb-2 background_box'>
                        <h1 className='m-5'>
                            {props.context.actions.capitalizeFirstLetter(term.toLowerCase())}
                        </h1>
                        <div className='container pb-4 mb-4 w-75'>
                            {body_fill()}
                        </div>
                    </div>
                );
            } else {
                return(
                    <div id='ResultsPage' className='container p-1 m-auto mt-5 w-50 background_box'>
                        <h1 className='m-5'>
                            {props.context.actions.capitalizeFirstLetter(term.toLowerCase())}
                        </h1>
                        <div className='container pb-4 mb-4 w-75'>
                            {body_fill()}
                        </div>
                    </div>
                );
            }
        }
    }
    
}