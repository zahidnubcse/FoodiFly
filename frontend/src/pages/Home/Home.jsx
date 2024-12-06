//import React from 'react';
import Header from '../../components/Header/Header';
import './home.css'
import ExploreMenu from './../../components/ExploreMenu/ExploreMenu';
import { useState } from 'react';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';

const Home = () => {

    const [category,setCategory] = useState("All");
    return (
        <div>
            <Header/>
            <ExploreMenu catagory={category} setCatagory={setCategory}/>
            <FoodDisplay catagory={category}/>
            <AppDownload/>
        </div>
    );
};

export default Home;