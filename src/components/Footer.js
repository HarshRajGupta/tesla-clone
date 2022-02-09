/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../App.css";

function Footer(props) {
	return (
		<footerend>
			<div>
				<a href="/">
					{props.footer}
				</a>
			</div>
			<div>
				<a href="/">
					Privacy & Legal
				</a>
			</div>
			<div>
				<a href="/">
					Contact
				</a>
			</div>
			<div>
				<a href="/">
					Careers
				</a>
			</div>
			<div>
				<a href="/">
					News
				</a>
			</div>
			<div>
				<a href="/">
					Engage
				</a>
			</div>
			<div>
				<a href="/">
					Locations
				</a>
			</div>
		</footerend>
	);
}

export default Footer;