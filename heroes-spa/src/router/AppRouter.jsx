import {React, Navigate, Route, Routes} from 'react-router-dom';


import {Navbar} from "../ui";
import { LoginPage } from "../auth/pages/LoginPage.jsx";
import {DcPage, HeroesRoutes, MarvelPage} from "../heroes";
import {PrivateRoute} from "./PrivateRoute";


export const AppRouter = () => {

    return (
        <>

            <Routes>

                <Route path="login/*" element={
                    <PublicRoute>
                        { /* <LoginPage /> */ }
                        <Routes>
                            <Route path="/*" element={<LoginPage/>} />
                        </Routes>
                    </PublicRoute>

                }
                />



                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroesRoutes />
                        </PrivateRoute>

                } />


                { /* <Route path="/*" element={<HeroesRoutes />} /> */}
                { /*  <Route path="login" element={<LoginPage />} /> */}

            </Routes>

        </>

    )
}