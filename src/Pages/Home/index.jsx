import React, { useContext } from 'react';
import Login from '../../Components/Home/Login';
import HomePage from '../../Components/Home/Home';
import Context from "../../context";

function Home() {
    const { user } = useContext(Context)
    return (user?.logged ? <HomePage /> : <Login />);
}

export default Home;