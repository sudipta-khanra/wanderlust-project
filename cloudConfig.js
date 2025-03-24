//to require
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary"); //require("multer-storage-cloudinary") & Destructuring is used here.

//to connect cloudinary with backend
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});


//defines where uploaded files are stored and which formats are allowed
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params:{
        folder: "wanderlust_DEV",
        allowerdFormats: ["png", "jpg", "jpeg"],
    },
});

//are exported for use in other parts
module.exports = {
    cloudinary,
    storage,
}

//This code connects your backend to Cloudinary.
//It defines where uploaded files are stored and which formats are allowed.
//These settings are exported for use in other parts of your app.