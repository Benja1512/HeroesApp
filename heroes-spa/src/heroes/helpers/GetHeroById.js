import {heroes} from "../data/Hero.js";


export const GetHeroById = ( id ) => {
    return heroes.find( hero => hero.id === id)
}