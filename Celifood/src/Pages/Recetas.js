import React from 'react';

import Card from '../Components/Card';
// import '../css/recetas.css';

export default class Recetas extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            recetas: [],
            recetasQ: [],
            titulo: "",
            isLoaded: false,
            q: ""
        }
    }

    componentDidMount(){
        this.obtenerRecetasAPI();
    }

    buscar = (event) => {
        this.setState({q: event.target.value});
        let q = event.target.value;
        let recetasQAux = [];
        for(let index = 0; index < this.state.recetas.length; index++){
            let receta = this.state.recetas[index];
            if(receta.titulo.toLowerCase().includes(q.toLowerCase())){
                recetasQAux.push(receta);
            }
        }
        this.setState({recetasQ: recetasQAux});
    }

    async obtenerRecetasAPI(){
        fetch("http://165.22.191.161/api/vero/recetas")
            .then(res => res.json())
            .then(
                //Todo funciona
                (result) => {
                    this.setState({
                        recetas: result.data,
                        recetasQ: result.data
                    });
                },
                //Si da error
                (error) => {
                    alert("Error al obtener datos");
                }
            )
    }

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
                <div className="container mb-4 pb-4 pt-4">
                    <div className="row py-4">
                        <div className="col-12 mt-3">
                            <form className="form-inline">
                                <div className="input-icons mx-auto w-75">
                                    <i className="fa fa-search icon" />
                                    <input id="search-input" className="form-control search-input w-100" type="search" placeholder="Busca una receta..." aria-label="Search" name="q" value={this.state.q} onChange={this.buscar}/>
                                    <div className="border-top border-dark " />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="container pt-3 pb-5 mb-5">
                    <div className="row pb-5 text-center">
                        {this.state.recetasQ.map((itemInfo) => {
                            return <Card item={itemInfo} />;
                        })}
                    </div>
                </div>
            </div>
        );
    }
}