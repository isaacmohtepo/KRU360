import styles from "./formVendeMas.module.css";
import {Link} from "react-scroll";
import RedesSocialGeneral from "../../../../shared/redesSocialGeneral/redesSocialGeneral";
import Swal from 'sweetalert2'
interface Props {
	handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const FormVendeMas: React.FC<Props> = ({handleChange}) => {



	function eleccion (e:any){
		handleChange(e);
		Swal.fire({
			position: 'center',
			title: '¡Prepárate para el despegue!',
			showConfirmButton: false,
			timer: 1500,
		})
	}


	return (
		<>
			<section data-aos="zoom-in" className={styles.conteSection3}>
				<div className="selectFormVendeMas">
					<select
						id="type"
						className="form-select formSelectVendeMas"
						defaultValue="empresario"
						onChange={eleccion}
						name="type">
						<option  id="type" value="empresario">
							Soy empresario
						</option>
						<option id="type" value="emprendedor">
							Soy emprendedor
						</option>
					</select>
				</div>
				<h2>
					Podemos hacer que tu página web{" "}
					<span className={styles.colorVende}>venda por ti.</span>
				</h2>

				<div className={styles.botones}>
					<Link

						className="btn btnDespegar"
						smooth={true}
						to="despegar"
						duration={2000}
						activeClass="active"
						spy={true}
					>
						¡Quiero despegar!
					</Link>
					<button className="btn btnReservar">Reservar cita</button>
					<RedesSocialGeneral />
				</div>
			</section>
		</>
	);
};

export default FormVendeMas;
