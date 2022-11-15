import React from "react";

const userContext = React.createContext({
	user: {company: "", email: "", name: "", phone: "", type: "empresario"},
	handleChange: (e: any) => {},
	handleSubmit: (e: any) => {},
});

export {userContext};
