import React from 'react';

export default class Heading extends React.Component {
    render() {
        return (
            <div className="about">
                <div className="row py-0 py-sm-3 pt-lg-5">
                    <div className="col-12 text-center text-uppercase mt-5">
                        <h1 className="text-dark pb-3">
                            Qué es la celiaquía?
                        </h1>
                        <div className="border-top border-dark w-25 mx-auto" />
                    </div>
                </div>
                <div className="row justify-content-sm-center pt-5 py-0 py-sm-3 pb-lg-5">
                    <div className="col-md-9 text-center mx-5">
                        <p>La enfermedad celíaca es una afección autoinmune que daña al revestimiento del intestino delgado. Este daño proviene de una reacción a la ingestión de gluten. Esta es una sustancia que se encuentra en el trigo, la cebada, el centeno y posiblemente la avena. Y también en alimentos elaborados con estos ingredientes.
                        </p>
                        <p>El intestino dañado no puede absorber los nutrientes de los alimentos.</p>
                    </div>
                </div>
            </div>
        );
    }
}