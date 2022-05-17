import path from 'path';
import multer from 'multer';

export default multer({
  storage: multer.diskStorage({}),
  fileFilter: (req: any, file, cb) => {
    const ext = path.extname(file.originalname);
    const error: any = new Error('File type is not supported');

    if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') {
      cb(error, false);
      return;
    }
    cb(null, true);
  },
});
