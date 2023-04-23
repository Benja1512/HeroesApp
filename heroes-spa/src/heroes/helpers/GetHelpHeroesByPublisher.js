import { heroes } from '../data/Hero.js'

export const GetHelpHeroesByPublisher = ( publisher ) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];
    if( !validPublishers.includes(( publisher )) {
        throw new Error(`${ publisher } is not a valid publisher`);
    }

    return heroes.filter( heroes => heroes.publisher === publisher );
}