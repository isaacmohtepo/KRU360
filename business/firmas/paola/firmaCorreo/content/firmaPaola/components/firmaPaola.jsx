import Swal from 'sweetalert2';
import InfoUsuario from "../contents/itemUsuario/infoUsuario";
import InfoEnlaces from "../contents/itemEnlaces/infoEnlaces";

const FirmaPaola = (props) => {


    let fondo = "https://cdn2.hubspot.net/hubfs/21834017/fondo-firma-de-correo-paola-1.jpg";
    let logoInstagram = "https://cdn2.hubspot.net/hubfs/21834017/icono-de-instagram.png";
    let logoFacebook = "https://cdn2.hubspot.net/hubfs/21834017/icono-de-facebook.png";

    let ubicacion = "https://cdn2.hubspot.net/hubfs/21834017/ubicacion.png";
    let telefono = "https://cdn2.hubspot.net/hubfs/21834017/telefono.png";
    let correo = "https://cdn2.hubspot.net/hubfs/21834017/email.png";
    let web = "https://cdn2.hubspot.net/hubfs/21834017/web-1.png";


    const styleBacground = {
        position: "relative",
        backgroundImage: `url('${fondo}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "700px",
        height: "300px",
        marginBottom: "30px",
        padding: "1px,",
        overflow: "hidden",
    };

    const contacto = {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        marginLeft: "258px",
    };


    const social = {
        marginLeft: "560px",
        display: "flex",
        gap: "10px",
    }

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

                        <div>


                            <InfoUsuario name={props.name} sizeNombre={props.sizeNombre} sizeCargo={props.sizeCargo}
                                         position={props.position}/>

                            <div style={contacto}>

                                <InfoEnlaces logo={ubicacion} enlace="Calle 29a #22-46 Esquina - Cartagena - Colombia"/>
                                <InfoEnlaces enlace="(+57) 315 207 6808" logo={telefono}/>
                                <InfoEnlaces enlace="paola@paolacortes.com" logo={correo}/>
                                <InfoEnlaces enlace="www.paolacortes.com" logo={web} />

                            </div>

                            <div style={social}>
                                <InfoEnlaces logo={logoFacebook} link="https://www.facebook.com/paolacortesdermopigmentacion" />
                                <InfoEnlaces logo={logoInstagram} link="https://www.instagram.com/paolacortesdermopigmentacion/"/>

                            </div>
                        </div>
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
export default FirmaPaola;
