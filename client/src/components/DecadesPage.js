import { React } from 'react';

export default function DecadesPage(props) {
    //mapping movie list based on props
    if (props.context.data.movies.movies.length < 1) {
        return null;
    } else {
        //

        return( 
            <div id='DecadesPage' className='container'>
                <h1 className='my-5 pt-5'> Decades </h1>
                <div className="card-group">
                    {
                        props.decades.map(( item, i ) => {

                            //function to fill in card data below
                            function fill_in() {
                                return(
                                    <div className="card">
                                        <a href={`/decades/${ item.url }`}>
                                            <img src={ `../../photos/decades/${ item.name }.jpg` } className="card-img-top" alt={`a description of ${item.name} horror`} />
                                            <div className="card-body">
                                                <h5 className="card-title">{ item.name }</h5>
                                            </div>
                                        </a>
                                    </div>
                                );
                            }

                            //returning different widths based on screen size
                            if (window.innerWidth < 768) {
                                return(
                                    <div key={ i }  className='w-100 p-3 m-auto'>
                                        {fill_in()}
                                    </div>
                                );
                            } 
                            if (window.innerWidth < 992) {
                                return(
                                    <div key={ i }  className='w-75 p-3 m-auto'>
                                        {fill_in()}
                                    </div>
                                );
                            }
                            else {
                                return(
                                    <div key={ i } className='w-25'>
                                        {fill_in()}
                                    </div>
                                );
                            }
                        })
                    }
                </div>
            </div>
        )
    }
}