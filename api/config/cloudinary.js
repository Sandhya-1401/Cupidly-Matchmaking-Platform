import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
	cloud_name: "dfw9zclpa",
	api_key: "329838114473811",
	api_secret: "EI0KfyjFaizFAugmPKoWdyGUYqA",
});

export default cloudinary;
