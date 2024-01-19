import { React, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import withContext, { Provider } from './contexts/context';
import Home from './components/Home';
import Title from './components/Title';
import TitlePage from './components/TitlePage';
import Genre from './components/Genre';
import GenrePage from './components/GenrePage';
import Header from './components/Header';
import Results from './components/Results';
import Decades from './components/Decades';
import DecadesPage from './components/DecadesPage';
import NotFound from './components/NotFound';
import List from './components/List';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import Footer from './components/Footer';
import Cookies from 'js-cookie';

const HomeWithContext = withContext(Home);
const DecadesWithContext = withContext(Decades);
const GenreWithContext = withContext(Genre);
const TitleWithContext = withContext(Title);
const TitlePageWithContext = withContext(TitlePage);
const GenrePageWithContext = withContext(GenrePage);
const ResultsWithContext = withContext(Results);
const DecadesPageWithContext = withContext(DecadesPage);
const ListWithContext = withContext(List);
const RegisterWithContext = withContext(Register);
const LoginWithContext = withContext(Login);
const LogoutWithContext = withContext(Logout);

function App() {

let [ user, setUser ] = useState('');

async function getData() {
  console.log(document.cookie)
  if (!document.cookie) {
    setUser('');
  } else {
    let logger = await JSON.parse(Cookies.get('signedIn?'));
    if(logger === '') {
      setUser('');
    } else {
      setUser(logger);
    }
  }
  
}

useEffect(()=> { getData() }, [ setUser ]);

// used below in the NotFound component
let url = window.location.pathname;

  return (
    // Routing and passing props
    <div id='app_div'>
      <Header user={ user }/>
        <BrowserRouter>
        <Provider>
          <Routes>
            <Route 
              strict path = '/' 
              element = {
                <HomeWithContext />
              } 
            />
            <Route
              path = '/titles/:url'
              element = {
                <TitleWithContext />
              }
            />
            <Route
              path = '/titles'
              element = {
                <TitlePageWithContext />
              }
            />
            <Route
              path = '/genres/:url'
              element = {
                <GenreWithContext/>
              }
            />
            <Route
              path='/genres'
              element = {
                <GenrePageWithContext />
              }
            />
            <Route
              path='/results/:url'
              element = {
                <ResultsWithContext/>
              }
            />
            <Route
              path='/decades'
              element = {
                <DecadesPageWithContext
                  decades = {
                    [
                      {'name': 'Classics', 'url' : 'classics'},
                      {'name': '1970s', 'url' : '70s'},
                      {'name': '1980s', 'url' : '80s'},
                      {'name': '1990s', 'url' : '90s'},
                      {'name': '2000s', 'url' : '00s'},
                      {'name': '2010s', 'url' : '10s'},
                      {'name': '2020s', 'url' : '20s'}
                    ]
                  }
                />
              }
            />
            <Route
              path='/decades/:url'
              element = {
                <DecadesWithContext />
              }
            />
            <Route
              path='/list'
              element = {
                <ListWithContext />
              }
            />
            <Route
              path='/register'
              element = {
                <RegisterWithContext />
              }
            />
            <Route
              path='/login'
              element = {
                <LoginWithContext />
              }
            />
            <Route
              path='/logout'
              element = {
                <LogoutWithContext />
              }
            />
            <Route
              path='*'
              element = {
                <div className='background_box py-5 my-5 mx-auto w-50'>
                    <NotFound message={ url }/>
                </div>
              }
            />
          </Routes>
        </Provider>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
