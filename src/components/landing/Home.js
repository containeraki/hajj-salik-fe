import React from 'react';
import Header from './Header';
import Section from './Section';
import HomeMiddle from './HomeMiddle';
import Login from '../Login';
import Footer from './Footer';


const Home = () => {
    return (
        <div>
            <Header/>

            <div className="container text-muted">
                <Login/>
                <HomeMiddle/>
            </div>
            
        </div>
    );
};



export default Home;
