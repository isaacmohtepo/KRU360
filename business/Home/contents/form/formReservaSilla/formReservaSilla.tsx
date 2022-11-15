import InfoReservaSilla from "../../infoReservaSilla/infoReservaSilla";
import BotHablando from "../../bot/botHablando/botHablando";
import {Element} from "react-scroll";
import { User } from "../../../../../models/user.model";
import { PostFormService } from "../../../../../models/post_form.model";
import React, { useState } from "react";
import postService from "../../../../../services/user.service";

interface IProps {
	user: User;
	//form: PostFormService;
	handleChange: (e: any) => void;
    handleSubmit: (e: any) => void;
}

const FormReservaSilla = ({user, handleChange, handleSubmit}: IProps) => {

	const initSavePostForm = {
		tenant: "Kru",
		form: "Contact",
		date: new Date().toDateString(),
		status: "Sent",
		channels: ["email", "sms", "whatsapp"],
		data: user
	  };

	const [formulario, setFormulario] = useState<PostFormService>(initSavePostForm);
	//TODO: POST to API OF USER
	const onSubmit = (e: any) => {
		e.preventDefault();
		const dt = {
			tenant: formulario.tenant,
			form: formulario.form,
			date: formulario.date,
			status: formulario.status,
			channels: formulario.channels,
			data: user
		  };
	  
		console.log(dt);
		//console.log("HOLA: "+ user.name);
		//console.log("submit");
		postService.create(dt).then((response:any) =>{
			setFormulario({
				tenant: response.dt.tenant,
				form : response.dt.form,
				date: response.dt.date,
				status: response.dt.status,
				channels: response.dt.channels,
				data: response.dt.data
			});
			//setSubmitted(true);
			console.log(response.dt);
			})
			.catch((e: Error) => {
			console.log(e);
			});;
		
	};
	return (
		<>
			<InfoReservaSilla />
			<Element name="FormReservaSilla">
				<form onSubmit={onSubmit}>
					<div
						className="form-group formGeneral"
						data-aos="zoom-in-down"
					>
						<input
							type="text"
							className="form-control inputSilla"
							id="name"
							name="name"
							aria-describedby="emailHelp"
							placeholder="Nombre completo del empresario/a"
							onChange={handleChange}
						/>
						<input
							type="text"
							className="form-control inputSilla"
							id="email"
							name="email"
							aria-describedby="emailHelp"
							placeholder="Correo electrónico"
							onChange={handleChange}
						/>
						<input
							type="text"
							className="form-control inputSilla"
							id="phone"
							name="phone"
							aria-describedby="emailHelp"
							placeholder="Número  de teléfono"
							onChange={handleChange}
						/>

						<div className="botones">
							<button className="btn btnReservarSilla">
								Reservar silla
							</button>
							<button className="btn btnAunNo" type="reset">
								Aún no
							</button>
						</div>
					</div>
				</form>
			</Element>
			<BotHablando />
		</>
	);
};

export default FormReservaSilla;
