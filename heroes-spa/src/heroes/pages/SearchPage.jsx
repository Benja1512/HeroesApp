import {HeroCard} from "../components/index.js";
import {useForm} from "../hooks/useForm.js";
import {useLocation, useNavigate} from "react-router-dom";
import queryString  from 'query-string';
import {GetHeroesByName} from "../helpers/index.js";


export const SearchPage = () => {


    const navigate = useNavigate();
    const location = useLocation();
    const heroes = GetHeroesByName(q);

    const { q = ''} = queryString.parse( location.search );

    const showSearch = (q.length === 0 ) ;
    const showError = (q.length > 0 ) && heroes.length === 0;

    const { searchText, onInputChange } = useForm ({
        searchText: q
    })

    const onSearchSubmit = (event) => {
        event.preventDefault();
       // if ( searchText.trim().length <= 1 ) return;

        navigate(`?q=${ searchText }`);

    }

    return (

    <>

        <h1>Search</h1>
        <hr />

        <div className="row">


            <form onSubmit={ onSearchSubmit }>
                <input
                    type="text"
                    placeholder="Search a hero"
                    className="form-control"
                    name="searchText"
                    autoComplete="off"
                    value={ searchText }
                    onChange={ onInputChange }
                />

                <button className="btn btn-outline-primary mt-1"/>

            </form>

            <div className="col-5">
                <h4>Searching</h4>
                <hr/>
            </div>

            <div className="col-7">
                <h4> Results </h4>
            <hr/>


                {
                  /* ( q === '' )
                        ? <div className="alert alert-primary"> Search a hero </div>
                        : ( heroes.length === 0 ) && <div className="alert alert-danger">No hero with <b> { q }
                    */
                }

                <div className="alert alert-primary animate__animated animate__fadeInLeft"
                     style{{ display: showSearch ? 'none' : ''}}>
                    Search a hero
                </div>

                <div className="alert alert-primary animate__animated animate__fadeInLeft"
                     style{{ display: showError ? 'none' : ''}}>
                    hero with <b>{ b }</b>
                </div>



                <div className="alert alert-primary">
                    Search a Hero
                </div>

                <div className="alert  alert-danger">
                    No hero with <b> ABC </b>
                </div>

                {
                    heroes.map( hero => (
                        <HeroCard key={heroes} {...hero} />
                    ))
                }
            </div>
        </div>

    </>

    )
}