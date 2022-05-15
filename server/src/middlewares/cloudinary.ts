import Cloudinary from 'cloudinary';

const cloudinary = Cloudinary.v2;

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

export default function upload(file: any, folderName: string): Promise<any> {
  return cloudinary.uploader.upload(file, {
    folder: folderName,
  });
}
