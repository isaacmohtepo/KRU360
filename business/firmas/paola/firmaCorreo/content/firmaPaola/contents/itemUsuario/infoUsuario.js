export  default function InfoUsuario (props){
    const nombrFirma = {
        fontFamily: `'Montserrat', sans-serif;`,
        color: "rgb(19,19,19)",
        fontSize: `${props.sizeNombre}px`,
        marginLeft: "258px",
        marginTop: "100px",
        fontWeight: "500",
        marginBottom: "0",
        textTransform: "capitalize"
    };

    const cargo = {
        fontFamily: `'Montserrat', sans-serif;`,
        color: "rgb(19,19,19)",
        fontSize: `${props.sizeCargo}px`,
        marginLeft: "258px",
        fontWeight: "400",
        textTransform: "uppercase"
    };
    return(
        <div>
            <div>
                <h1 id="nombreFirma" style={nombrFirma}>
                    <strong>{props.name}</strong>
                </h1>
            </div>
            <div style={cargo}>
                <p id="cargoFirma" >
                    {props.position}
                </p>
            </div>
        </div>
    )
}