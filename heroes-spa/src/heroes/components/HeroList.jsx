
import {HeroCard} from "./";
import {GetHelpHeroesByPublisher} from "../helpers/index.js";
import {useMemo} from "react";

export const HeroList = ({ publisher }) => {

    const heroes = useMemo( () => GetHelpHeroesByPublisher( publisher ), [ publisher ]);


    return (

        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                heroes.map( hero => (
                    <HeroCard
                        key={ hero.id }
                        { ...hero }/>
                ))

            }
        </div>

    )
}