/** @format */

import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
	{
		_id: uuid(),
		categoryName: "Casual",
		description:
			"Casual shoes are typically not made from leather and are usually not considered dressy enough to be worn with a suit.",
		image:
			"https://d2ob0iztsaxy5v.cloudfront.net/product/192317/1923177270m8_zm.jpg"
	},
	{
		_id: uuid(),
		categoryName: "Sport",
		description:
			"A shoe designed to be worn for sports, exercising, or recreational activity, as racquetball, jogging, or aerobic dancing..",
		image:
			"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1050,h_1050/global/106713/04/sv01/fnd/IND/fmt/png/PUMA-22-FH-Rubber-Unisex-Cricket-Shoes"
	},
	{
		_id: uuid(),
		categoryName: "Formal",
		description:
			"A shoe that is suitable for wearing with formal clothes: Students are required to wear a tie, blazer, khakis, and dress shoes.",
		image:
			"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/18787626/2022/6/20/a4eec8a7-deb8-44f3-a3b1-86c9e897aaaa1655717938087AllenSollyMenBrownSolidOxfordFormalShoes2.jpg"
	},
	{
		_id: uuid(),
		categoryName: "Sandal",
		description:
			"Sandals are an open type of footwear, with a sole held to the wearer's foot by straps or thongs passing over the instep and around the ankle. Good for Rains.",
		image:
			"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/18737874/2022/11/25/eb69810c-664b-4fc8-9502-30392199edee1669352826643-ADIDAS-Men-Sandals-8331669352826253-1.jpg"
	}
];
