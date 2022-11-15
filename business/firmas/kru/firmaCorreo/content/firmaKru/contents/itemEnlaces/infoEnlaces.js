export default function InfoEnlaces (props) {
    const divGeneralFlex = {
        display: "flex",
    };

    const logos = {
        maxWidth: "23px",
        height: "23px",
        marginLeft: "155px",
    };
    const infoSocial = {
        fontFamily: `'Montserrat', sans-serif;`,
        color: "rgb(255, 255, 255)",
        marginLeft: "10px",
        marginTop: "1px",
        marginButtom: "2px",
        textDecoration: "unset",
        marginBottom: "6px",
        fontZise: "12px",
    };


    const a = {
        color: "#fff",
        textDecoration: "unset",
    };
    return(
        <div style={divGeneralFlex}>
            <img src={props.logo} alt="web" style={logos} />{" "}
            <p  style={infoSocial}>
                <a style={a} href={props.link}>{props.enlace}</a>
            </p>
        </div>
    )
}