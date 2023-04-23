import {Navbar} from "../../ui";
import {DcPage, MarvelPage, SearchPage, HeroPage } from "../pages/index.js";

import { Navigate,  Route, Routes } from 'react-router-dom';

export const HeroesRoutes = () => {
    return (

        <>


            <div className="container">
                <Routes>

                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="dc" element={<DcPage />} />

                    <Route path="search" element={<SearchPage />} />
                    <Route path="hero/:heroId" element={<HeroPage />} />


                    <Route path="/" element={<navigate to="/marvel" />} />

                </Routes>
            </div>


        </>



    )
}