import  cloudinary from 'cloudinary'
import path from 'path' 
import {fileURLToPath}  from 'url'
const __dirname =  path.dirname(fileURLToPath(import.meta.url))
import dotenv  from 'dotenv'
dotenv.config({path:path.join(__dirname ,  '../../config/.env')})
console.log({cl:process.env.cloudName});
cloudinary.v2.config({
    cloud_name: process.env.cloudName,
    api_key:  process.env.apikey,
    api_secret:  process.env.apisecret,
    secure: true
});

export default cloudinary.v2