import Swal from 'sweetalert2';
import InfoUsuario from "../contents/itemUsuario/infoUsuario";
import InfoEnlaces from "../contents/itemEnlaces/infoEnlaces";

const FirmaKru360 = (props) => {
    let fondo = "https://cdn2.hubspot.net/hubfs/21834017/Firma-de-Correo-KRU360-4.png"
    let logoWeb = "https://cdn2.hubspot.net/hubfs/21834017/web.png";
    let logoInstagram = "https://cdn2.hubspot.net/hubfs/21834017/Instagram.jpg";
    let logoLinkedin = "https://cdn2.hubspot.net/hubfs/21834017/LinkedIn.png";

    let linkWeb = "https://www.kru360.com/";
    let linkInstagram = "https://www.instagram.com/wearekru360/";
    let linkLinkedin = "https://www.linkedin.com/jobs/view/3019408521/";

    const styleBacground = {
        backgroundImage: `url('${fondo}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "419px",
        height: "185px",
        marginBottom: "30px",
        padding: "1px,",
    };


    const containerGeneral = {
        display: "flex",
        justifyContent: "center",
    };


    const btnCopiar = {
        border: "3px solid #fb8501",
        borderRadius: "10px",
        color: "#fb8501",
        fontWeight: "700",
    }

    return (
        <div className="container mt-md-5">
            <div className="row">
                <div className="col-md-2">

                </div>
                <div id="firmaCopiar" className="col-md-8 centrar-firma" style={containerGeneral}>
                    <div style={styleBacground}>
                        <InfoUsuario name={props.name} sizeNombre={props.sizeNombre} sizeCargo={props.sizeCargo} position={props.position}/>

                        <InfoEnlaces enlace="www.kru360.com" logo={logoWeb}
                                     link={linkWeb} />
                        <InfoEnlaces enlace="Kru 360" logo={logoLinkedin}
                                     link={linkLinkedin} />
                        <InfoEnlaces enlace="@wearekru360" logo={logoInstagram}
                                     link={linkInstagram}/>
                    </div>
                </div>
                <div className="col-md-2">

                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">
                    <button className="btn btnCopiar" style={btnCopiar} onClick={copiarFirma}>Copiar fima</button>
                </div>
            </div>

        </div>
    );

    function copiarFirma() {

        let codigoACopiar = document.getElementById('firmaCopiar');
        let seleccion = document.createRange();
        seleccion.selectNodeContents(codigoACopiar);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(seleccion);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();

        Swal.fire({
            title: 'Firma copiada',
            text: 'Firma copiada al portapapeles',
            type: 'success',
            confirmButtonText: 'OK'
        });

    }

};
export default FirmaKru360;
