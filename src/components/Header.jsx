import React from "react";
import { Link } from "react-router-dom";

import "../style/Header.css";
import { Icon } from "@iconify/react";
import chefHat from "@iconify/icons-mdi/chef-hat";
import heartSolid from "@iconify/icons-clarity/heart-solid";
import outlineLogin from "@iconify/icons-ic/outline-login";

function Header() {
	return (
		<div className="header container">
			<div className="row">
				<div id="favorites-div" className="col-md-3">
					<Link to="/login">
						<h1 id="favorites-h1">
							<Icon icon={outlineLogin} />
							Login
						</h1>
					</Link>
				</div>

				<div className="head text-center col-md-6">
					<Link to="/">
						<h1 id="logo">
							<span id="hat">
								<Icon icon={chefHat} />
							</span>
							Everyday
							<span id="chef-red">Chef</span>
						</h1>
					</Link>
				</div>

				<div id="login-div" className="col-md-3 position-relative container-fluid">
					<Link to="/favorites">
						<h1 id="favorites-h1">
							<Icon icon={heartSolid} />
							Favorites
						</h1>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Header;
