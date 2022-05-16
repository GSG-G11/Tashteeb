import { v2 as Cloudinary } from 'cloudinary';

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

Cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

const upload = async (image: string, folderName: string) => {
  const uploadResponse = await Cloudinary.uploader.upload(image, { folder: folderName });
  const { public_id: publicID } = uploadResponse;
  return publicID;
};
export default upload;
