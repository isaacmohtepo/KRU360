// import axios from "axios";
import { PostFormService } from "../models/post_form.model";
import {User} from "../models/user.model";
import http from "./http-common";

export class UserService {
	private url = "http://localhost:3000/api/user";
	/*private tenant = "KRU";
	private channels = ["email", "sms", "whatsapp"];
	private form = "Contact";
	private date = new Date();
	private status = "Sent";*/
	//private data

	constructor(url: string | undefined) {
		this.url = url ? url : this.url;
	}
	postUser = (form: PostFormService) =>{
		//TODO: validate user
		return http.post<PostFormService>("/", form);
		
	}

}

const create = (form: PostFormService) => {
    return http.post<PostFormService>("/", form);
}

const postService = {
    create,
};

export default postService;
