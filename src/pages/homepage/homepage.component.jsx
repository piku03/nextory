import React from 'react';
import './homepage.styles.scss';
import {Link} from 'react-router-dom';

const Home = () => (
    <div className="App-header">
        <p>Welcome To Nextory</p>
        <p>Please click on the below link to go Login page</p>
        <div className="options">
            <Link className="option" to="/login">
                Log in
            </Link>
            
        </div>
    </div>
)
export default Home;