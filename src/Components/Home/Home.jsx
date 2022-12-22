import React from 'react';
import NavBar from '../Navbar';

function Home() {
    return (
        <>
            <NavBar />
            <div className='container'>
                <h1>Home Page</h1>
                <hr />
                <p>Parabéns, você conseguiu logar em nosso sistema!</p>
            </div>
        </>
    )
}

export default Home;