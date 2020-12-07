import React from 'react';

export default class Header extends React.Component {
    render(){
        return(
            <nav className = "navbar navbar-dark navbar-expand-lg sticky-top" >
                <div className="container px-3">
                    <a href="index.html" className="navbar-brand">Celifood</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><a href="index.html" className="nav-link active">Home</a></li>
                            <li className="nav-item"><a href="#recipes" className="nav-link">Recetas</a></li>
                            <li className="nav-item"><a href="/" className="nav-link">Sobre Nosotros</a></li>
                            <li className="nav-item"><a href="/" className="nav-link">FAQs</a></li>
                            <li className="nav-item"><a href="#search_bar" className="nav-link"><i className="fa fa-search icon-nav" /></a></li>
                        </ul>
                    </div>
                </div>
            </ nav>
        );
    }
}
