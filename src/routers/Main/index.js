import React from 'react';
import HeroItem from "./HeroItem";
import PopularMovies from "./PopularMovies";

const Main = () => {
    return (
        <div className="site-layout-content">
            <HeroItem />
            <PopularMovies />
        </div>
    )
};

export default Main;
