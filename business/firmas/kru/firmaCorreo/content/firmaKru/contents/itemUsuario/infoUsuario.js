export  default function InfoUsuario (props){
    const nombrFirma = {
        fontFamily: `'Montserrat', sans-serif;`,
        color: "rgb(251, 133, 1)",
        fontSize: `${props.sizeNombre}px`,
        marginLeft: "155px",
        marginTop: "14px",
        fontWeight: "900",
        marginBottom: "0",
        textTransform: "uppercase"
    };

    const cargo = {
        fontFamily: `'Montserrat', sans-serif;`,
        color: "rgb(255, 255, 255)",
        fontSize: `${props.sizeCargo}px`,
        marginLeft: "155px",
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