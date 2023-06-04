/** @format */

import React from "react";
import "./ServicesCard.css";
export const ServicesCard = () => {
	return (
		<div>
			<div className="services-list">
				<ul>
					<li>
						<p>
							<i className="fa-solid fa-truck"></i> <b>Free Shipping</b>
						</p>
					</li>
					<li>
						<p>
							<i className="fa-solid fa-medal"></i> <b>Quality Product</b>
						</p>
					</li>
					<li>
						<p>
							<i className="fa-sharp fa-solid fa-box"></i> <b>14 days return</b>
						</p>
					</li>
					<li>
						<p>
							<i class="fa-sharp fa-solid fa-headphones"></i>{" "}
							<b>24/7 Support</b>
						</p>
					</li>
				</ul>
			</div>
		</div>
	);
};
