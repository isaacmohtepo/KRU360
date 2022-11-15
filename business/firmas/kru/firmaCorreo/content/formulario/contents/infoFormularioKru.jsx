import React from "react";
import FirmaKru360 from "../../firmaKru/components/firmaKru360";

export default class InfoFormularioKru extends React.Component {
    state = {
        nombre: "isaac montero",
        cargo: "developer software",
        pagina: "",
        linkedin: "",
        instagram: "",
        sizeNombre: "25",
        sizeCargo: "15",
    };
    nombre = (e) => {
        this.setState({nombre: e.target.value});
    };
    cargo = (e) => {
        this.setState({cargo: e.target.value});
    };
    sizeNombre = (e) => {
        this.setState({sizeNombre: e.target.value});
    };
    sizeCargo = (e) => {
        this.setState({sizeCargo: e.target.value});
    };

    render() {
        const {nombre} = this.state;
        const {cargo} = this.state;
        const {sizeNombre} = this.state;
        const {sizeCargo} = this.state;
        const formControl = {
            border: "2px solid #eeeff6",
            borderRadius: "5px",
        };
        const card = {
            padding: "14px",
            borderRadius: "10px",
            border: "2px solid #eeeff6"
        }

        return (
            <div className="container">

                <div className="row mt-md-5">
                    <div className="col-md-4">

                    </div>
                    <div className="col-md-4 card" style={card}>
                        <form name="registro">
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={this.nombre}
                                    style={formControl}
                                    placeholder="Nombre Completo"
                                />
                            </div>
                            <div className="mb-3">

                                <input type="text" className="form-control" style={formControl} onChange={this.cargo}
                                       placeholder="Cargo"/>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="customRange3" className="form-label">Ajustar
                                        nombre: {sizeNombre}</label>

                                    <input type="range" className="form-range" min="10" max="25" step="1"
                                           id="customRange3" onChange={this.sizeNombre}/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="customRange3" className="form-label">Ajustar
                                        Cargo: {sizeCargo}</label>

                                    <input type="range" className="form-range" min="10" max="15" step="1"
                                           id="customRange3" onChange={this.sizeCargo}/>
                                    <output className="bubble"></output>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4">
                    </div>
                </div>
                <FirmaKru360 name={nombre} position={cargo} sizeNombre={sizeNombre} sizeCargo={sizeCargo}/>
            </div>

        );
    }
}
