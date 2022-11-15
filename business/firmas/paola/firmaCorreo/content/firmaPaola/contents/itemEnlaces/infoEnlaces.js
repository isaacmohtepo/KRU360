export default function InfoEnlaces (props) {

    const logos = {
        maxWidth: "25px",
        height: "25px",
    };



    const a = {
        position: "relative",
        color: "#131313",
        textDecoration: "unset",
    };
    return(

            <a style={a} href={props.link}> <img src={props.logo} alt="web" style={logos} />{props.enlace}</a>
    )
}