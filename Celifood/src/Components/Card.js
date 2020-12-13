import React from 'react';

import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default class Card extends React.Component {
    render() {
        return (
            <div>
                <a id="search_bar" />
                <div className="container">
                    <div className="row py-0 py-md-3 py-lg-5">
                        <div className="col-12 text-center text-uppercase mt-5">
                            <h1 className="text-dark pb-3">
                                Más recetas deliciosas
                            </h1>
                            <div className="border-top border-dark w-25 mx-auto" />
                        </div>
                    </div>
                </div>
                <div className="container mb-4 py-5">
                    <div className="row py-5">
                        <div className="col-12 mt-3">
                            {/* <h1 class="text-dark pb-3">
					Más recetas deliciosas
				</h1> */}
                            <form className="form-inline">
                                <div className="input-icons mx-auto w-75">
                                    <i className="fas fa-search icon" />
                                    <input id="search-input" className="form-control search-input w-100" type="search" placeholder="Busca una receta..." aria-label="Search" />
                                    <div className="border-top border-dark " />
                                </div>
                                {/* <button class="btn btn-outline-success ml-0" type="submit">Buscar</button> */}
                            </form>
                        </div>
                    </div>
                </div>
                <div className="container pb-4 ">
                    <div className="row pt-3 pb-5 text-center">
                        <div className="col-lg-4 p-4">
                            <h4 className="my-4">Pizza sin glúten</h4>
                            <img src="img/pizza_sm.png" alt="" className="w-100 rounded" />
                            {/* <p class="lead pt-3"></p> */}
                            <a href="pizza.html" className="btn btn-success btn-md mt-4 px-5">Ver receta</a>
                        </div>
                        <div className="col-lg-4 p-4">
                            <h4 className="my-4">Tarta sin glúten</h4>
                            <img src="img/tarta_sm.png" alt="" className="w-100 rounded" />
                            {/* <p class="lead pt-3"></p> */}
                            <a href="tarta.html" className="btn btn-success btn-md mt-4 px-5">Ver receta</a>
                        </div>
                        <div className="col-lg-4 p-4">
                            <h4 className="my-4">Panqueques sin glúten</h4>
                            <img src="img/pancakes_sm.png" alt="" className="w-100 rounded" />
                            {/* <p class="lead pt-3">Pan de maíz</p> */}
                            <a href="pancake.html" className="btn btn-success btn-md mt-4 px-5">Ver receta</a>
                        </div>
                        <div className="col-lg-4 p-4">
                            <h4 className="my-4">Pizza sin glúten</h4>
                            <img src="img/pizza_sm.png" alt="" className="w-100 rounded" />
                            {/* <p class="lead pt-3"></p> */}
                            <a href="pizza.html" className="btn btn-success btn-md mt-4 px-5">Ver receta</a>
                        </div>
                        <div className="col-lg-4 p-4">
                            <h4 className="my-4">Tarta sin glúten</h4>
                            <img src="img/tarta_sm.png" alt="" className="w-100 rounded" />
                            {/* <p class="lead pt-3"></p> */}
                            <a href="tarta.html" className="btn btn-success btn-md mt-4 px-5">Ver receta</a>
                        </div>
                        <div className="col-lg-4 p-4">
                            <h4 className="my-4">Panqueques sin glúten</h4>
                            <img src="img/pancakes_sm.png" alt="" className="w-100 rounded" />
                            {/* <p class="lead pt-3">Pan de maíz</p> */}
                            <a href="pancake.html" className="btn btn-success btn-md mt-4 px-5">Ver receta</a>
                        </div>
                        <div className="col-lg-4 p-4">
                            <h4 className="my-4">Pizza sin glúten</h4>
                            <img src="img/pizza_sm.png" alt="" className="w-100 rounded" />
                            {/* <p class="lead pt-3"></p> */}
                            <a href="pizza.html" className="btn btn-success btn-md mt-4 px-5">Ver receta</a>
                        </div>
                        <div className="col-lg-4 p-4">
                            <h4 className="my-4">Tarta sin glúten</h4>
                            <img src="img/tarta_sm.png" alt="" className="w-100 rounded" />
                            {/* <p class="lead pt-3"></p> */}
                            <a href="tarta.html" className="btn btn-success btn-md mt-4 px-5">Ver receta</a>
                        </div>
                        <div className="col-lg-4 p-4">
                            <h4 className="my-4">Panqueques sin glúten</h4>
                            <img src="img/pancakes_sm.png" alt="" className="w-100 rounded" />
                            {/* <p class="lead pt-3">Pan de maíz</p> */}
                            <a href="pancake.html" className="btn btn-success btn-md mt-4 px-5">Ver receta</a>
                        </div>
                        <div className="col-lg-4 p-4">
                            <h4 className="my-4">Pizza sin glúten</h4>
                            <img src="img/pizza_sm.png" alt="" className="w-100 rounded" />
                            {/* <p class="lead pt-3"></p> */}
                            <a href="pizza.html" className="btn btn-success btn-md mt-4 px-5">Ver receta</a>
                        </div>
                        <div className="col-lg-4 p-4">
                            <h4 className="my-4">Tarta sin glúten</h4>
                            <img src="img/tarta_sm.png" alt="" className="w-100 rounded" />
                            {/* <p class="lead pt-3"></p> */}
                            <a href="tarta.html" className="btn btn-success btn-md mt-4 px-5">Ver receta</a>
                        </div>
                        <div className="col-lg-4 p-4">
                            <h4 className="my-4">Panqueques sin glúten</h4>
                            <img src="img/pancakes_sm.png" alt="" className="w-100 rounded" />
                            {/* <p class="lead pt-3">Pan de maíz</p> */}
                            <a href="pancake.html" className="btn btn-success btn-md mt-4 px-5">Ver receta</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}