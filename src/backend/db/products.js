/** @format */

import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
	{
		_id: uuid(),
		title: "Air Force 1 Mid x Off-White",
		brand: "Nike",
		price: 5000,
		categoryName: "Casual",
		gender: "Unisex",
		rating: 4.4,
		size: [5, 8, 9, 10],
		image:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cd621b0a-87fd-4441-aaa4-f2efb4e68e08/air-force-1-mid-off-white-shoes-7LDx46.png",
		inStock: true
	},
	{
		_id: uuid(),
		title: "Air Zoom G.T. Jump",
		brand: "Nike",
		price: 4000,
		categoryName: "Sport",
		gender: "Unisex",
		rating: 4.3,
		size: [6, 7, 8, 9, 10],
		image:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f5105d1c-6d28-43f5-a7c4-93269102481a/air-zoom-gt-jump-basketball-shoes-22QS5F.png",
		inStock: true
	},
	{
		_id: uuid(),
		title: "Air Force 1 '07",
		brand: "Nike",
		price: 4000,
		categoryName: "Casual",
		gender: "Unisex",
		rating: 4.6,
		size: [5, 6, 7, 8, 9.5, 10],
		image:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png",
		inStock: false
	},
	{
		_id: uuid(),
		title: "Olive Green Solid Sports Sandals",
		brand: "Roadster",
		price: 699,
		categoryName: "Sandal",
		gender: "Men",
		rating: 4.1,
		size: [7, 8, 9, 10],
		image:
			"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/9045131/2022/1/4/d880ad35-ac2b-45e3-bf4c-cf1be88fc2021641292945829-Roadster-Men-Olive-Green-Solid-Sports-Sandals-59816412929455-2.jpg",
		inStock: true
	},
	{
		_id: uuid(),
		title: "Men Solid Formal Derbys",
		brand: "El Paso",
		price: 3000,
		categoryName: "Formal",
		gender: "Men",
		rating: 4.3,
		size: [7, 8, 8.5, 9, 9.5, 10],
		image:
			"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/1/13/a3c1634f-69bf-4499-8015-27159dae6bdc1610527526586-1.jpg",
		inStock: false
	},
	{
		_id: uuid(),
		title: "Solid Oxford Formal Shoes",
		brand: "Allen Solly",
		price: 2300,
		categoryName: "Formal",
		gender: "Men",
		rating: 4.6,
		size: [7, 8, 8.5, 9, 9.5, 10],
		image:
			"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/18787626/2022/6/20/a4eec8a7-deb8-44f3-a3b1-86c9e897aaaa1655717938087AllenSollyMenBrownSolidOxfordFormalShoes2.jpg",
		inStock: true
	},
	{
		_id: uuid(),
		title: "Black & Grey Comfort Sandals",
		brand: "Roadster",
		price: 1819,
		categoryName: "Sandal",
		gender: "Unisex",
		rating: 2.5,
		size: [7, 8, 9, 10],
		image:
			"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/9045137/2021/9/24/824303bc-d660-4509-87ca-273407bd15b61632489607447-Roadster-Men-Black--Grey-Comfort-Sandals-1191632489607323-6.jpg",
		inStock: true
	},
	{
		_id: uuid(),
		title: "Black Solid Formal Slip-On Shoes",
		brand: "Allen Solly",
		price: 4000,
		categoryName: "Formal",
		gender: "Men",
		rating: 3.5,
		size: [7, 8, 9, 10],
		image:
			"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19170018/2022/7/19/8a786789-1516-4a19-b392-62cd3c1b9bff1658232167497AllenSollyMenBlackSolidFormalSlip-OnShoes1.jpg",
		inStock: false
	},
	{
		_id: uuid(),
		title: "Men's Lined Loafers",
		brand: "Tod's",
		price: 14999,
		categoryName: "Formal",
		gender: "Men",
		rating: 4.0,
		size: [7, 8, 9, 10, 11],
		image:
			"https://www.tods.com/fashion/tods/XXM01G0HG60NF5S607/XXM01G0HG60NF5S607-03.jpg?imwidth=810",
		inStock: true
	},
	{
		_id: uuid(),
		title: "Women's Patent Pumps",
		brand: "Krafter",
		price: 1000,
		categoryName: "Formal",
		gender: "Women",
		rating: 4.5,
		size: [5, 6, 7, 8, 9],
		image:
			"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/20501940/2022/10/22/eec8c6a4-775a-45ae-a441-d954d70f83c51666446724060KrafterWomenBlackSolidFormalShoes1.jpg",
		inStock: false
	},
	{
		_id: uuid(),
		title: "Solid Formal Derbys",
		brand: "San Francisco",
		price: 4000,
		categoryName: "Formal",
		gender: "Men",
		rating: 4.5,
		size: [8, 9.5, 10, 11],
		image:
			"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/15144416/2021/8/14/bdce3ad5-9ee5-44ec-887d-12b2fba3b1371628915099505SanFrisscoMenFauxLeatherHydeCherryPatentFormalShoes1.jpg",
		inStock: true
	},
	{
		_id: uuid(),
		title: "Solid Air Max Sol Sports Sandals",
		brand: "Nike",
		price: 3000,
		categoryName: "Sandal",
		gender: "Men",
		rating: 3.0,
		size: [7, 8, 9, 10],
		image:
			"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21252214/2023/1/9/b848d7b4-a3c6-4ed8-aa8e-1121ad4a50d41673248556747-Nike-Men-Solid-Air-Max-Sol-Sports-Sandals-921673248556342-1.jpg",
		inStock: true
	},
	{
		_id: uuid(),
		title: "Men Black Solid Traso Sports Sandals",
		brand: "Adidas",
		price: 1679,
		categoryName: "Sandal",
		gender: "Men",
		rating: 5.0,
		size: [7, 8, 9, 10],
		image:
			"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/18737874/2022/11/25/eb69810c-664b-4fc8-9502-30392199edee1669352826643-ADIDAS-Men-Sandals-8331669352826253-1.jpg",
		inStock: false
	},
	{
		_id: uuid(),
		title: "Men's Cap Toe Oxfords",
		brand: "Allen Edmonds",
		price: 3500,
		categoryName: "Formal",
		gender: "Men",
		rating: 3.0,
		size: [7, 8, 9, 10, 11],
		image:
			"https://www.allenedmonds.com/blob/product-images/39099/ec/40/00391/ec4000391_single_feed1000.jpg",
		inStock: true
	},
	{
		_id: uuid(),
		title: "Women's Leather Loafers",
		brand: "Krafter",
		price: 6000,
		categoryName: "Formal",
		gender: "Women",
		rating: 3.0,
		size: [5, 6, 7, 8, 9],
		image:
			"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/20496106/2022/10/22/308e917e-b1bd-443c-8c4b-0a889df698281666414404639KrafterWomenPinkSolidFormalShoes1.jpg",
		inStock: true
	},
	{
		_id: uuid(),
		title: "Navy Blue Sandals",
		brand: "Roadster",
		price: 1819,
		categoryName: "Sandal",
		gender: "Men",
		rating: 2.5,
		size: [7, 8, 9, 10],
		image:
			"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/9024271/2021/12/14/adcd6f4e-5a04-4a75-a3e9-41d60717d9e51639473773417RoadsterMenNavyBlueSandals2.jpg",
		inStock: false
	},
	{
		_id: uuid(),
		title: "Black & Yellow Comfort Sandals",
		brand: "Sparx",
		price: 799,
		categoryName: "Sandal",
		gender: "Men",
		rating: 4.5,
		size: [7, 8, 9, 10],
		image:
			"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/18619162/2022/6/4/f3d67425-632a-4dfa-9d9b-758bcd2795cd1654323903901SparxMenBlackYellowComfortSandals1.jpg",
		inStock: true
	},
	{
		_id: uuid(),
		title: "Men Brand Logo Print Sports Sandals",
		brand: "Woodland",
		price: 999,
		categoryName: "Sandal",
		gender: "Men",
		rating: 4.2,
		size: [7, 8, 9, 10],
		image:
			"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22082096/2023/5/2/4c0da204-19f3-4dd2-8e04-6216e282bce11683011984737-Woodland-Men-Sports-Sandals-5861683011984345-1.jpg",
		inStock: false
	},
	{
		_id: uuid(),
		title: "Men Leather Comfort Sandals",
		brand: "Woodland",
		price: 1819,
		categoryName: "Sandal",
		gender: "Men",
		rating: 4.4,
		size: [7, 8, 9, 10],
		image:
			"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22082114/2023/3/27/6883f668-e231-462d-84f0-8892e73d9cbb1679894914282-Woodland-Men-Sandals-7481679894913724-1.jpg",
		inStock: true
	},
	{
		_id: uuid(),
		title: "Men's Wingtip Brogues",
		brand: "Church's",
		price: 4500,
		categoryName: "Formal",
		gender: "Men",
		rating: 3.9,
		size: [7, 8, 9, 10, 11],
		image:
			"https://www.church-footwear.com/content/dam/churchs_products/E/EOB/EOB013/9AGXF0AAB/EOB013_9AGX_F0AAB_F_000000_SLR.png/_jcr_content/renditions/cq5dam.web.white.1280x1280.jpeg",
		inStock: true
	},
	{
		_id: uuid(),
		title: "PUMA 22 FH Rubber Unisex Cricket Shoes",
		brand: "Puma",
		price: 4000,
		categoryName: "Sport",
		gender: "Unisex",
		rating: 4.8,
		size: [6, 7, 8, 9, 9.5, 10],
		image:
			"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1050,h_1050/global/106713/04/sv01/fnd/IND/fmt/png/PUMA-22-FH-Rubber-Unisex-Cricket-Shoes",
		inStock: false
	},
	{
		_id: uuid(),
		title: "Air Force 1 '07 Red",
		brand: "Nike",
		price: 4000,
		categoryName: "Casual",
		gender: "Men",
		rating: 4.6,
		size: [8, 9.5, 10],
		image:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/8019cb9e-17c1-4ee9-8139-ca174aabe3f5/air-force-1-07-lv8-1-mens-shoes-x0bMdL.png",
		inStock: true
	},
	{
		_id: uuid(),
		title: "Women's Patent Leather Oxfords",
		brand: "Fashimo",
		price: 1200,
		categoryName: "Formal",
		gender: "Women",
		rating: 4.0,
		size: [5, 6, 7, 8, 9],
		image:
			"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/20080192/2022/9/19/acdc46a6-c0ae-4718-ac46-38f72e95943d1663592109018CasualShoes2.jpg",
		inStock: true
	},
	{
		_id: uuid(),
		title: "Men's Derby Shoes",
		brand: "Paul Smith",
		price: 6000,
		categoryName: "Formal",
		gender: "Men",
		rating: 3.6,
		size: [7, 8, 9, 10, 11],
		image:
			"https://assets.ajio.com/medias/sys_master/root/20210211/7rAy/60242e0caeb269698162789d/-473Wx593H-410274312-tan-MODEL3.jpg",
		inStock: false
	},
	{
		_id: uuid(),
		title: "Women's Slingback Pumps",
		brand: "Jimmy Choo",
		price: 9000,
		categoryName: "Formal",
		gender: "Women",
		rating: 4.2,
		size: [5, 6, 7, 8, 9],
		image:
			"https://media.jimmychoo.com/image/upload/q_auto:best,f_auto,dpr_2.0,w_900,h_900,c_fit/ROWPROD_PRODUCT/images/original/AMITA45PTZ_000074_ANGLE.jpg",
		inStock: true
	},
	{
		_id: uuid(),
		title: "Ultraboost 21",
		brand: "Adidas",
		price: 9000,
		categoryName: "Sport",
		gender: "Unisex",
		size: [5, 7.5, 8, 8.5, 9],
		image:
			"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f4882d178d824972931facc4011e6941_9366/Ultraboost_21_Shoes_White_S23840_01_standard.jpg",
		rating: 4.7,
		inStock: true
	},
	{
		_id: uuid(),
		title: "Classic Leather",
		brand: "Reebok",
		price: 3500,
		categoryName: "Casual",
		gender: "Men",
		size: [7, 8, 9, 10, 11],
		image:
			"https://images.reebok.eu/reebok-classic-leather-shoes_19729267_44828860_2048.jpg?c=1",
		rating: 4.2,
		inStock: false
	},
	{
		_id: uuid(),
		title: "Superstar Green",
		brand: "Adidas",
		price: 6000,
		categoryName: "Casual",
		gender: "Women",
		size: [6, 7, 8, 9],
		image:
			"https://assets.adidas.com/images/w_600,f_auto,q_auto/378edbf20017450594daaf79009464b1_9366/Superstar_Shoes_Green_IE4605_01_standard.jpg",
		rating: 4.5,
		inStock: true
	},
	{
		_id: uuid(),
		title: "Air Max 270 React Watermelon",
		brand: "Nike",
		price: 8500,
		categoryName: "Casual",
		gender: "Women",
		size: [6, 7, 8],
		image:
			"https://img.stadiumgoods.com/nike-air-max-270-react-eng-watermelon_15619598_43101385_1000.jpg",
		rating: 4.3,
		inStock: true
	},
	{
		_id: uuid(),
		title: "Men's Tassel Loafers",
		brand: "John Lobb",
		price: 6000,
		categoryName: "Formal",
		gender: "Men",
		size: [7, 8, 9, 10, 11],
		image:
			"https://cdn-images.italist.com/image/upload/t_medium_mobile_dpr_2_q_auto_v_2,f_auto/424c3bfd79134f2a547ff8505a963157.jpg",
		rating: 4.8,
		inStock: false
	},
	{
		_id: uuid(),
		title: "Gel-Kayano 27",
		brand: "ASICS",
		price: 7500,
		categoryName: "Sport",
		gender: "Men",
		size: [8, 9, 9.5, 10.5, 11],
		image:
			"https://shopesy.in/wp-content/uploads/2022/11/IMG-20220622-WA00791_11zon-600x597.jpg",
		rating: 4.6,
		inStock: true
	},
	{
		_id: uuid(),
		title: "Zoom Fly 3",
		brand: "Nike",
		price: 10000,
		categoryName: "Sport",
		gender: "Unisex",
		size: [6, 7, 8, 8.5, 9, 9.5],
		image:
			"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e6116e6d-5f76-45b2-876d-277488b30f5d/zoom-fly-3-mens-running-shoes-2M10wN.png",
		rating: 4.9,
		inStock: false
	},
	{
		_id: uuid(),
		title: "Chuck Taylor All Star High Top White",
		brand: "Converse",
		price: 3200,
		categoryName: "Casual",
		gender: "Unisex",
		size: [5, 6, 7.5, 8, 9, 10, 11],
		image:
			"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ci5qxcnirgtzjpxztmvu/converse-chuck-taylor-all-star-high-top-unisex-shoe-xX439O.png",
		rating: 4.1,
		inStock: true
	},
	{
		_id: uuid(),
		title: "Womens Ria Black Derby shoes",
		brand: "Clarks",
		price: 3000,
		categoryName: "Formal",
		gender: "Women",
		size: [5, 6, 7, 8, 9],
		image:
			"https://img.tatacliq.com/images/i8/437Wx649H/MP000000015080735_437Wx649H_202210301828141.jpeg",
		rating: 4.4,
		inStock: false
	},
	{
		_id: uuid(),
		title: "Gel-Nimbus 23",
		brand: "ASICS",
		price: 9000,
		categoryName: "Sport",
		gender: "Women",
		size: [6, 7, 8],
		image:
			"https://storage.sg.content-cdn.io/cdn-cgi/image/width=550,height=412,quality=75,format=auto/in-resources/e671b7de-bcf9-4637-af5c-0ffe1c9d208a/Images/ProductImages/Source/1012B272_250_SR_RT_GLB.jpg",
		inStock: true,
		rating: 4.2
	},
	{
		_id: uuid(),
		title: "Superstar",
		brand: "Adidas",
		price: 6000,
		categoryName: "Casual",
		gender: "Men",
		size: [8, 9, 10],
		image:
			"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/af02d704cd834e08a853ae8b010e7e4d_9366/Superstar_Shoes_White_GX1934_01_standard.jpg",
		inStock: false,
		rating: 3.8
	},
	{
		_id: uuid(),
		title: "Air Max 2090",
		brand: "Nike",
		price: 8000,
		categoryName: "Casual",
		gender: "Unisex",
		size: [5, 6, 7, 8, 9],
		image:
			"https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/929cb310-f1a1-4a3c-99da-8df794e83576/air-max-2090-pure-platinum-release-date.jpg",
		inStock: true,
		rating: 4.5
	},
	{
		_id: uuid(),
		title: "Ultraboost 21",
		brand: "Adidas",
		price: 9000,
		categoryName: "Sport",
		gender: "Men",
		size: [9, 9.5, 10, 10.5, 11],
		image:
			"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/822d1f6419e74aaab479af9c01084c1d_9366/Ultraboost_Light_Shoes_Black_HP9204_01_standard.jpg",
		inStock: true,
		rating: 4.0
	},
	{
		_id: uuid(),
		title: "Classic Leather",
		brand: "Reebok",
		price: 3500,
		categoryName: "Casual",
		gender: "Unisex",
		size: [6, 7, 8, 9, 10],
		image:
			"https://images.reebok.eu/reebok-classic-leather-shoes_19725869_44783490_2048.jpg?c=1",
		inStock: true,
		rating: 3.7
	},
	{
		_id: uuid(),
		title: "Black & Grey Solid Sports Sandals",
		brand: "Sparx",
		price: 959,
		categoryName: "Sandal",
		gender: "Men",
		size: [7, 8, 9, 10],
		image:
			"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/productimage/2020/9/26/2c7f12f5-dfc5-4aa1-abe2-c8aa85e647691601077809459-1.jpg",
		inStock: true,
		rating: 4.3
	},
	{
		_id: uuid(),
		title: "Black Solid Sports Sandals",
		brand: "Roadster",
		price: 1219,
		categoryName: "Sandal",
		gender: "Men",
		size: [7, 8, 9, 10],
		image:
			"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/9024233/2021/12/29/7c7674cf-90e3-4274-b3e4-6bab4a520f711640774169523-Roadster-Men-Black-Fisherman-Sandals-321640774169005-1.jpg",
		inStock: false,
		rating: 2.5
	},
	{
		_id: uuid(),
		title: "Men Black Solid Sports Sandals",
		brand: "Woodland",
		price: 799,
		categoryName: "Sandal",
		gender: "Men",
		size: [7, 8, 9, 10],
		image:
			"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/20745612/2022/11/24/a455e85a-0f4d-4733-846c-bf1e686bbc1c1669265566496-Woodland-Men-Sandals-2171669265566074-1.jpg",
		inStock: true,
		rating: 4.7
	},
	{
		_id: uuid(),
		title: "Air Zoom Terra Kiger 7",
		brand: "Nike",
		price: 9500,
		categoryName: "Sport",
		gender: "Men",
		size: [9, 9.5, 10, 10.5, 11],
		image:
			"https://img01.ztat.net/article/spp-media-p1/5c3e00084ffd46a59748852744daa128/0f6453e69e7346afa33fc8025a521e08.jpg",
		inStock: false,
		rating: 3.0
	},
	{
		_id: uuid(),
		title: "Gel-Quantum 90 3",
		brand: "ASICS",
		price: 7000,
		categoryName: "Casual",
		gender: "Women",
		size: [6, 7, 8],
		image:
			"https://storage.sg.content-cdn.io/cdn-cgi/image/width=550,height=412,quality=75,format=auto/in-resources/e671b7de-bcf9-4637-af5c-0ffe1c9d208a/Images/ProductImages/Source/1204A003_106_SR_RT_GLB.jpg",
		inStock: true,
		rating: 4.9
	},
	{
		_id: uuid(),
		title: "Chuck Taylor All Star Low Top Navy",
		brand: "Converse",
		price: 3000,
		categoryName: "Casual",
		gender: "Men",
		size: [8, 9, 10, 11],
		image: "https://images.journeys.com/images/products/1_46328_ZM_THERO.JPG",
		inStock: true,
		rating: 4.0
	},
	{
		_id: uuid(),
		title: "Air Force 1 '07",
		brand: "Nike",
		price: 8000,
		categoryName: "Casual",
		gender: "Women",
		size: [6, 7, 8],
		image:
			"https://images.vegnonveg.com/resized/700X573/8231/air-force-1-07-lv8-pearl-whiteale-brown-sesame-white-637df3ff93444.jpg",
		inStock: true,
		rating: 4.5
	},
	{
		_id: uuid(),
		title: "Gel-Kayano 28",
		brand: "ASICS",
		price: 11000,
		categoryName: "Sport",
		gender: "Women",
		size: [6, 7, 8],
		image:
			"https://storage.sg.content-cdn.io/cdn-cgi/image/width=550,height=412,quality=75,format=auto/in-resources/e671b7de-bcf9-4637-af5c-0ffe1c9d208a/Images/ProductImages/Source/1012B047_401_SR_RT_GLB.jpg",
		inStock: false,
		rating: 3.2
	},
	{
		_id: uuid(),
		title: "Chuck 70 High Top",
		brand: "Converse",
		price: 4200,
		categoryName: "Casual",
		gender: "Unisex",
		size: [5, 6, 7, 8, 9, 10, 11],
		image:
			"https://d2ob0iztsaxy5v.cloudfront.net/product/192317/1923177270m8_zm.jpg",
		inStock: true,
		rating: 4.8
	},
	{
		_id: uuid(),
		title: "Gel-Kayano 28 Lite-Show",
		brand: "ASICS",
		price: 12000,
		categoryName: "Sport",
		gender: "Men",
		size: [9, 9.5, 10, 10.5, 11],
		image:
			"https://storage.sg.content-cdn.io/cdn-cgi/image/width=550,height=412,quality=75,format=auto/in-resources/e671b7de-bcf9-4637-af5c-0ffe1c9d208a/Images/ProductImages/Source/1011B473_001_SR_RT_GLBNSW.jpg",
		inStock: true,
		rating: 4.7
	},
	{
		_id: uuid(),
		title: "Air Zoom Pegasus 38",
		brand: "Nike",
		price: 9000,
		categoryName: "Sport",
		gender: "Unisex",
		size: [6, 7, 8, 8.5, 9],
		image:
			"https://i0.wp.com/drewhammell.com/wp-content/uploads/2021/04/IMG_2810.jpg?resize=1024%2C807&ssl=1",
		inStock: false,
		rating: 3.9
	},
	{
		_id: uuid(),
		title: "Chuck 70 Low Top",
		brand: "Converse",
		price: 4000,
		categoryName: "Casual",
		gender: "Unisex",
		size: [6, 7, 8, 9, 10],
		image:
			"https://cdn.shopify.com/s/files/1/0610/8230/4670/products/162058-1-1_1600x.jpg?v=1661218920",
		inStock: true,
		rating: 4.2
	},
	{
		_id: uuid(),
		title: "Gel-Quantum 360 6",
		brand: "ASICS",
		price: 13000,
		categoryName: "Sport",
		gender: "Men",
		size: [9, 9.5, 10, 10.5, 11],
		image:
			"https://images.asics.com/is/image/asics/1201A062_029_SR_RT_GLB?$sfcc-product$&fmt=jpg&wid=683&hei=512",
		inStock: true,
		rating: 4.9
	},
	{
		_id: uuid(),
		title: "Blazer Low '77 Vintage",
		brand: "Nike",
		price: 7000,
		categoryName: "Casual",
		gender: "Unisex",
		size: [5, 6, 7, 8, 9],
		image:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fca59736-ff84-4797-9e64-0978d3b43731/blazer-low-77-vintage-herenschoenen-ZSBNx7.png",
		inStock: true,
		rating: 4.5
	},
	{
		_id: uuid(),
		title: "Superstar Bold",
		brand: "Adidas",
		price: 7000,
		categoryName: "Casual",
		gender: "Women",
		size: [5, 6, 7, 8],
		image:
			"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a2981db2748f45548328ac2500bcff08_9366/Superstar_Bold_Shoes_White_FW2547_01_standard.jpg",
		inStock: false,
		rating: 3.5
	},

	{
		_id: uuid(),
		title: "Men Round Toe Slip On Clogs",
		brand: "Aqualite",
		price: 800,
		categoryName: "Sandal",
		gender: "Men",
		size: [7, 8, 9, 10],
		image:
			"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22337680/2023/3/14/20473800-648b-4a62-ae7e-d60cc24c87d71678796886844AqualiteMenOliveGreenEthnicClogsSandals1.jpg",
		inStock: true,
		rating: 3.5
	},
	{
		_id: uuid(),
		title: "Black Sports Sandals",
		brand: "Roadster",
		price: 900,
		categoryName: "Sandal",
		gender: "Men",
		size: [7, 8, 9, 10],
		image:
			"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/9024257/2021/8/13/f39d2a01-1386-4fda-93ad-1a48162f65281628859356302-Roadster-Men-Black-Sports-Sandals-3371628859355825-2.jpg",
		inStock: false,
		rating: 4.2
	},
	{
		_id: uuid(),
		title: "Men Navy Blue & Orange Solid Comfort Sandals",
		brand: "Woodland",
		price: 999,
		categoryName: "Sandal",
		gender: "Men",
		size: [7, 8, 9, 10],
		image:
			"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/20356082/2022/10/27/f15dcb69-0644-42b6-a2d9-f110b134f5461666854858225-Woodland-Men-Navy-Blue--Orange-Solid-Comfort-Sandals-9816668-1.jpg",
		inStock: true,
		rating: 2.8
	},
	{
		_id: uuid(),
		title: "Men Brown Leather Shoe-Style Sandals",
		brand: "Hush Puppies",
		price: 3399,
		categoryName: "Sandal",
		gender: "Men",
		size: [7, 8, 9, 10],
		image:
			"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19231622/2022/7/23/360752cd-df83-47bc-afc1-caca7753d8501658565284917HushPuppiesMenBrownLeatherShoe-StyleSandals1.jpg",
		inStock: true,
		rating: 4.5
	},
	{
		_id: uuid(),
		title: "Men Green & Gold Coloured Solid Sports Sandals",
		brand: "Sparx",
		price: 989,
		categoryName: "Sandal",
		gender: "Men",
		size: [7, 8, 9, 10],
		image:
			"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19896200/2022/9/13/808d34da-69d7-4aeb-9bdb-372326b2552e1663042044358SparxGENTSSS-5731.jpg",
		inStock: false,
		rating: 3.7
	}
];
