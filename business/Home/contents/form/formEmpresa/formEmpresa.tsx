import styles from "./formEmpresa.module.css";
import {useState} from "react";
import {Link, scroller} from "react-scroll";

interface IProps {
	handleChange: (e: any) => void;
}
const FormEmpresa = ({handleChange}: IProps) => {
	const onSubmit = (e: any) => {
		e.preventDefault();
		scroller.scrollTo("FormReservaSilla", {
			duration: 1000,
			delay: 0,
			smooth: "easeInOutQuart",
			offset: -470,
		});
	};
	return (
		<>
			<div className="container">
				<div className="row text-center">
					<div className="select-wrapper"></div>
					<div className={styles.empresa}>
						<div className={styles.nav}>
							<img
								className={styles.logoKru}
								src="images/logo-kru.png"
								alt=""
							/>
						</div>
						<h1 className={styles.infoEmpresa}>
							Tu tienes el cohete y nosotros la turbina.
						</h1>
						<div className="row centrarInputEmpresa">
							<div className="col-md-6">
								<form onSubmit={onSubmit}>
									<div className="mb-3">
										<div className={styles.iconEmpresa}>
											<Link
												duration={2000}
												className="empresa"
												smooth={true}
												to="home-2"
												activeClass="active"
											>
												<i className="bx bx-right-arrow-alt"></i>
											</Link>
										</div>
										<input
											type="text"
											name="company"
											id="company"
											className="form-control inputEmpresa"
											placeholder="Escribe el nombre de tu empresa y mira qué sucede"
											onChange={handleChange}
										/>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default FormEmpresa;
