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
							<i className="fa-solid fa-truck"></i> <br />
							<b>Free Shipping</b>
						</p>
					</li>
					<li>
						<p>
							<i className="fa-solid fa-medal"></i> <br />
							<b>Quality Products</b>
						</p>
					</li>
					<li>
						<p>
							<i className="fa-sharp fa-solid fa-box"></i>
							<br />
							<b>14 days return</b>
						</p>
					</li>
					<li>
						<p>
							<i class="fa-sharp fa-solid fa-headphones"></i>
							<br />
							<b>24/7 Support</b>
						</p>
					</li>
				</ul>
			</div>
		</div>
	);
};
