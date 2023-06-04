/** @format */

import "./FooterCard.css";

import React from "react";

export const FooterCard = () => {
	return (
		<div className="footer-card">
			<div>
				<h2>
					<i class="fa-regular fa-copyright"></i>Developed by{" "}
					<a href="https://aasim-portfolio.netlify.app/">Aasim</a>
				</h2>
			</div>
			<div>
				<ul>
					<li>
						<a target="_blank" rel="noreferrer" href="https://github.com/aasimd">
							<i class="fa-brands fa-github"></i>
						</a>
					</li>
					<li>
						<a target="_blank" rel="noreferrer" href="https://twitter.com/dthree01">
							<i class="fa-brands fa-square-twitter"></i>
						</a>
					</li>
					<li>
						<a
							target="_blank" rel="noreferrer"
							href="https://linkedin.com/in/aasim-dongarkar-28b365231"
						>
							<i class="fa-brands fa-linkedin"></i>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};
