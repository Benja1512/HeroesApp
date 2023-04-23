import { AppRouter } from "./router/AppRouter.jsx";
import {AuthProvider} from "./heroes/context";

export const HeroesApp = () => {

    return (
        <AuthProvider>
            <AppRouter />

        </AuthProvider>



)
