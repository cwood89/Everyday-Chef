import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import chefHat from "@iconify/icons-mdi/chef-hat";

import "../style/Login.css";

function Login({ showModal, user, handleChangeLogin, handleSubmitLogin }) {
	return (
		<div>
			<div className="login__title">
				<div className="chef-hat">
					<Icon icon={chefHat} />
				</div>
				<h1 className="logo">
					EveryDay <span>Chef</span>
				</h1>
			</div>
			<div className="row login-container">
				<div className="col-md-6 login">
					<form className="login-form" onSubmit={handleSubmitLogin}>
						<h1 className="login-heading">Log In</h1>
						<div className="form-group">
							<label htmlFor="InputEmail1">
								<span className="fa fa-envelope" id="em1"></span>UserName
							</label>
							<input type="username" value={user.userName} className="form-control" onChange={handleChangeLogin} name="userName" placeholder="Enter UserName" />
						</div>
						<div className="form-group">
							<label htmlFor="InputPassword1">
								<span className="fa fa-key" id="em2"></span>Password
							</label>
							<input type="password" value={user.password} className="form-control" onChange={handleChangeLogin} name="password" placeholder="Password" />
						</div>
						<button type="submit" className="btn btn-primary btn-lg">
							Submit
						</button>
					</form>
				</div>

				<div className="col-md-6 signup">
					<div className="signup-items">
						<h1 className="tracking-in-expand-fwd signup-heading ">Sign Up</h1>
						<h3 className="info">Begin Your Everyday Chef Journey Today</h3>

						<button type="button" className="btn btn-primary btn-lg" onClick={(e) => showModal()}>
							SignUp
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Login;
