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
			"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f4882d178d824972931facc4011e6941_9366/Ultraboost_21_Shoes_White_S23840_01_standard.jpg"
	},
	{
		_id: uuid(),
		categoryName: "Formal",
		description:
			"A shoe that is suitable for wearing with formal clothes: Students are required to wear a tie, blazer, khakis, and dress shoes.",
		image:
			"https://wallpapers.com/images/hd/shop-display-of-mens-fashion-n5l9h51qxeollg2u.jpg"
	},
	{
		_id: uuid(),
		categoryName: "Sandal",
		description:
			"Sandals are an open type of footwear, with a sole held to the wearer's foot by straps or thongs passing over the instep and around the ankle. Good for Rains.",
		image:
			"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/635ebea2d7c1424b899baf580080a4d3_9366/CRUZIO_M_Black_GB2943_01_standard.jpg"
	}
];
