import { React, useState } from 'react';

export default function Search(props) {
    const [ search, setSearch ] = useState('');

    let titleArray = [];
    const searcher = document.getElementById('searchBar');

    //function to append a message when the searchbar is focused upon/////////////////////////////////////
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
    const appendAlert = (message, type) => {

    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div class='thinner'>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('');
    if (alertPlaceholder.childElementCount === 0) {
        alertPlaceholder.append(wrapper);
    }
}
    const alertTrigger = document.getElementById('searchBar');
    if (alertTrigger) {
        alertTrigger.addEventListener('click', () => {
            appendAlert(
                `Please replace any spaces in your search term with an underscore ( _ )`, 'dark')
        })
    }  //////////////////////////////////////////////////////////////////////////////////////////////////////

    //sorting movies by title
    async function loader() {
        let waiter = await props.movies;
        if (waiter === undefined) {
            return null;
        } else {
            try {
                for ( let i = 0; i < waiter.length; i++ ) {
                    titleArray.push( waiter[i] );
                }
            } catch(err) {
                console.log(err.message);
            }
        }
    }

    //logging search value and setting to uppercase
    function logger( e ) {
        setSearch( searcher.value.toUpperCase() );
    }

    //function to change url based on search term from state
    async function clicker( e ) {
        try {
            window.location.href = `/results/${search}`;
        } catch(err) {
            console.log(err.message);
        }
    }

    loader();
    
    //
    return(
        <div id='Search' className='container pt-md-3'>
            <input id='searchBar' name='searchInput' type='text' onBlur={( e ) => logger( e )}></input>
            <button id='searchButton' htmlFor='searchInput' onClick={( e ) => clicker( e )}> Find </button>
            <div id="liveAlertPlaceholder"></div>
        </div>
    );
}