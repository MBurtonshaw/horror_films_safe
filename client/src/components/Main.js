import { React } from 'react';

export default function Main() {

    let first;
    let first_memo;
    let second;
    let second_memo;
    let third;
    let third_memo;
    let fourth;
    let fourth_memo;
    let fifth;
    let fifth_memo;
    let sixth;
    let sixth_memo;
    let season;

    const setter = new Date();
    const month = setter.getMonth() + 1;
    
    if ( month === 9 || month === 10 || month === 11 ) { 
    
        first = 'halloween';
        first_memo = 'An escaped mental patient stalks high school girls on Halloween night.';
        second = 'ginger_snaps';
        second_memo = 'Two sisters suddenly have to learn to deal with some physical changes.';
        third = 'curse_of_frankenstein';
        third_memo = 'A scientist devotes his studies to raising the dead, regardless of consequences.';
        fourth = 'it_follows';
        fourth_memo = 'A woman is cursed to be followed by an entity until her death.';
        fifth = 'the_vvitch';
        fifth_memo = 'In Colonial America, a baby is stolen from an outcast family and taken to the woods.';
        sixth = 're_animator';
        sixth_memo = 'Herbert West has concocted a formula to bring the recently dead back to life.';
        season = 'Autumn';
    }

    if ( month === 12 || month === 1 || month === 2 ) {   
    
        first = 'black_christmas';
        first_memo = 'It\'s Christmas, and people are celebrating; but a sorority house is receiving disturbing phone calls.';
        second = 'ravenous';
        second_memo = 'Following the Mexican-American War, a military regiment takes in a stranger on a snowy night.';
        third = 'gremlins';
        third_memo = 'A father buys his son a rare pet as a Christmas present from a mysterious shop in Chinatown.';
        fourth = 'the_thing';
        fourth_memo = 'Somewhere in Antarctica, American researchers rescue a dog and take it back to camp.';
        fifth = 'pontypool';
        fifth_memo = 'A local Canadian radio host finds himself reporting on strange stories during a snowstorm.';
        sixth = 'hell_house_llc';
        sixth_memo = 'A group of people record their life in an abandoned hotel while converting it into a haunted house attraction.';
        season = 'Winter';
    }
    
    if ( month === 3 || month === 4 || month === 5 ) {  
    
        first = 'the_mist';
        first_memo = 'Something\'s in the mist that\'s descended upon a small town in Maine.';
        second = 'evil_dead';
        second_memo = 'In a cabin in the woods, someone reads from an ancient book and causes the Deadites to rise.';
        third = 'the_lighthouse';
        third_memo = 'Things become strange between two lighthouse keepers while alone on an island.';
        fourth = 'hereditary';
        fourth_memo = 'A grandmother\'s death causes problems to surface in her daughter\'s family.';
        fifth = 'Pearl';
        fifth_memo = 'A woman yearns for fame while working on a farm, waiting for her husband to return from war.';
        sixth = 'black_phone';
        sixth_memo = 'Boys around town are being kidnapped by a man with a black van.';
        season = 'Spring';
    }

    if ( month === 6 || month === 7 || month === 8 ) {  
    
        first = 'the_sitter';
        first_memo = 'A teenage babysitter receives disturbing phone calls while watching some children.';
        second = 'dusk_till_dawn';
        second_memo = 'Two criminal brothers take a family hostage in order to find safety over the Mexican border.';
        third = 'pumpkinhead';
        third_memo = 'A man calls on a vengeful creature to punish those that wronged him.';
        fourth = 'scream';
        fourth_memo = 'High school students are being murdered by a killer who loves horror movies.';
        fifth = 'planet_terror';
        fifth_memo = 'A group of people band together as a virus causes everyone else to mutate and attack.';
        sixth = 'texas_chainsaw_massacre';
        sixth_memo = 'Local graves are being desecrated, and a van full of people has just stumbled onto the wrong property.';
        season = 'Summer';
    }

    //function to fill out cards with the flashcard class on smaller screens
    //number parameter is to be entered as 'first' 'second' 'third' 'fourth', etc.
    function card_filler_mobile(number, number_memo) {
        return(
            <div className='py-3 flashcard'>
                <div className='container background_box p-5 mb-5'>
                    <a href={`/titles/${ number }`}>
                        <img id={ number } className='smaller_img py-3' src={ `../../photos/titles/${ number }.jpg` } alt={`a movie poster for ${number}`} />
                    </a>
                    <p className='main_text py-3 m-0'>{`${number_memo}`}</p>
                </div>
            </div>
        );
    }

    //function to fill out cards with the flashcard class and the picture on the right side
    //number parameter is to be entered as 'first' 'second' 'third' 'fourth', etc.
    function card_filler_1(number, number_memo) {
        return(
            <div className='py-3'>
                <div className='container row align-items-start background_box p-5 mb-5 flashcard'>
                    <a href={`/titles/${ number }`} className='col'>
                        <img id={ number } className='smaller_img py-1' src={ `../../photos/titles/${ number }.jpg` } alt={`a movie poster for ${ number }`} />
                    </a>
                    <p className='col m-auto main_text'>{number_memo}</p>
                </div>
            </div>
        );
    }
    //function to fill out cards with the flashcard class and the picture on the left side
    //number parameter is to be entered as 'first' 'second' 'third' 'fourth', etc.
    function card_filler_2(number, number_memo) {
        return(
            <div className='py-3'>
                <div className='container row align-items-start background_box p-5 mb-5 flashcard'>
                <p className='col m-auto main_text'>{number_memo}</p>
                    <a href={`/titles/${ number }`} className='col'>
                        <img id={ number } className='smaller_img py-1' src={ `../../photos/titles/${ number }.jpg` } alt={`a movie poster for ${ number }`} />
                    </a>
                </div>
            </div>
        );
    }

    if (window.innerWidth < 768) {
        return(
            <div id='Main'>
                <div className='container d-block'>
                    <h2 className='m-2 pt-5'> { season } Recommendations </h2>

                    {/* the first card doesn't use the card_filler function because it is supposed to be visible on pageload */}
                    <div className='py-3'>
                        <div className='container background_box p-5 mb-5'>
                            <a href={`/titles/${ first }`}>
                                <img id={ first } className='smaller_img py-3' src={ `../../photos/titles/${ first }.jpg` } alt={`a movie poster for ${first}`} />
                            </a>
                            <p className='main_text py-3 m-0'>{first_memo}</p>
                        </div>
                    </div>
                    {card_filler_mobile(second, second_memo)}
                    {card_filler_mobile(third, third_memo)}
                    {card_filler_mobile(fourth, fourth_memo)}
                    {card_filler_mobile(fifth, fifth_memo)}
                    {card_filler_mobile(sixth, sixth_memo)}
                </div>
            </div>
        );
    } else {
        return(
            <div id='Main'>
                <div className='container d-block w-75 py-2'>
                    <h2 className='m-2'> { season } Recommendations </h2>

                    {/* the first two cards don't use the card_filler functions because they are supposed to be visible on pageload */}
                    <div className='pt-4 pb-3'>
                        <div className='container row align-items-start background_box p-5 mb-5'>
                            <a href={`/titles/${ first }`} className='col'>
                                <img id={ first } className='smaller_img py-1' src={ `../../photos/titles/${ first }.jpg` } alt={`a movie poster for ${first}`} />
                            </a>
                            <p className='col m-auto main_text'>{first_memo}</p>
                        </div>
                    </div>
                    <div className='py-3'>
                        <div className='container row align-items-start background_box p-5 mb-5'>
                            <p className='col m-auto main_text'>{second_memo}</p>
                            <a href={`/titles/${ second }`} className='col'>
                                <img id={ second } className='smaller_img py-1' src={ `../../photos/titles/${ second }.jpg` } alt={`a movie poster for ${second}`} />
                            </a>
                        </div>
                    </div>
                    {card_filler_1(third, third_memo)}
                    {card_filler_2(fourth, fourth_memo)}
                    {card_filler_1(fifth, fifth_memo)}
                    {card_filler_2(sixth, sixth_memo)}
                </div>
            </div>
        );
     }
}

   

  


