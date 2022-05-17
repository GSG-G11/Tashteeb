import { Request, Response } from 'express';
import handleUnknownExceptions from '../../error/handleUnkownError';
import upload from '../../middlewares/cloudinary';

const uploadImage = async (req: Request, res: Response) => {
  try {
    const path: any = req.file?.path;
    const result = await upload(path, 'images');
    res.status(200).json({
      message: 'Image uploaded successfully',
      result,
    });
  } catch (err: any) {
    handleUnknownExceptions(err, res);
  }
};
export default uploadImage;
