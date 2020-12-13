import React from 'react';

import Card from '../Components/Card';

export default class Recetas extends React.Component {
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
                            <form className="form-inline">
                                <div className="input-icons mx-auto w-75">
                                    <i className="fas fa-search icon" />
                                    <input id="search-input" className="form-control search-input w-100" type="search" placeholder="Busca una receta..." aria-label="Search" />
                                    <div className="border-top border-dark " />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="container pb-4 ">
                    <div className="row pt-3 pb-5 text-center">
                        {/* {this.state.cards.map((cardInfo) => {
                            return <Card item={cardInfo} />;
                        })} */}
                    </div>
                </div>
            </div>
        );
    }
}